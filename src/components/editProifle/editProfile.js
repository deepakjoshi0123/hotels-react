import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import "../Signup/SignUp.css";
import axios from "axios";

const EditProfile = () => (
  <Formik
    initialValues={{
      fullname: "",
      phone: "",
      address: "",
    }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      console.log("formik", values);
      axios
        .post("http://localhost:3000/customer/EditProfile", { values, id: 3 })
        .then((res) => {
          console.log(res, " login got response from the backend rest api ");
        });
    }}
    validationSchema={Yup.object().shape({
      fullname: Yup.string().required("Required"),
      phone: Yup.string()
        .required("Required")
        .min(10, "phone number should be of length 10")
        .max(10, "phone number should be of length 10"),
      address: Yup.string().required("address required"),
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
          <h2>Update your profile</h2>
          <label htmlFor="Full Name">Full Name</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="fullname"
            className={errors.fullname && touched.fullname && "error"}
            placeholder="enter your Full Name"
            value={values.fullname}
          />
          {errors.fullname && touched.fullname && (
            <div className="input-feedback">{errors.fullname}</div>
          )}

          <label htmlFor="address">address</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.address && touched.address && "error"}
            type="text"
            name="address"
            placeholder="enter your address"
          />
          {errors.address && touched.address && (
            <div className="input-feedback">{errors.address}</div>
          )}
          <label htmlFor="Phone">Phone</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone && "error"}
            type="number"
            name="phone"
            placeholder="enter your phone"
          />
          {errors.phone && touched.phone && (
            <div className="input-feedback">{errors.phone}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Update Profile
          </button>
        </form>
      );
    }}
  </Formik>
);

export default EditProfile;
