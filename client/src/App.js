import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProdDetails from "./screens/ProdDetails";
import CartPage from "./screens/CartPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Checkout from "./screens/Checkout";
import Order from "./screens/Order";
import OrderDetails from "./screens/OrderDetails";
import WatchList from "./screens/WatchList";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <HomeScreen /> } />
        <Route path="/product/:id" element={ <ProdDetails /> } />
        <Route path="/cart" element={ <CartPage /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/orders" element={ <Order /> } />
        <Route path="/orders/:orderId" element={ <OrderDetails /> } />
        <Route path="/like" element={ <WatchList /> } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
