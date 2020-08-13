import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "../Signup/SignUp.css";

const ForgetPassword = () => {
  const [linkSend, setLinkSend] = useState(false);
  const [email, setEamil] = useState("");

  return (
    <div>
      {!linkSend ? (
        <Formik
          initialValues={{ email: "", password: "", confrimPassword: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            axios
              .post("http://localhost:3000/customer/ForgetPassword", values)
              .then((res) => {
                setLinkSend(true);
                console.log(linkSend);
                setEamil(values.email);
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
            email: Yup.string().email().required("Required"),
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
                <h2>Forget Password</h2>

                <label htmlFor="email">Email</label>
                <input
                  value={values.email}
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

                <button type="submit" disabled={isSubmitting}>
                  Change Password
                </button>
              </form>
            );
          }}
        </Formik>
      ) : (
        <div>
          <h2>password reset link is sent to {email}</h2>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
