import React from 'react';
import {Spin} from 'antd';


import './Messages.scss';
import Message from "../Message/Message";

const Messages = () => {
  return (
    <div className="chat__dialog-messages" >
      <div  className={'messages'}>
          <Spin size="large" tip="Загрузка сообщений..." />
              <Message/>
      </div>
    </div>
  );
};


export default Messages;
