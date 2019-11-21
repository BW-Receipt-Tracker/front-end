import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from 'axios';



const ValidatedLoginForm = props => (
  <Formik
    initialValues={{ username: "", password: "" }}
    onSubmit={(values) => {
      axios
            .post('http://project-receipt-tracker.herokuapp.com/login', `grant_type=password&username=${values.username}&password=${values.password}`, {
                headers: {
                    Authorization: `Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0`,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.access_token);
                props.history.push('/receipts-list')
            })
            .catch(err => console.log(err));
    }}

    
    //********Handling validation messages *******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      username: Yup.string()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(4, "Password is too short - should be 4 chars minimum.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="username">UserName</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && "error"}
          />
          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}
          <label htmlFor="password" className="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
