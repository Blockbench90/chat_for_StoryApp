import React from 'react';

import {Button, Popover} from 'antd';

import './Status.scss';
import {SettingOutlined} from "@ant-design/icons";

const Status = () => (
    <div className="chat__dialog-header">
        <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Blockbehch90</b>

            <div className="chat__dialog-header-status">
                <span className={'status'}>онлайн</span>
            </div>
        </div>
        <Popover placement="leftTop" className="chat__dialog-header-action"
                 content={<div>
                                <div>
                                     <Button type='text' block>Показать профиль</Button>
                                </div>
                                <div>
                                    <Button type='text' block>Отключить уведомления</Button>
                                </div>
                                <div>
                                     <Button type='text' block>Очистить историю</Button>
                                </div>
                                <div>
                                     <Button type='text' block>Заблокировать</Button>
                                </div>
                                <div>
                                     <Button type='text' block>Удалить диалог</Button>
                                </div>
                        </div>}
                 trigger="click">

                <Button type="primary" shape="circle" icon={<SettingOutlined />} />
        </Popover>
    </div>
);

export default Status;
