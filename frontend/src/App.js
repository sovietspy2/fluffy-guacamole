import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import hello from "./components/hello";
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";
import Login from "./components/login";
import { login } from "./actions/loginAction";

class App extends React.Component {
  render() {
    return (
      <div>
        <Login loginAction={this.props.login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  login: () => dispatch(login())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
