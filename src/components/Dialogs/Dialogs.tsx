import React from "react";
import {Input, Empty} from "antd";

import DialogItem from "../DialogItem/DialogItem";
import "./Dialogs.scss";

const Dialogs = () => (
    <div className="dialogs">
        <div className="dialogs__search">
            <Input.Search
                placeholder="Поиск среди контактов"
            />
        </div>
        <DialogItem/>
        <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Ничего не найдено"
        />
    </div>
);

export default Dialogs;
