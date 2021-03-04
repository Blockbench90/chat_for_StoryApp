import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday'
import {Link} from 'react-router-dom';
import IconRead from "../IconReaded/IconRead";
import Avatar from "../Avatar/Avatar";


const getMessageTime = (createdAt: Date | number) => {
    if (isToday(createdAt)) {
        return format((createdAt), 'HH:mm');
    } else {
        return format((createdAt), 'DD.MM.YYYY');
    }
};


const renderLastMessage = (message: {text: string, attachments: [], user: {_id: string}}, userId: string) => {
    let text = '';

    if (!message.text && message.attachments.length) {
        text = 'прикрепленный файл';
    } else {
        text = message.text;
    }

    return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
};

interface DialogItemProps {
    _id: string
    isMe: boolean
    currentDialogId: string
    userId: string
    partner: {
        _id: string
        isOnline: boolean
        fullName: string
        avatar: string
    }
    lastMessage: {
        createdAt: string
        read: boolean
        unread: number
        text: string
        attachments: []
        user: { _id: string; }

    }
}

const DialogItem: React.FC<DialogItemProps> = ({_id, isMe,
                                                   currentDialogId, partner, lastMessage, userId
                                               }) => {


    return (
        <Link to={`/dialog/${_id}`}>
            <div
                className={classNames('dialogs__item', {
                    'dialogs__item--online': partner.isOnline,
                    'dialogs__item--selected': currentDialogId === _id,
                })}>
                <div className="dialogs__item-avatar">
                    <Avatar user={partner}/>
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{partner.fullName}</b>
                        <span>{getMessageTime(new Date())}</span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{renderLastMessage(lastMessage, userId)}</p>
                       <IconRead isMe={false}  isRead={false}/>
                         (
                            <div className="dialogs__item-info-bottom-count">
                                {lastMessage.unread > 9 ? '+9' : lastMessage.unread}
                            </div>
                        )
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default DialogItem;
