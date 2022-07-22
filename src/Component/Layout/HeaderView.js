import React from 'react';
import classes from './styles/Header.module.css';
import foodimage from '../../Assests/meals.jpeg';
import HeaderButtonContainer from './HeaderButtonContainer';

function HeaderView(props) {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>Food App</h1>
            <HeaderButtonContainer onClick = {props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={foodimage} alt="delicious food"/>
        </div>
    </React.Fragment>
  )
}

export default HeaderView