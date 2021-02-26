import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";
import Block from "../Block/Block";
import Button from "../Buttons/Button";
import FormField from "../FormField/FormFild";
import Icon from "@ant-design/icons/lib/components/Icon";


const RegisterForm = (props: any) => {

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
          <Form className="login-form">
            <FormField
              name="email"
              icon="mail"
              placeholder="E-Mail"

            />

            <FormField
              name="fullname"
              icon="user"
              placeholder="Ваше имя и фамилия"

            />

            <FormField
              name="password"
              icon="lock"
              placeholder="Пароль"
              type="password"

            />

            <FormField
              name="password_2"
              icon="lock"
              placeholder="Повторите пароль"
              type="password"

            />

            <Form.Item>
              <Button

                type="primary"
                size="large"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/signin">
              Войти в аккаунт
            </Link>
          </Form>

          <div className="auth__success-block">
            <div>
              <Icon type="info-circle" />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>

      </Block>
    </div>
  );
};

export default RegisterForm;
