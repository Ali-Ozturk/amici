import React from "react";
import { FormattedMessage } from "react-intl";
import SignupForm from "../forms/SignupForm";

const SignupPage = () => (
  <div className="container" style={{ height: "100vh" }}>
    <div className="row align-items-center" style={{ height: "100vh" }}>
      <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
        <div className="card">
          <div className="card-header text-center">
            <img
              className="m-4 mt-5"
              src="images/amiciplus_logo.png"
              height="60"
            />
            <p className="p-2 lead text-dark">
              {" "}
              <FormattedMessage id="signup.header.text" />
            </p>
          </div>
          <div className="card-body">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignupPage;
