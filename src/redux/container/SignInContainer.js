// src/containers/ExampleContainer.js
import { connect } from 'react-redux';
import SignIn from 'pages/auth/signIn/index';
import { fetchData } from '../actions/apiAction';

const mapStateToProps = (state) => ({
  data: state.apiData,
});

const mapDispatchToProps = {
  fetchData,
};

const SingInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SingInContainer;
