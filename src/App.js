import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { Inventory } from "./Pages/Inventory";
import { Login } from './Pages/Login';
import { Order } from "./Pages/Order";
import { Profile } from "./Pages/Profile";
import { Signup } from "./Pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Navigate to="/login" />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/inventory' element={<Inventory />}></Route>
          <Route path='/orders' element={<Order />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
