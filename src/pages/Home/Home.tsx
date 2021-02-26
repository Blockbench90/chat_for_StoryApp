import React from 'react';

import Message from '../../components/Message/Message';
import Status from "../../components/Status/Status";
import ChatInput from "../../components/ChatInput/ChatInput";
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.scss';


const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
          <div className="chat__dialog">
            <Status />
            <Message />
            <div className="chat__dialog-input">
              <ChatInput />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Home
