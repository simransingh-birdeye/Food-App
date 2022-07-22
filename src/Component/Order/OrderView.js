import React from 'react';
import ModalView from '../UI/ModalView';
import classes from './styles/Order.module.css';

function OrderView(props) {
    return (
        <ModalView>
            <div className={classes.orderAction}>
                <h2 className={classes.orderheading}>Order Placed!</h2>
                <button className={classes['button--alt']} onClick={props.onHideOrder}>Close</button>
            </div>
        </ModalView>
    )
}

export default OrderView