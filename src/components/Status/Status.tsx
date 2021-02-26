import React from 'react';

import {Button, Popover} from 'antd';

import './Status.scss';

const Status = () => (
    <div className="chat__dialog-header">
        <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">fullname</b>
            <div className="chat__dialog-header-status">
        <span className={'status'}>
       'онлайн'
        </span>
            </div>
        </div>
        <Popover
            className="chat__dialog-header-action"
            content={
                <div>
                    <Button>Удалить диалог</Button>
                </div>
            }
            trigger="click">
            <div>
                <Button type="link" shape="circle" icon="ellipsis"/>
            </div>
        </Popover>
    </div>
);

export default Status;
