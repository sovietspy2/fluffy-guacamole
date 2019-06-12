import React from "react";
import "./styles.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Form, Button } from "react-bulma-components";
import { login } from "../../actions/loginAction";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <section className="hero">
        <div className="hero-body has-text-centered">
          <div className="container  login" />
          <Form.Field>
            <Form.Label>Username</Form.Label>
            <Form.Control>
              <Form.Input
                //color="success"
                type="text"
                placeholder="bigDick69420xxx"
                value={this.state.username}
                onChange={v => this.onChange("username", v)}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Password</Form.Label>
            <Form.Control>
              <Form.Input
                onChange={v => this.onChange("password", v)}
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
              />
            </Form.Control>
          </Form.Field>
          <Button onClick={this.props.loginAction}>Login</Button>
        </div>
      </section>
    );
  }

  onChange(field, event) {
    console.log(event);
    const value = event.target.value ? event.target.value : null;
    this.setState(state => {
      state[field] = value;
      return state;
    });
  }
}

export default Login;
