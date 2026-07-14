import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("lightgrey");

  return (
    <>
      <div
        className="w-full h-screen duration-200 bg-white flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg br-white px-3 py-2 rounded-3xl bg-white">
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              onClick={() => setColor("lightblue")}
              style={{ backgroundColor: "lightblue" }}
            >
              Blue
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-lg br-white px-3 py-2 rounded-3xl bg-white">
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              onClick={() => setColor("green")}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-lg br-white px-3 py-2 rounded-3xl bg-white">
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              onClick={() => setColor("pink")}
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-lg br-white px-3 py-2 rounded-3xl bg-white">
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              onClick={() => setColor("yellow")}
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 shadow-lg br-white px-3 py-2 rounded-3xl bg-white">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("purple")}
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
