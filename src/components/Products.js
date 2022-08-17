const Products = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img
            className="product-thumbnail"
            src={product.image}
            alt={product.title}
          />
          <div className="product-description-container">
            <span>{product.title}</span>
            <b>$ {product.price}</b>
          </div>
          {cart.some((p) => p.id === product.id) ? (
            <button
              className="product-remove-button"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove from cart
            </button>
          ) : (
            <button
              className="product-add-button"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    qty: 1,
                  },
                })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
