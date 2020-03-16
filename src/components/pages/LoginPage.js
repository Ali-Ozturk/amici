import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

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
                  />
                  <p className="p-2 lead text-dark">
                    {" "}
                    <FormattedMessage id="login.header.text" />
                  </p>
                </div>
                <div className="card-body">
                  <LoginForm submit={this.submit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
