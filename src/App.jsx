import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500">
      Hello, Tailwind!
    </h1>
      <div>
        <p>there will be something here</p>
        <div className="flex">
          <div className="flex-1">
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
