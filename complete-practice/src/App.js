import { useState } from 'react';

import Header from './Components/Layout/Header.js';
import Meals from './Components/Meals/Meals.js';
import Cart from './Components/Cart/Cart.js';
import CartProvider from './store/CartProvider.js';

function App() {

  const [cart, setCart] = useState(false);

  const showCartHandler = () => {
    setCart(true);
  };

  const hideCartHandler = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
