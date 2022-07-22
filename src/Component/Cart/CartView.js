import React from 'react';
import CartItemView from './CartItemView';
import ModalView from '../UI/ModalView'
import classes from './styles/Cart.module.css';

function CartView(props) {

    const cartItems = <ul className={classes['cart-items']}>{
        props.items.map(item =>
            <CartItemView key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={props.cartItemRemoveHandler.bind(null, item.id)}
                onAdd={props.cartItemAddHandler.bind(null, item)} />)}
    </ul>;

    return (
        <ModalView onClose={props.onHideCart}>{cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{props.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {props.hasItem && <button className={classes.button} onClick={props.orderHandler}>Order</button>}
            </div>
        </ModalView>
    )
}

export default CartView