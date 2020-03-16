import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends Component {
  state = {
    success: false
  };

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }));

  render() {
    return (
      <div>
        <div className="container" style={{ height: "100vh" }}>
          <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col col-xs-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3">
              <div className="card">
                <div className="card-header text-center">
                  <img
                    className="m-4 mt-5"
                    src="images/amiciplus_logo.png"
                    height="60"
                    alt="logo"
                  />
                  <p className="p-2 lead text-dark">Recover password</p>
                </div>
                <div className="card-body">
                  {this.state.success ? (
                    <div className="alert alert-info">Email has been sent.</div>
                  ) : (
                    <ForgotPasswordForm submit={this.submit} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
