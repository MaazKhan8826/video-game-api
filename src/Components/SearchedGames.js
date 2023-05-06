import React, { useContext } from "react";
import userContext from "../Context";
import { fetcher } from "../App";
import useSWR from "swr";
import "../App.css";

export default function SearchGames() {
  const { gameTitle, searchLimit, setSearchLimit } = useContext(userContext);
  const { data: searchResults, isLoading } = useSWR(
    `https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=${searchLimit}`,
    fetcher
  );

  return (
    <div className="flex flex-col place-content-center place-items-center">
      <div className="grid grid-cols-3 place-content-between place-items-between">
        {isLoading ? (
          <h1 className="text-4xl text-center font-bold col-span-3 mb-10 mt-8 text-white">Loading...</h1>
        ) : (
          searchResults.map((game, key) => {
            return (
              <div
                className="flex flex-col place-content-between text-center bg-white mx-4 my-2 p-4 rounded-lg h-[200px] w-[15vw] shadow-lg hover:shadow-xl"
                key={key}
              >
                <h2 className="text-2xl font-serif font-semibold text-teal-900">
                  {game.external}
                </h2>
                <img
                  className="my-2 border-black border-2 rounded-md overflow-hidden"
                  src={game.thumb}
                />
                <h2 className="font-semibold text-semibold text-teal-900 text-xl mb-1">
                  {game.cheapest}$
                </h2>
              </div>
            );
          })
        )}
      </div>
      {searchLimit < 60 && (searchResults && Object.keys(searchResults).length>0) ? (
        <button
          className="mt-3 mb-6 bg-purple-700 text-gray-50 font-semibold py-2 px-4 rounded-md"
          onClick={() => setSearchLimit((limit) => limit + 3)}
        >
          Load More
        </button>
      ) : null}
    </div>
  );
}
