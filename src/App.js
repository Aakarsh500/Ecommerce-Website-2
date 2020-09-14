import React from "react";
import { Route } from "react-router-dom";
import "./styles.css";
import { HomePage } from "./Components/Pages/homepage/homepage.component";
export default function App() {
  const Hats = () => {
    return <h1>Hats</h1>;
  };
  return (
    <div>
      <Route exact={true} path="/" component={HomePage} />
      {/* <HomePage /> */}
      <Route exact path="/hats" component={Hats} />
    </div>
  );
}
