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
          <Message
              avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
              text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
              attachments={[
                  {
                      fileName: "image.jpg",
                      url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                  },
                  {
                      fileName: "image.jpg",
                      url: "https://source.unsplash.com/100x100/?random=2&nature,water"
                  },
                  {
                      fileName: "image.jpg",
                      url: "https://source.unsplash.com/100x100/?random=3&nature,water"
                  }
              ]}
          />
          <Message
              avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
              text="Hello, World!"
              isMe={true}
              isRead={false}
          />
          <Message
              avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
              attachments={[
                  {
                      fileName: "image.jpg",
                      url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                  }
              ]}
          />
          <Message
              avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
              text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
          />
      </div>
    </div>
  );
};


export default Messages;
