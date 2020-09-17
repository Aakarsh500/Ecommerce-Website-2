import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../firebase/firebase.utils";
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "example@domain.com",
      password: "password"
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
    console.log("handle submit logs", this.state.email, this.state.password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("handleChange logs", this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            // required
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            // required
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
          />
          <CustomButton type="submit">Log in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            {" "}
            Sign In with Google{" "}
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
