import { useState } from 'react';
import Question from "./Question";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-row min-h-screen justify-center items-center size-auto">
      <div className="text-center">
        <Question />
        <h1>there will be something here</h1>
        <div className="flex">
          <div className="flex-1 bg-rose-300">
            <button>a</button>
          </div>
          <div className="flex-1">
            <button>b</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
