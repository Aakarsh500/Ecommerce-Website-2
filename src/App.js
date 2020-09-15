import React from "react";
import Header from "./Components/header/header.component";
import { ShopPage } from "./Components/Pages/shop-page/shop-page.components";
import { Route } from "react-router-dom";
import "./styles.css";
import SignInAndSignUpPage from "./Components/Pages/signIn-signUp/signIn-signUp.componensts";
import { HomePage } from "./Components/Pages/homepage/homepage.component";
export default function App() {
  const Hats = () => {
    return <h1>Hats</h1>;
  };
  return (
    <div>
      <Header />
      <Route exact={true} path="/" component={HomePage} />
      {/* <HomePage /> */}
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/signIn" component={SignInAndSignUpPage} />
    </div>
  );
}
