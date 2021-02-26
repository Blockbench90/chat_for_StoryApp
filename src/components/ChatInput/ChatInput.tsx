import React, {Fragment} from "react";
import {Button, Input} from "antd";


import UploadFiles from "../UploadFiles/UploadFiles";
import "./ChatInput.scss";

const {TextArea} = Input;

const ChatInput = () => {
    return (
        <Fragment>
            <div className="chat-input">
                <div>
                    <div className="chat-input__smile-btn">
                        <Button type="link" shape="circle" icon="smile" />
                    </div>
                    <div className="chat-input__record-status">
                        <i className="chat-input__record-status-bubble"></i>
                        Recording...
                        <Button type="link" shape="circle" icon="close" className="stop-recording" />
                    </div>

                    <TextArea size="large" placeholder="Введите текст сообщения…"/>


                    <div className="chat-input__actions">
                        {/*<UploadField*/}
                        {/*    containerProps={{*/}
                        {/*        className: "chat-input__actions-upload-btn"*/}
                        {/*    }}*/}
                        {/*    uploadProps={{*/}
                        {/*        accept: ".jpg,.jpeg,.png,.gif,.bmp",*/}
                        {/*        multiple: "multiple"*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    <Button type="link" shape="circle" icon="camera"/>*/}
                        {/*</UploadField>*/}
                        <Button type="link" shape="circle" icon="loading"/>

                        <Button type="link" shape="circle" icon="check-circle" />

                        <div className="chat-input__record-btn">
                            <Button type="link" shape="circle" icon="audio" />
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
