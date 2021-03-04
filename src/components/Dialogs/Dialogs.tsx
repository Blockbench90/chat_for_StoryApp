import React from "react";
import {Input, Empty} from "antd";

import DialogItem from "../DialogItem/DialogItem";
import "./Dialogs.scss";
import { orderBy } from "lodash";

interface items {
    _id: string
    author: {
        _id: string
    }
}

export interface DialogsProps {
    items: items[]
    userId: string
    onSearch: (e: any) => void
    inputValue: string
    currentDialogId: string
}

const Dialogs: React.FC<DialogsProps> = ({ items, userId= 'asdfasdf', onSearch, inputValue, currentDialogId }) =>{
    const show = true
    const dialogProps = {
        _id: 'string',
        isMe: false,
        currentDialogId: 'string',
        userId: 'string',
        partner: {
            _id: 'string',
            isOnline: true,
            fullName: 'fullName',
            avatar: 'string',
        },
        lastMessage: {
            createdAt: 'string',
            read: false,
            unread: 8,
            text: 'string of text',
            attachments: ['qw', 'ds'],
            user: { _id: 'string' }

        }
    }


    return (
    <div className="dialogs">
        <div className="dialogs__search">
            <Input.Search
                placeholder="Поиск среди контактов"
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
            />
        </div>
        {show ? (
                // @ts-ignore
                <DialogItem
                    key={dialogProps.userId}
                    // isMe={items.author._id === userId}
                    isMe={false}
                    userId={dialogProps.userId}
                    currentDialogId={currentDialogId}
                    {...dialogProps}
                />
            )
         : (
            <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Ничего не найдено"
            />
        )}
    </div>
)}
export default Dialogs;
