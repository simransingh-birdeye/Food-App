import React from 'react'
import InputView from '../../UI/InputView';
import classes from './styles/MealItemForm.module.css'

function MealItemFormView(props) {
    return (
        <form className={classes.form} onSubmit={props.submitHandler}>
            <InputView label='Amount' ref={props.amountInputRef} input={{type:'number', id:'amount_'+props.id, min:'1', max:'5', step:'1', defaultValue:'1'}}/>
            <button type='submit'>+ Add</button>
            {!props.amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
      )
}

export default MealItemFormView