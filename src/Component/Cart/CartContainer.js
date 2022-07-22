import { useSelector, useDispatch } from 'react-redux';
import {add,remove} from '../../store/Reducer';
import CartView from './CartView';

function CartContainer(props) {

  const orderHandler = () => {
    props.onHideCart();
    props.onShowOrder();
  }

  const cartItems = useSelector(state => state.cartReducer.items);
  const amount = useSelector(state => state.cartReducer.totalAmount);
  const hasItem = cartItems.length > 0;
  const totalAmount = `$${amount.toFixed(2)}`;
  const dispatch = useDispatch();

  const cartRemove = (id) =>{
    dispatch(remove({id,cartItems}));
  }

  const cartAdd = (item) =>{
    dispatch(add({...item,amount:1}));
  }

  return (
    <CartView items={cartItems} cartItemRemoveHandler={cartRemove} cartItemAddHandler={cartAdd}
      onHideCart={props.onHideCart} orderHandler={orderHandler} totalAmount={totalAmount} hasItem={hasItem}
    />
  )
}

export default CartContainer