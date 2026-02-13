import { useState } from 'react';
import Question from "./Question";
import Gif from './Gif';

function App() {
  const [count, setCount] = useState(0);
  const [valentineBool, setValentineBool] = useState(null);
  return (
    <div className="flex flex-row min-h-screen justify-center items-center size-auto p-auto bg-pink-300">
      <div className="box-border box-content p-4 text-center m-auto bg-pink-200 rounded-lg">
        <Question {...{valentineBool}}/>
        <Gif 
          {...{ count, valentineBool }}
        />
        <div className="flex">
          <div className="flex-1 bg-rose-300 rounded-sm" onClick={() => setValentineBool(true)}>
            <button>Yes</button>
          </div>
          <div className="flex-1 bg-fuchsia-300 rounded-sm " onClick={() => setValentineBool(false)}>
            <button>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
