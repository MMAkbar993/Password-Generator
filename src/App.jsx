import { useState, useCallback, useEffect } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [upper, setUpperCase] = useState(false);
  const [lower, setLowerCase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "";
    if (upper) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) str += "abcdefghijklmnopqrstuvwxyz";
    // if (symbol) pass += "`~!@#$%^&*()_+{}";
    // if (number) pass += "1234567890";

    if (number) str += "0123456789";
    if (symbol) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, upper, lower, number, symbol, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, symbol, upper, lower, passwordGenerator]);

  return (
    <div className="flex justify-center items-center">
      <div className=" w-96 h-96 text-white px-4 py-8 bg-orange-700 rounded shadow-orange-50 drop-shadow-lg my-40">
        <div>
          <input
            type="text"
            readOnly
            className="py-8 px-20 rounded  text-black"
            value={password}
            placeholder="Password"
          />
        </div>
        <div>
          <label className=" my-4 font-sans">Password Length</label>
          <input
            type="number"
            className=" my-4 text-black mx-6"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-around text-sm">
          <label className=" my-4 font-sans">Upppercase</label>
          <input
            type="checkbox"
            defaultChecked={upper}
            id="upperCase"
            onChange={() => {
              setUpperCase((prev) => !prev);
            }}
            className=""
          />
        </div>
        <div className="flex justify-around text-sm">
          <label className=" my-4 font-sans">Lowercase</label>
          <input
            type="checkbox"
            defaultChecked={lower}
            id="lowerCase"
            onChange={() => {
              setLowerCase((prev) => !prev);
            }}
            className=""
          />
        </div>
        <div className="flex justify-around text-sm">
          <label className=" my-4 font-sans">Symbol</label>
          <input
            type="checkbox"
            defaultChecked={symbol}
            id="symbol"
            onChange={() => {
              setSymbol((prev) => !prev);
            }}
            className=""
          />
        </div>
        <div className="flex justify-around text-sm">
          <label className=" my-4 font-sans">Number</label>
          <input
            type="checkbox"
            defaultChecked={number}
            id="number"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
