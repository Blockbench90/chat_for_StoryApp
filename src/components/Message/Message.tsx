import React from 'react';
import {Button, Popover} from 'antd';

import IconRead from '../IconReaded/IconRead';
import Avatar from '../Avatar/Avatar';
import './Message.scss';
import classNames from 'classnames';
import Time from "../Time/Time";
import {SettingOutlined} from "@ant-design/icons";

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

interface MessageProps {
    avatar?: string
    text?: string
    date?: Date | number
    isMe: boolean
    isRead?: boolean
    isTyping?: boolean
    audio?: string
    read?: boolean

}

const Message:React.FC<MessageProps> = ({  avatar, text,
                                            date, isMe, read,
                                            isTyping,}) => {
    //TODO: разобраться с датой
    console.log(formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true }))
  return (
      <div
          className={classNames('message', {
              'message--isme': isMe,
              'message--is-typing': isTyping,
          })}>
          <div className="message__content">
              <IconRead isMe={isMe} isRead={read} />

              <Popover content={<div><Button >Удалить сообщение</Button></div>} trigger="click">
                  <div className="message__icon-actions">
                      <Button type="primary" shape="circle" icon={<SettingOutlined />} />
                  </div>
              </Popover>

              <div className="message__avatar">
                  {/*<Avatar  avatar={'https://avatars.githubusercontent.com/u/61389735?s=460&u=1f728e3e551fc8b29ea158e21d963a53901128f5&v=4'}*/}
                  {/*        fullName={'Blockbench'} />*/}
              </div>

              <div className="message__info">
                  {(text || isTyping) && (
                      <div className="message__bubble">
                          {text && (
                              <p className="message__text">
                                  {text}
                              </p>
                          )}
                          {isTyping && (
                              <div className="message__typing">
                                  <span />
                                  <span />
                                  <span />
                              </div>
                          )}
                      </div>
                  )}

                  {/*{date && (<span className="message__date">*/}
                  {/*              <Time date={date} />*/}
                  {/*          </span>*/}
                  {/*)}*/}

              </div>
          </div>
      </div>
  );
};
export default Message;
