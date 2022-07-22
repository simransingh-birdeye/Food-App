import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './styles/HeaderButton.module.css';
import HeaderButtonView from './HeaderButtonView';

function HeaderButtonContainer(props) {

    const [btnIsHighlighted, setBtnIsHighLighted] = useState(true);

    const cartItems = useSelector(state => state.cartReducer.items);
    const numberOfCartItems = cartItems.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cartItems])

    return (
        <HeaderButtonView onClick={props.onClick} btnClasses={btnClasses} numberOfCartItems={numberOfCartItems} />
    )
}

export default HeaderButtonContainer