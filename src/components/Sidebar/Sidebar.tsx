//@ts-nocheck
import React from 'react';
import { Button, Modal, Select, Input, Form } from 'antd';
import Dialogs from "../Dialogs/Dialogs";


import './Sidebar.scss';
import Icon, {FormOutlined, TeamOutlined} from "@ant-design/icons";


const { TextArea } = Input;

const Sidebar = () => {
    const selectedUserId = ''

    const user = {
        _id: 'asdfasdfasdf',
        items: {
            _id: "asdfasdf",
            author: {
                _id: 'asdfasdfasdfsfs'
            }
        }
}

  return (
      <div className="chat__sidebar">
          <div className="chat__sidebar-header">
              <div>
                  <Icon type="team" />
                  <TeamOutlined />
                  <span>Список диалогов</span>
              </div>
              <Button type="link" shape="circle" icon={<FormOutlined />} />
          </div>

          <div className="chat__sidebar-dialogs">
              <Dialogs user={user} />
          </div>
          <Modal
              title="Создать диалог"
              visible={false}
              // onCancel={false}
              footer={[
                  <Button key="back" >
                      Закрыть
                  </Button>,
                  <Button
                      disabled={false}
                      key="submit"
                      type="primary"
                      loading={false}>
                      Создать
                  </Button>,
              ]}>
              <Form className="add-dialog-form">
                  <Form.Item label="Введите имя пользователя или E-Mail">
                      <Select
                          value={''}
                          notFoundContent={null}
                          style={{ width: '100%' }}
                          defaultActiveFirstOption={false}
                          showArrow={false}
                          filterOption={false}
                          placeholder="Введите имя пользователя или почту"
                          showSearch>
                          {/*{options}*/}
                          option
                      </Select>
                  </Form.Item>
                  {selectedUserId && (
                      <Form.Item label="Введите текст сообщения">
                          <TextArea
                              autosize={{ minRows: 3, maxRows: 10 }}
                              value={''}
                          />
                      </Form.Item>
                  )}
              </Form>
          </Modal>
      </div>
  );
};

export default Sidebar;
