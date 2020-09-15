import React, { Component } from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
    console.log(this.state.email, this.state.password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default SignIn;
