import React from 'react';
import classes from './styles/AvailableMeals.module.css';
import CardView from '../UI/CardView';

function AvailableMealsView(props) {
    return <section className={classes.meals}>
    <CardView>
      <ul>
        {props.mealsList}
      </ul>
    </CardView>
  </section>
}

export default AvailableMealsView