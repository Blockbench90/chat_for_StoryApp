import React from "react";
import { Route } from "react-router-dom";
import CheckEmailInfo from "../../components/CheckEmail/CheckEmail";

import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Home from "../../pages/Home/Home"

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={LoginForm} />
      <Route exact path="/signup" component={RegisterForm} />
      <Route exact path="/signup/verify" component={CheckEmailInfo} />
    </div>
  </section>
);

export default Auth;
