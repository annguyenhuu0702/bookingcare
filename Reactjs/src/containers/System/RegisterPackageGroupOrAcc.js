import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

function RegisterPackageGroupOrAcc() {
  return <div className="text-center">register package group or account</div>;
}
// class RegisterPackageGroupOrAcc extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div className="text-center">register package group or account</div>;
//   }
// }

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPackageGroupOrAcc);