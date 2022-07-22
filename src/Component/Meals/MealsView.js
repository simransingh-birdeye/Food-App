import React from 'react';
import MealsSummaryView from './MealsSummaryView';
import AvailableMealsContainer from './AvailableMealsContainer';

function MealsView() {
  return (
    <React.Fragment>
        <MealsSummaryView/>
        <AvailableMealsContainer/>
    </React.Fragment>
  )
}

export default MealsView