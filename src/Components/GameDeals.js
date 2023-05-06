import React from "react";
import useSWR from "swr";
import { fetcher } from "../App";
import "../App.css";

export default function GameDeals() {
  const { data: gameDeals } = useSWR(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3",
    fetcher
  );

  return (
    <div className="bg-neutral-200 w-full h-full flex flex-col place-items-center">
      <h1 className="text-3xl text-teal-800 font-semibold my-3">
        Latest Deals!
      </h1>
      <div className="flex flex-row place-content-between">
        {gameDeals &&
          gameDeals.map((games, key) => {
            return (
              <div
                className="mx-4 my-2 bg-teal-600 rounded-lg p-4 w-[15vw] h-[250px] flex flex-col place-items-center hover:shadow-xl shadow-lg"
                key={key}
              >
                <h2 className="text-center font-serif align-middle font-semibold text-2xl text-white mb-2 h-[60px]">
                  {games.title}
                </h2>
                <img
                  className="my-2 border-black border-2 rounded-md w-full overflow-hidden"
                  src={games.thumb}
                />
                <h2 className="my-1 text-xl font-semibold text-white">
                  {games.salePrice}$
                </h2>
                <h3 className="text-lg font-medium">
                  You save <b>{Math.round(games.savings)}%</b>!
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
