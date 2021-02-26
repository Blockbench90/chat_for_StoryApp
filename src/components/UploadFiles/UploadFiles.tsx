//@ts-nocheck
import React from "react";
import {Upload} from "antd";

const UploadFiles = ({attachments, removeAttachment}) => {
    return (
        <div className="clearfix">
            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
            />
        </div>
    );
};

export default UploadFiles;
