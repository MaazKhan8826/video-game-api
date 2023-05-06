import React from "react";
import useSWR from "swr";
import {fetcher} from "../App"

export default function GameDeals(){
    const {data : gameDeals} = useSWR('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3',fetcher)
    
    return <div>
    <h1>Latest Deals!</h1>
    {gameDeals && gameDeals.map((games,key) => {
      return <div key={key}>
        <h2>{games.title}</h2>
        <img src={games.thumb} />
        <h2>{games.salePrice}</h2>
        <h3>You save {Math.round(games.savings)}%</h3>
      </div>
    })}
  </div>
}