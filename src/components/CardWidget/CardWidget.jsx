import React from "react";
import "./CardWidget.css";
const CartWidget = () => {
    const imgCarrito =
        "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1680141085~exp=1680141685~hmac=3dfa06e55d489a8d5dbfd870d9efdd24d5100f4ee6ac947a0140999abde6798f";
    return (
        <div>
            <img className="imgCarrito" src={imgCarrito} alt="carrito"></img>
            <strong>5</strong>
        </div>
    );
};

export default CartWidget;
