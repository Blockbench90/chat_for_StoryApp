import React from "react";

import "./Avatar.scss";

interface AvatarProps {
    avatar: string
    fullName: string
}

const Avatar: React.FC<AvatarProps> = ({avatar, fullName}) => {
    return (
        <img
            className="avatar"
            src={avatar}
            alt={`Avatar ${fullName}`}
        />
    );

}

export default Avatar;
