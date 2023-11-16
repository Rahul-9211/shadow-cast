// containers/CounterContainer.js
import { connect } from 'react-redux';
import SignIn from 'pages/auth/signIn/index';
import { increment, decrement } from '../actions/counterActions';

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
