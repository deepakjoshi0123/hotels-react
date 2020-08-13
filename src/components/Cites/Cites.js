import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import HotelList from "./HotelList/HotelList";
import "./Cities.css";

import Edit from "./EditNumber/editNumber";

import ChildAge from "./EditNumber/childAge/childAge";
import axios from "axios";

const Cites = () => {
  const [Hotels, setHotels] = useState([]);
  const [togle, settogle] = useState(false);
  const [childNumber, setchildNumber] = useState(0);
  const [room, setroom] = useState(1);
  const [adult, setadult] = useState(1);

  const [decrement, setdecrement] = useState(false);

  console.log("check decrement", decrement);
  if (room > adult && decrement === true) {
    setroom(adult);
  }
  // forward check
  if (room > adult && decrement === false) {
    setadult(room);
  }

  if (adult > 16) {
    alert("max 16 allowed");
    setadult(16);
  }
  if (room > 8) {
    alert("max 8 allowed");
    setroom(8);
  }
  if (childNumber > 9) {
    alert("max 9 children allowed ");
    setchildNumber(9);
  }

  function handleDropdownChange(e) {
    console.log(e.target.value);
    //ready to send data to backend
  }

  function toggle() {
    settogle(!togle);
    console.log(togle);
  }
  let ar = [];
  for (let i = 1; i <= childNumber; i++) {
    ar.push(
      <div>
        <p>child {i} age</p>
        <ChildAge />
      </div>
    );
  }
  return (
    <div>
      {console.log()}
      {Hotels.length <= 0 ? (
        <Formik
          initialValues={{ city: "", CheckInDate: "", CheckOutDate: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log("let's check ", values);

            axios
              .get(
                `http://localhost:3000/customer/searchHotel?City=${values.city}`
              )
              .then((res) => {
                console.log("is this undefined", res.data.Hotels);
                setHotels(res.data.Hotels);
              })
              .catch((error) => {
                //setMessage(error.response.data.error.message);
                console.log("is iam getting error in my code", error.response);
                console.log(error.message);
              });
          }}
          validationSchema={Yup.object().shape({
            city: Yup.string().required("Where you want to book hotel"),
            CheckInDate: Yup.date()
              .required("no Check In Date provided")
              .min(new Date("07-07-2020"))
              .max(new Date("01-01-2021")),
            CheckOutDate: Yup.date()
              .required("no Check Out Date provided")
              .min(new Date("07-07-2020"))
              .max(new Date("01-01-2021")),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form autoComplete="off" onSubmit={handleSubmit}>
                <h2>Book Domestic & International Hotels</h2>

                <label htmlFor="where">where</label>
                <span className="whereSearch">
                  <select
                    id="cityOrHotel"
                    name="cityOrHotel"
                    onChange={handleDropdownChange}
                  >
                    <option value="Hotel">Hotel</option>
                    <option value="City">City</option>
                  </select>
                  <input
                    placeholder="e.g. City Or Hotel Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="city"
                    value={values.city}
                    className={errors.city && touched.city && "error"}
                  />
                </span>

                {errors.city && touched.city && (
                  <div className="input-feedback">{errors.city}</div>
                )}

                <label htmlFor="CheckInDate">Check In Date</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="Date"
                  name="CheckInDate"
                  value={values.CheckInDate}
                  className={
                    errors.CheckInDate && touched.CheckInDate && "error"
                  }
                />
                {errors.CheckInDate && touched.CheckInDate && (
                  <div className="input-feedback">{errors.CheckInDate}</div>
                )}
                <label htmlFor="CheckOutDate">Check Out Date</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="Date"
                  name="CheckOutDate"
                  value={values.CheckOutDate}
                  className={
                    errors.CheckOutDate && touched.CheckOutDate && "error"
                  }
                />
                {errors.CheckOutDate && touched.CheckOutDate && (
                  <div className="input-feedback">{errors.CheckOutDate}</div>
                )}
                <p onClick={toggle}>Guests & Rooms</p>
                <p className="guests">
                  {" "}
                  {childNumber + adult} Guests in {room}{" "}
                </p>
                {togle ? (
                  <div>
                    <Edit
                      name={"Rooms"}
                      num={room}
                      setNum={setroom}
                      decrement={decrement}
                      setdecrement={setdecrement}
                    />
                    <Edit
                      name={"Adults"}
                      num={adult}
                      setNum={setadult}
                      decrement={decrement}
                      setdecrement={setdecrement}
                    />
                    <Edit
                      name={"Children"}
                      setNum={setchildNumber}
                      num={childNumber}
                    />

                    {ar}
                  </div>
                ) : null}
                <button type="submit" disabled={isSubmitting}>
                  Search Hotels
                </button>
              </form>
            );
          }}
        </Formik>
      ) : (
        <HotelList Hotels={Hotels} />
      )}
    </div>
  );
};

export default Cites;
