import {useState} from 'react';
import HeaderView from './Component/Layout/HeaderView';
import MealsView from './Component/Meals/MealsView';
import CartContainer from './Component/Cart/CartContainer';
import CartProvider from './store/CartProvider';
import OrderView from './Component/Order/OrderView';

function App() {

  const [cartIsShown,setCartIsShown] = useState(false);
  const [isOrderPlaced,setIsOrderPlaced] = useState(false);
  
  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () =>{
    setCartIsShown(false);
  }

  const showOrderHandler = () =>{
    setIsOrderPlaced(true);
  }

  const hideOrderHandler = () =>{
    setIsOrderPlaced(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <CartContainer onHideCart = {hideCartHandler} onShowOrder={showOrderHandler}/>}
      {isOrderPlaced && <OrderView onHideOrder = {hideOrderHandler}/>}
      <HeaderView onShowCart = {showCartHandler}/>
      <main>
        <MealsView/>
      </main>
    </CartProvider>
  );
}

export default App;
