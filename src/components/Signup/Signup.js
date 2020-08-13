import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
      fullname: "",
      phone: "",
      gender: "",
    }}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      console.log("formik", values);
      axios
        .post("http://localhost:3000/customer/SignUp", values)
        .then((res) => {
          console.log(res, " login got response from the backend rest api ");
        });
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("no password provided")
        .min(8, "Password is too short - should contains atleast 8 char"),
      fullname: Yup.string().required("Required"),
      phone: Yup.string()
        .required("Required")
        .min(10, "phone number should be of length 10")
        .max(10, "phone number should be of length 10"),
      gender: Yup.string().required("Gender is required!"),
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
          <h2>Goibibo Signup</h2>
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

          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
            type="text"
            name="email"
            placeholder="enter your email"
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="password">password</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="enter your passowrd"
            value={values.password}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
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
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="" label="Select a Gender" />
            <option value="Male" label="Male" />
            <option value="Female" label="Female" />
          </select>
          {errors.gender && touched.gender && (
            <div className="input-feedback">{errors.gender}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Signup
          </button>
          <Link to={`/Login`}>
            <button className={"button mt-20"} type="submit">
              Login
            </button>
          </Link>
        </form>
      );
    }}
  </Formik>
);

export default SignUp;
