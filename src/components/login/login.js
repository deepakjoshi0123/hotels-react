import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "../Signup/SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";
import history from "../../history";
const SignUp = () => {
  const [message, setMessage] = useState();

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          axios
            .post("http://localhost:3000/customer/Login", values)
            .then((res) => {
              localStorage.setItem("userEmail", values.email);
              localStorage.setItem("userId", res.data.userId);
              history.push({
                pathname: "/CustomerUI",
                state: "tokenId5464a6w5d46aw54d65aw4d65aw4d65a4wd65",
              });
              window.location.reload();
              console.log(res);
            })
            .catch((error) => {
              setMessage(error.response.data.error.message);
              console.log("is iam getting error in my code", error.response);
              console.log(error.message);
            });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Required"),
          password: Yup.string()
            .required("no password provided")
            .min(8, "Password is too short - should contains atleast 8 char"),
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
              <h2>Login</h2>
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
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
              <Link to={`/ForgetPassword`}>
                <button className={"button mt-20"} type="submit">
                  Forget Password
                </button>
              </Link>
            </form>
          );
        }}
      </Formik>
      {message ? <h3>{message}</h3> : null}
    </div>
  );
};

export default SignUp;
