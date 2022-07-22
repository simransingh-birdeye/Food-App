import classes from './styles/Card.module.css';

function CardView(props) {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default CardView