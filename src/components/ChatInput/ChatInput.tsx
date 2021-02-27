import React, {Fragment} from "react";
import {Button, Input} from "antd";


import UploadFiles from "../UploadFiles/UploadFiles";
import "./ChatInput.scss";
import {CloseCircleTwoTone, SmileTwoTone, LoadingOutlined, SendOutlined, AudioTwoTone} from "@ant-design/icons";

const {TextArea} = Input;

const ChatInput = () => {
    return (
        <Fragment>
            <div className="chat-input">
                <div>
                    <div className="chat-input__smile-btn">
                        <Button type="link" shape="circle" size='large' icon={<SmileTwoTone />} />
                    </div>
                    <div className="chat-input__record-status">
                        <i className="chat-input__record-status-bubble"></i>
                        Запись...
                        <Button type="link" shape="circle" icon={<CloseCircleTwoTone />} className="stop-recording" />
                    </div>

                    <TextArea size="large" placeholder="Введите текст сообщения…"/>


                    <div className="chat-input__actions">
                        <Button type="link" shape="circle" icon={<LoadingOutlined />}/>

                        <Button type="link" shape="circle" size='large' icon={<SendOutlined />} />

                        <div className="chat-input__record-btn">
                            <Button type="link" shape="circle" icon={<AudioTwoTone />} />
                        </div>
                    </div>
                </div>
                <div className="chat-input__attachments">
                    <UploadFiles attachments={'attachments'} removeAttachment={'attachments'}/>
                </div>
            </div>
        </Fragment>
    );
};

export default ChatInput;
