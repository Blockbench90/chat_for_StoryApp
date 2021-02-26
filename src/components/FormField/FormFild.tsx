import React from "react";
import {Form, Input} from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

const FormField = (props: any) => {
  return (
    <Form.Item
      hasFeedback
    >
      <Input
        prefix={<Icon style={{ color: "rgba(0,0,0,.25)" }} />}
        size="large"

      />
    </Form.Item>
  );
};

export default FormField;
