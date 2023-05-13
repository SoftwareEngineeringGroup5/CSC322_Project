import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Cart } from './pages/cart/cart';
import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";
import { Build } from "./pages/build/build";
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signup/signup";
import { Viewproduct } from "./pages/viewProductPages/viewproduct";
import { EmployeeDashboard } from './pages/dashboards/employeeDashboard';
import { FlaskProductList } from "./FlaskProductList";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path='build' element={<Build/>}/>
            <Route path="/" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path='employeeDashboard' element={<EmployeeDashboard/>} />
            <Route path='/product/:productlinkID' element={<Viewproduct/>}/> 
            <Route path='/flaskproduct' element={<FlaskProductList/>}/> 

            
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;