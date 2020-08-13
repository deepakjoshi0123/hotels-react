import React from "react";
import SignUp from "./components/Signup/Signup";
import Login from "./components/login/login";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import CustomerUI from "./components/CustomerUI/CustomerUI";
import ResetPassword from "./components/resetPassword/resetPassword";
import EditProfile from "./components/editProifle/editProfile";
import BookingHistory from "./components/BookingHis/BookingHis";
import Room from "./components/Cites/HotelList/Rooms/Rooms";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/Login" exact component={Login} />
      <Route path="/ResetPassword" exact component={ResetPassword} />
      <Route path="/Signup" exact component={SignUp} />
      <Route path="/" exact component={CustomerUI} />
      <Route path="/ForgetPassword" component={ForgetPassword} />
      <Route path="/EditProfile" component={EditProfile} />
      <Route path="/History" component={BookingHistory} />
      <Route path="/HotelDetails" component={Room} />
    </Router>
  );
}

export default App;
