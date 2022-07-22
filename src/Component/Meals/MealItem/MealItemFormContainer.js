import { useRef,useState } from 'react';
import MealItemFormView from './MealItemFormView';

function MealItemFormContainer(props) {

  const [amountIsValid,setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  }

  return (
        <MealItemFormView submitHandler={submitHandler} amountInputRef={amountInputRef} id={props.id} amountIsValid={amountIsValid}/>
  )
}

export default MealItemFormContainer