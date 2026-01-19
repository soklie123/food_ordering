import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; 
import StoreContextProvider from "./context/StoreContextProvider";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </StoreContextProvider>
);
