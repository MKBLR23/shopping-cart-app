import { useEffect, useReducer } from "react";
import axios from "axios";
import "./App.css";
import { cartReducer } from "./reducers/cartReducers";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = async () => {
    const API_URI = `https://fakestoreapi.com/products`;

    try {
      const { data } = await axios.get(API_URI);
      dispatch({
        type: "ADD_PRODUCTS",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
