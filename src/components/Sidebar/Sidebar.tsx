import React from 'react';
import { Button, Modal, Select, Input, Form } from 'antd';
import Dialogs from "../Dialogs/Dialogs";


import './Sidebar.scss';
import Icon, {EditOutlined} from "@ant-design/icons";


const { TextArea } = Input;

const Sidebar = () => {
    const user = {
        _id: 'asdfasdfasdf'

    }
  return (
      <div className="chat__sidebar">
          <div className="chat__sidebar-header">
              <div>
                  <Icon type="team" />
                  <span>Список диалогов</span>
              </div>
              <Button type="link" shape="circle" icon="form" />
          </div>

          <div className="chat__sidebar-dialogs">
              <Dialogs userId={user._id} />
          </div>
          <Modal
              title="Создать диалог"
              visible={visible}
              onCancel={onClose}
              footer={[
                  <Button key="back" onClick={onClose}>
                      Закрыть
                  </Button>,
                  <Button
                      disabled={!messageText}
                      key="submit"
                      type="primary"
                      loading={isLoading}
                      onClick={onModalOk}>
                      Создать
                  </Button>,
              ]}>
              <Form className="add-dialog-form">
                  <Form.Item label="Введите имя пользователя или E-Mail">
                      <Select
                          value={inputValue}
                          onSearch={onSearch}
                          onChange={onChangeInput}
                          onSelect={onSelectUser}
                          notFoundContent={null}
                          style={{ width: '100%' }}
                          defaultActiveFirstOption={false}
                          showArrow={false}
                          filterOption={false}
                          placeholder="Введите имя пользователя или почту"
                          showSearch>
                          {options}
                      </Select>
                  </Form.Item>
                  {selectedUserId && (
                      <Form.Item label="Введите текст сообщения">
                          <TextArea
                              autosize={{ minRows: 3, maxRows: 10 }}
                              onChange={onChangeTextArea}
                              value={messageText}
                          />
                      </Form.Item>
                  )}
              </Form>
          </Modal>
      </div>
  );
};

export default Sidebar;
