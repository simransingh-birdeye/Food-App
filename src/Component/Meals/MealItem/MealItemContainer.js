import { useDispatch } from 'react-redux';
import {add} from '../../../store/Reducer';
import MealItemView from './MealItemView';

function MealItemContainer(props) {
    const price = `$${props.mealprice.toFixed(2)}`;
    const dispatch = useDispatch();
    const addToCartHandler = amount => {
        dispatch(add({
            id:props.id,
            name:props.mealname,
            amount:amount,
            price:props.mealprice
        }))
    }; 

    return (
            <MealItemView mealname={props.mealname} mealdescription={props.mealdescription} price={price} id={props.id}
                addToCartHandler={addToCartHandler}
            />
    )
}

export default MealItemContainer