import { useState } from 'react';
import Question from "./Question";
import Gif from './Gif';

function App() {
  const [count, setCount] = useState(0);
  const gifList = ["https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFlZ2EwYTNyN25vaGdhb21mZTU0cGR1aXQ4bnIxNHBkNTZvOGlxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JlVkLKuxRSvLy/giphy.gif"];
  return (
    <div className="flex flex-row min-h-screen justify-center items-center size-auto">
      <div className="text-center">
        <Question />
        <Gif 
          gif={{ gif: gifList[0], count }}
        />
        <div className="flex">
          <div className="flex-1 bg-rose-300">
            <button>Yes</button>
          </div>
          <div className="flex-1" onClick={() => setCount}>
            <button>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
