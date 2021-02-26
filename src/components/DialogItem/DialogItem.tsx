import React from 'react';

import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import IconRead from '../IconReaded/IconRead';




const DialogItem = () => (
  <Link to={`/dialog`}>
    <div
      className={'dialogs__item'}>
      <div className="dialogs__item-avatar">
        <Avatar/>
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>fullname</b>
          <span>lastMessage</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>lastMessage</p>
          <IconRead />
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
