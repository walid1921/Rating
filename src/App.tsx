import React from "react";
import "./App.css";
import StarRating from "./components/starRating";
import Test from "./components/test";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-zinc-800">
      <StarRating maxRating={5} messages={["terrible", "bad", "ok", "good"]} />
      <StarRating maxRating={10} size={25} className=" text-red-400" />
      <Test />
    </div>
  );
}

export default App;
