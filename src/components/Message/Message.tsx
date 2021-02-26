import React from 'react';
import {Button, Popover} from 'antd';

import IconRead from '../IconReaded/IconRead';
import Avatar from '../Avatar/Avatar';


import './Message.scss';


const Message = () => {
  return (
    <div
      className='message'>
      <div className="message__content">
        <IconRead/>
        <Popover
          content={
            <div>
              <Button >Удалить сообщение</Button>
            </div>
          }
          trigger="click">
          <div className="message__icon-actions">
            <Button type="link" shape="circle" icon="ellipsis" />
          </div>
        </Popover>
        <div className="message__avatar">
          <Avatar/>
        </div>
        <div className="message__info">
            <div className="message__bubble">
                <div className="message__typing">
                  <span />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
