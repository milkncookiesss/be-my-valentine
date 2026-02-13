import { useState } from "react";

function Question({ valentineBool }) {
  const question = "Will you be my Valentine?";
  return (
    <div>
      <h1 className="font-bold">{ question }</h1>
    </div>
  )
}

export default Question;
