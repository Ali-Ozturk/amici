import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

// TODO CHECK HERE
// eslint-disable-next-line react/prefer-stateless-function
class DashboardPage extends React.Component {
  render() {
    const { isConfirmed } = this.props;
    return (
      <div className="container-fluid">
        {!isConfirmed && <ConfirmEmailMessage />}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
