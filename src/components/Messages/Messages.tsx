import React from 'react';


import './Messages.scss';
import Message from "../Message/Message";


const Messages = () => {
  return (
    <div className="chat__dialog-messages" >
      <div  className={'messages'}>
          <Message isMe={false}
                       isRead={false}
                       isTyping={false}
                       text={'Hello hello hello, in my world some рассцвело'}
              />
              <Message isMe={true}
                   isRead={true}
                   isTyping={false}
                   text={'Hello hello hello, in my world some рассцвело'}

          />
      </div>
    </div>
  );
};


export default Messages;
