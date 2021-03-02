import React from "react";

import noReadSvg from "../../assets/img/noreaded.svg";

interface IconReadProps {
    isMe: boolean
    isRead: boolean
}

const IconRead: React.FC<IconReadProps> = ({isMe, isRead}) => {
    return (
        isMe && (isRead ? (
            <img className="message__icon-read" src={noReadSvg} alt="Read icon"/>
        ) : (
            <img className="message__icon-read message__icon-read--no"
                 src={noReadSvg}
                 alt="No read icon"/>
        )))
        ||
        null;
}
export default IconRead;