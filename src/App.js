import "./App.css";
import { useState, useEffect } from "react";
import userContext from "./Context";
import SearchedGames from "./Components/SearchedGames";
import GameDeals from "./Components/GameDeals";

export const fetcher = (...args) => fetch(...args).then(response=>response.json())

function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false)

  return (
    <div className="App">
      <userContext.Provider value={ {gameTitle }}>
      <div>
        <h1>Search For A Game</h1>
        <form onSubmit={(event)=>{event.preventDefault(); setShouldSearch(true)}}>
          <input
            type="text"
            placeholder="Assasin's creed..."
            onChange={(event) => {
              setGameTitle(event.target.value);
              setShouldSearch(false)
            }}
          ></input>
          <button>Search Game Title</button>
        </form>
      </div>
      {shouldSearch && <SearchedGames /> }
      <GameDeals />
      </userContext.Provider>
    </div>
  );
}

export default App;
