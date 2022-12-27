import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = (props) => {

    const cartItems = useSelector(state => state.cart.items);
    // const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.length > 0 && (
                    cartItems.map(item => (
                        <CartItem
                            item={{title: item.title, quantity: item.amount, total: (item.price * item.amount), price: item.price}}
                        />
                    ))
                )}
            </ul>
        </Card>
    );
};

export default Cart;
