import React from 'react';
import { Button, Modal, Select, Input, Form } from 'antd';
import Dialogs from "../Dialogs/Dialogs";


import './Sidebar.scss';
import {EditOutlined} from "@ant-design/icons";


const { TextArea } = Input;

const Sidebar = () => {
  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <span>Список диалогов</span>
        </div>
          <Button type="primary" shape="circle" icon={<EditOutlined />} />
      </div>

      <div className="chat__sidebar-dialogs">
        <Dialogs />
      </div>
      <Modal
        title="Создать диалог"
        footer={[
          <Button key="back">
            Закрыть
          </Button>,
          <Button
            key="submit"
            type="primary">
            Создать
          </Button>,
        ]}>
        <Form className="add-dialog-form">
          <Form.Item label="Введите имя пользователя или E-Mail">
            <Select
              notFoundContent={null}
              style={{ width: '100%' }}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              placeholder="Введите имя пользователя или почту"
              showSearch>
            </Select>
          </Form.Item>
            <Form.Item label="Введите текст сообщения">
              <TextArea
              />
            </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Sidebar;
