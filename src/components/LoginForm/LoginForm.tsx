import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import Button from "../Buttons/Button";
import Block from "../Block/Block";


const LoginForm = (props: any) => {

  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form className="login-form">
          <Form.Item
            hasFeedback
          >
            <Input
              id="email"
              size="large"
              placeholder="E-Mail"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
          >
            <Input
              id="password"
              size="large"
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              size="large"
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/signup">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
