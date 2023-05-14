import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart } from './pages/cart/cart';
import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from "./context/shop-context";
import { Build } from "./pages/build/build";
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signup/signup";
import { Viewproduct } from "./pages/viewProductPages/viewproduct";
import { ApplicatonPage }from "./pages/application/applicationPage" ;
import { OwnerPage } from './pages/application/ownersPage';
import { Balance } from './pages/balance/balance';
import { FlaskProductList } from "./FlaskProductList";
import { Messages } from './pages/messages/messages';
import { CustomerNavbar, EmployeeNavbar, OwnerNavbar } from './components/navbar';

const user = "Customer";

const NavbarController = () => {
  switch(user) {
    case "Visitor": 
    case "Customer":  return (<CustomerNavbar/>);
    case "Employee":  return (<EmployeeNavbar/>);
    case "Owner":     return (<OwnerNavbar/>);
  }
}

function App() {
  return (
    <div className="App">
      <NavbarController/>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path='/build' element={<Build/>}/>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/product/:productlinkID' element={<Viewproduct/>}/> 
            <Route path='/flaskproduct' element={<FlaskProductList/>}/> 
            <Route path="/login" element={<Login/>}/ >
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/balance" element={<Balance/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;