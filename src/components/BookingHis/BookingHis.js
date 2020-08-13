import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingHistory = ({ location }) => {
  const [History, setHistory] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log("check user id ", userId, History);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/customer/BookingHistory?UserId=${userId}`)
      .then((res) => {
        setHistory(res.data.booking);
        console.log(res);
      })
      .catch((error) => {
        console.log("check error ", error);
      });
  }, [userId]);

  return (
    <div>
      <p>your booking history </p>
    </div>
  );
};

export default BookingHistory;
