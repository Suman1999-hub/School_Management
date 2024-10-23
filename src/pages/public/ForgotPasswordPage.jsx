import React, { useState } from "react";
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
import { forgotPassword } from "../../http/http-calls";
import { errorHandler } from "../../helper-methods";

const ForgotPasswordPage = () => {

  const [email, setEmail] = useState()
  console.log("email >>", email);
  
  const handleResetPassword = async () => {
    try {
      const params = {
        handle : email 
      };
      const response = await forgotPassword(params);
      console.log("response>>", response);
      
    // navigate("/reset-password")
  }
  catch (error) {
    errorHandler(error);
  }
}

  // const navigate = useNavigate();
  return (
    <>
      <div className="authWrapper">
        <div className="loginWrap">
          <div className="leftWrapper">
            <div className="leftInnerWrapper">
              <h2>Forgot Password?</h2>
              <p className="text-muted">
                Enter your email ID to receive a link to reset your password
              </p>

              <Form>
                {/* username */}
                <div className="form-group">
                  <Label>Email Address</Label>
                  <InputGroup>
                    <Input placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
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

                {/* submit button */}
                <Button
                  color="primary"
                  className="btn-submit"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </Button>

                {/*infoText*/}
                <div className="text-center fs-14 mt-3 fw-medium">
                  Remember your password ?
                  <Link to="/login" className="ms-1">
                    Log in
                  </Link>
                </div>
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

        <PublicFooter />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
