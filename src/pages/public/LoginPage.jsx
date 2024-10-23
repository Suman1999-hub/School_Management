import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Label,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import PublicFooter from "../../containers/Public/PublicFooter";
import { addUserCredential } from "../../redux/actions/userCredential";
import { login } from "../../http/http-calls";
import { decodeToken, errorHandler } from "../../helper-methods";

const LoginPage = () => {
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

  // navigation
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [formFields, setFormFields] = useState({});
  // const [errors, setErrors] = useState({});
  // const [isDirty, setIsDirty] = useState({
  //   email: false,
  //   password: false
  // });
  console.log("formFields", formFields);
  // console.log("isDirty", isDirty);

  const handleChange = (event, field) => {
    const updatedFormFields = { ...formFields };
    updatedFormFields[field] = event.target.value;
    setFormFields(updatedFormFields);
  };

  // const handleBlur = (event, field) => {
  //   const updatedIsDirty = {...isDirty}
  //   updatedIsDirty[field] = true
  //   setIsDirty(updatedIsDirty)
  // }

  // const markAllDirty = () => {
  //   const updatedIsDirty = {
  //     email: true,
  //     password: true
  //   }
  //   setIsDirty(updatedIsDirty)
  // }

  // const validateForm = () => {
  //   const updatedErrors = {...errors}
  //   let isValid = true

  // }

  // login
  const _login = async () => {
    try {
      const params = {
        handle: formFields.input,
        password: formFields.password,
      };
      const response = await login(params);
      console.log("response >>", response);
      console.log("token >>", response.token);
      const user = decodeToken(response.token);
      console.log("user >>", user);

      dispatch(addUserCredential({ token: response.token, user: user }));
      navigate("/dashboard");
    } catch (error) {
      errorHandler(error);
    }
  };

  return (
    <>
      <div className="authWrapper">
        <div className="loginWrap">
          <div className="leftWrapper">
            <div className="leftInnerWrapper">
              <h2>Welcome Back!</h2>
              <p className="text-muted">Please enter your email and password</p>

              <Form>
                {/* username */}
                <div className="form-group">
                  <Label>Email/Username</Label>
                  <InputGroup>
                    <Input
                      placeholder="Enter your Email ID"
                      value={formFields?.email}
                      onChange={(e) => handleChange(e, "input")}
                      // onBlur={(e) => handleBlur(e, "email")}
                    />
                    <InputGroupText>
                      <i className="far fa-envelope" />
                    </InputGroupText>
                  </InputGroup>

                  {/* show this when you get any error */}
                  {/* <div className="form-error">
                Require
              </div> */}
                </div>

                {/* password */}
                <div className="form-group">
                  <Label>Password</Label>
                  <InputGroup>
                    <Input
                      placeholder="Enter your password"
                      value={formFields?.password}
                      onChange={(e) => handleChange(e, "password")}
                      // onBlur={(e) => handleBlur(e, "password")}
                      type={`${showPassword ? "text" : "password"}`}
                    />
                    <InputGroupText
                      className="cursorPointer"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      <i
                        className={`far ${
                          showPassword ? "fa-eye" : "fa-eye-slash"
                        }`}
                      />
                    </InputGroupText>
                  </InputGroup>

                  {/* show this when you get any error */}
                  {/* <div className="form-error">
                Require
              </div> */}
                </div>

                <div className="text-end">
                  <Link to="/forgot-password" className="forgotPassword">
                    Forgot Password?
                  </Link>
                </div>

                {/* submit button */}
                <Button
                  onClick={() => _login()}
                  color="primary"
                  className="btn-submit"
                >
                  Log in
                </Button>

                {/*infoText*/}
              </Form>
            </div>
          </div>
          <div className="rightWrapper">
            {/* logo */}
            <img
              src={require("../../assets/img/school management logo.jpg")}
              alt="Brand Logo"
              className="companyLogo"
            />
          </div>
        </div>

        {/* footer */}
        <PublicFooter />
      </div>
    </>
  );
};

export default LoginPage;
