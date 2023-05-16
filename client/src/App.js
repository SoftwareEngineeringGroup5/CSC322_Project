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
import { VisitorNavbar,CustomerNavbar, EmployeeNavbar, OwnerNavbar } from './components/navbar';
import { ChatPage } from './Chatbox/ChatPage';
import { InsufficientFunds } from './pages/cart/insufficientFunds';
import { userList } from './pages/userList';

const userID = 2;

const NavbarController = () => {
  switch(userList[userID].accountType) {
    case "Visitor":   return (<VisitorNavbar/>)
    case "Customer":  return (<CustomerNavbar/>);
    case "Employee":  return (<EmployeeNavbar/>);
    case "Owner":     return (<OwnerNavbar/>);
  }
}

function App() {
  return (
    <div className="App">
      
      <ShopContextProvider>
        <Router>
        <NavbarController/>
          <Routes>
            <Route path='/build' element={<Build/>}/>
            <Route path="/" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/product/:productlinkID' element={<Viewproduct/>}/> 
            <Route path='/flaskproduct' element={<FlaskProductList/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/balance" element={<Balance/>}/>
            <Route path="/applications" element={<ApplicatonPage/>}/>
            <Route path="/owner" element={<OwnerPage/>}/>
            <Route path="/chat" element={<ChatPage/>}/>
            <Route path="/insufficientFunds" element={<InsufficientFunds/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;