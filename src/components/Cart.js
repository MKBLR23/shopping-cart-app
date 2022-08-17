import { useState, useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  const changeQuantity = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QUANTITY",
      payload: { id, qty },
    });
  }

  return (
    <div className="cart">
      <b className="cart-header">Cart</b>
      <b>Subtotal $ {total}</b>
      {
        cart && cart.length > 0 ?(
          cart.map((product) => (
            <div key={product.id} className="cart-items">
              <div className="cart-item">
                <img className="cart-icon" src={product.image} alt={product.title} />
                <div className="cart-details">
                  <span className="cart-title">{product.title}</span>
                  <span className="cart-price">$ {product.price}</span>
                </div>
              </div>
              <div className="cart-quantity">
                <button onClick={() => changeQuantity(product.id, product.qty - 1)}>-</button>
                <span>{product.qty}</span>
                <button onClick={() => changeQuantity(product.id, product.qty + 1)}>+</button>
              </div>
            </div>
          ))
        ) : (<span className="empty-products">Empty cart</span>)
      }

    </div>
  );
};

export default Cart;
