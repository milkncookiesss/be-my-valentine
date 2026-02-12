import { useState } from "react";

function Gif({ gif, count }) {
  console.log(gif.count);
  return (
    <div>
      <img src={ gif.gif } alt="loading..."></img>
    </div>
  )
}

export default Gif;
