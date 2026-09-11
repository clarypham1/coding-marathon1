import { useState } from 'react'
import BookCollection from './BookCollectionManager/BookCollection'
import SignupPage from './SignupPage/SignupPage'
import RecipeManager from './RecipeManager/RecipeManager'
import ShoppingCart from './ShoppinCart/ShoppingCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookCollection />
      <SignupPage />
      <RecipeManager />
      <ShoppingCart />
      <ContactListManager />
    </>
  )
}

export default App




