import React from 'react';

import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import IconRead from '../IconReaded/IconRead';




const DialogItem = () => (
  <Link to={`/dialog`}>
    <div
      className={'dialogs__item'}>
      <div className="dialogs__item-avatar">
        <Avatar fullName={'Block'}
                avatar={'https://avatars.githubusercontent.com/u/61389735?s=460&u=1f728e3e551fc8b29ea158e21d963a53901128f5&v=4'}/>
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>Blockbench90</b>
          <span>@blockbench90</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>Hello, hello, hello</p>
          <IconRead isMe={true} isRead={false}/>
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
