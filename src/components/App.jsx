import { useState } from 'react'
import BookCollection from './BookCollection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookCollection />
    </>
  )
}

export default App




