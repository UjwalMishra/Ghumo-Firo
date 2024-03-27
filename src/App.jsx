import { useState } from "react";
import Tours from "./components/Tours";
import "./App.css";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);

  // not intrested btn
  function removetourHandler(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[3rem] uppercase font-bold mt-[5rem]">
          No Tours Left
        </h1>
        <button
          onClick={() => setTours(data)}
          className="btn-red bg-red-400 rounded-xl text-[1.4rem] p-2 text-gray-800 font-bold mt-8 uppercase"
        >
          Refresh Content
        </button>
      </div>
    );
  }

  return (
    <>
      <div>
        <Tours tours={tours} removetourHandler={removetourHandler}></Tours>
      </div>
    </>
  );
}

export default App;
