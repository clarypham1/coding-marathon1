import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import BookCollection from "./components/BookCollectionManager/BookCollection";
import RecipeManager from "./components/RecipeManager/RecipeManager";
import ShoppingCart from "./components/ShoppingCart";
import SignupPage from "./components/SignupPage/SignupPage";

function App() {
  return (   // This is very last minute so it works but barely lol
    // added the layout!
    //without basename it had trouble
    <BrowserRouter basename="/coding-marathon1">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />

          <Route path="books" element={<BookCollection />} />
          <Route path="recipes" element={<RecipeManager />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



