import { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count {count}
      </button>
    </div>
  )
}
