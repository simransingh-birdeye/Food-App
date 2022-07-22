import MealItemContainer from './MealItem/MealItemContainer';
import AvailableMealsView from './AvailableMealsView';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {sagaActions} from '../../store/Action'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMealsContainer = () => {

  const foodItems = useSelector(state=>state.cartReducer.foodItems);

  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch({type:sagaActions.GET_FOOD_ITEMS});
    },[])

  const mealsList = foodItems.map(meal => <MealItemContainer key={meal.id} mealname={meal.name} mealdescription={meal.description} mealprice={meal.price} id={meal.id}/>)

  return (<AvailableMealsView mealsList={mealsList}/>) 
};

export default AvailableMealsContainer;