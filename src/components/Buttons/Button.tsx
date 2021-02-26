import React from "react";
import { Button as BaseButton, ButtonProps } from "antd";
import classNames from "classnames";

import "./Button.scss";


const Button: React.FC<ButtonProps> = (props) => {
    return (
        <BaseButton
            {...props}
            className={classNames("button", props.className, {
                "button--large": props.size === "large"
            })}
        />
    )
}
export default Button