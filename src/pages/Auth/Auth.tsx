import React from "react";
import {Route} from "react-router-dom";
import CheckEmailInfo from "../../components/CheckEmail/CheckEmail";
import Home from "../../pages/Home/Home"

import "./Auth.scss";
import LoginContainer from "../../components/LoginForm/LoginContainer";
import RegisterContainer from "../../components/RegisterForm/RegisterContainer";

//Донастроить роутинг, после определения логики
const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={LoginContainer} />
      <Route exact path="/signup" component={RegisterContainer} />
      <Route exact path="/signup/verify" component={CheckEmailInfo} />
    </div>
  </section>
);

export default Auth;
