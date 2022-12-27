import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart";

const CartButton = (props) => {

    const dispatch = useDispatch();
    const totalCount = useSelector(state => state.cart.totalCount);

    const toggleCartHandler = () => {
        dispatch(cartActions.toggle());
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalCount}</span>
        </button>
    );
};

export default CartButton;
