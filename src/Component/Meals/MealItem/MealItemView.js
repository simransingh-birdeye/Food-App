import React from 'react';
import classes from './styles/MealItem.module.css';
import MealItemFormContainer from './MealItemFormContainer';

function MealItemView(props) {
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.mealname}</h3>
                <div className={classes.description}>{props.mealdescription}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealItemFormContainer id={props.id} onAddToCart={props.addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItemView