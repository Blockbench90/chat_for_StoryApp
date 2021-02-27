//@ts-nocheck
import React from "react";
import {Form, Input} from "antd";
import {Link} from "react-router-dom";

import Block from "../Block/Block";
import Button from "../Buttons/Button";
import validateField from "../../utils/validateField";


const LoginForm = ({values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting}) => {
  return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
                validateStatus={validateField("email", touched, errors)}
                help={!touched.email ? "" : errors.email}
                hasFeedback
            >
              <Input
                  id="email"
                  size="large"
                  placeholder="E-Mail"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
                validateStatus={validateField("password", touched, errors)}
                help={!touched.password ? "" : errors.password}
                hasFeedback
            >
              <Input
                  id="password"
                  size="large"
                  type="password"
                  placeholder="Пароль"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button
                  disabled={isSubmitting}
                  onClick={handleSubmit}
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
