import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((accumulator, element) => accumulator + element.price * element.quanty, 0);

    return (
        <div className="cartTotal">
            <h3>Total a pagar: {total} $</h3>
        </div>
    )
}

export default CartTotal