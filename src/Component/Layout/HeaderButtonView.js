import React from 'react'
import classes from './styles/HeaderButton.module.css';
import CartIconView from '../Cart/CartIconView';

function HeaderButtonView(props) {
    return (
        <button className={props.btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIconView /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{props.numberOfCartItems}</span>
        </button>
    )
}

export default HeaderButtonView