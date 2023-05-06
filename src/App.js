import "./App.css";
import { useState } from "react";
import userContext from "./Context";
import SearchedGames from "./Components/SearchedGames";
import GameDeals from "./Components/GameDeals";

export const fetcher = (...args) =>
  fetch(...args).then((response) => response.json());

function App() {
  const [gameTitle, setGameTitle] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchLimit, setSearchLimit] = useState(3);

  return (
    <div className="flex flex-col items-center w-[100vw] h-[100vh]">
      <userContext.Provider value={{ gameTitle, searchLimit, setSearchLimit }}>
        <div className="bg-teal-600 w-full flex flex-col place-items-center min-h-1/3 h-auto">
          <h1 className="mt-4 text-4xl font-bold text-gray-100">
            Search For A Game
          </h1>
          <form
            className="my-4 flex flex-row place-items-center"
            onSubmit={(event) => {
              event.preventDefault();
              setShouldSearch(true);
            }}
          >
            <input
              className="rounded-md mx-4 p-1 pl-2 bg-teal-100 text-black border-teal-900 border-2 shadow-lg"
              type="text"
              placeholder="Assasin's creed..."
              onChange={(event) => {
                setGameTitle(event.target.value);
                setShouldSearch(false);
                setSearchLimit(3);
              }}
            ></input>
            <button className="bg-teal-900 hover:shadow-xl shadow-lg  text-white py-1 h-9 rounded-md px-3">
              Search Game
            </button>
          </form>
          {shouldSearch && <SearchedGames />}
        </div>
        <GameDeals />
      </userContext.Provider>
    </div>
  );
}

export default App;
