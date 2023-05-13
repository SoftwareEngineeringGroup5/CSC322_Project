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
import { EmployeeDashboard } from './pages/dashboards/employeeDashboard';
import { OwnerDashboard } from './pages/dashboards/ownerDashboard';
import { FlaskProductList } from "./FlaskProductList";
import { Messages } from './pages/messages/messages';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path='/build' element={<Build/>}/>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/employeeDashboard' element={<EmployeeDashboard/>} />
            <Route path='/ownerDashboard' element={<OwnerDashboard/>} />
            <Route path='/product/:productlinkID' element={<Viewproduct/>}/> 
            <Route path='/flaskproduct' element={<FlaskProductList/>}/> 
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;