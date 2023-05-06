import React, {useContext} from "react";
import userContext from "../Context";
import { fetcher } from "../App";
import useSWR from 'swr'

export default function SearchGames(){

    const {gameTitle} = useContext(userContext)
    const {data : searchResults, error : searchResultsError} = useSWR(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`,fetcher)
    
    return <div>{searchResults && searchResults.map((game,key) => {
        return <div key={key}>
          <h2>{game.external}</h2>
          <img src={game.thumb} />
          <h2>{game.cheapest}</h2>
        </div>
      })}
      </div>

};