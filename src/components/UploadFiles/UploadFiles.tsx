//@ts-nocheck
import React from "react";
import {Upload} from "antd";

const UploadFiles = ({ attachments, removeAttachment }) => {
  return (
    <div className="clearfix">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
      />
      {/*<Modal*/}
      {/*  // visible={state.previewVisible}*/}
      {/*  footer={null}*/}
      {/*  onCancel={handleCancel}*/}
      {/*>*/}
      {/*  <img alt="example" style={{ width: "100%" }} src={state.previewImage} />*/}
      {/*</Modal>*/}
    </div>
  );
};

export default UploadFiles;
