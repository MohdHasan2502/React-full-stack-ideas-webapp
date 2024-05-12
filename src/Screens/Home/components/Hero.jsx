import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

function Hero() {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        Note Top 25 ideas for your journey
      </h2>
      <h2 classname="text-center my-3">
        <strong className="text-secondary">Like your Favoute Idea</strong> and
        note them out without signup{" "}
      </h2>
      <div>
        <select onChange={((e)=>setTheme(e.target.value))}
        className="select select-bordered w-full max-w-xs">
          <option disabled selected>
           Select Theme
          </option>
          <option>light</option>
          <option>dark</option>
          <option>cupcake</option>
          <option>bumblebee</option>
          <option>emerald</option>
          <option>corporate</option>
          <option>synthwave</option>
          <option>retro</option>
        </select>
      </div>
    </div>
  );
}

export default Hero;
