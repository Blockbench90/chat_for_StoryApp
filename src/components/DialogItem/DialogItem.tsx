import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday'
import {Link} from 'react-router-dom';
import IconRead from "../IconReaded/IconRead";
import Avatar from "../Avatar/Avatar";
import { parseISO } from 'date-fns/fp';



const getMessageTime = (createdAt: string) => {
    if (isToday(parseISO(createdAt))) {
        return format(parseISO(createdAt), 'HH:mm');
    } else {
        return format(parseISO(createdAt), 'DD.MM.YYYY');
    }
};
console.log(getMessageTime("last Friday at 7:26 p.m."))
const renderLastMessage = (message, userId) => {
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

    }
}

const DialogItem: React.FC<DialogItemProps> = ({_id, isMe = true,
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
                        <span>{getMessageTime(lastMessage.createdAt)}</span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{renderLastMessage(lastMessage, userId)}</p>
                        {isMe && <IconRead isMe={isMe} isRead={lastMessage.read}/>}
                        {lastMessage.unread > 0 && (
                            <div className="dialogs__item-info-bottom-count">
                                {lastMessage.unread > 9 ? '+9' : lastMessage.unread}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default DialogItem;
