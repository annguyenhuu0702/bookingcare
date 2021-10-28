import React from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

function ProductManage() {
  return <div className="text-center">Manage products</div>;
}
// class ProductManage extends Component {
//   state = {};

//   componentDidMount() {}

//   render() {
//     return <div className="text-center">Manage products</div>;
//   }
// }

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
