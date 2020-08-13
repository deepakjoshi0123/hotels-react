import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import queryString from "query-string";
import "../Signup/SignUp.css";
const ResetPassword = ({ location }) => {
  const { token } = queryString.parse(location.search);
  const [reset, setReset] = useState(false);
  return (
    <div>
      {!reset ? (
        <Formik
          initialValues={{ password: "", confrimPassword: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            console.log("let's check token", token);
            axios
              .post("http://localhost:3000/customer/resetPassword", {
                token,
                values,
              })
              .then((res) => {
                setReset(true);
                console.log(
                  res,
                  " login got response from the backend rest api "
                );
              })
              .catch((error) => {
                alert(error.response);
              });
            console.log("formik", values);
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .required("no password provided")
              .min(8, "Password is too short - should contains atleast 8 char"),
            confrimPassword: Yup.string()
              .required("Required")
              .when("password", {
                is: (val) => (val && val.length > 8 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same"
                ),
              }),
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
                <label htmlFor="password">new password</label>
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
                <label htmlFor="confrim password">confrim new password</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  name="confrimPassword"
                  placeholder="enter your confrim password"
                  value={values.confrimPassword}
                  className={
                    errors.confrimPassword && touched.confrimPassword && "error"
                  }
                />
                {errors.confrimPassword && touched.confrimPassword && (
                  <div className="input-feedback">{errors.confrimPassword}</div>
                )}
                <button type="submit" disabled={isSubmitting}>
                  Change Password
                </button>
              </form>
            );
          }}
        </Formik>
      ) : (
        <h2>your password has been successfully changed </h2>
      )}
    </div>
  );
};

export default ResetPassword;
