import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Login } from "../Components";
import { logInRequest } from "../actions";

import { createStructuredSelector } from "reselect";
import { makeSelectStudentData } from "../selectors";

const mapStateToProps = createStructuredSelector({
  studentLoginData: makeSelectStudentData()
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logInRequest }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
