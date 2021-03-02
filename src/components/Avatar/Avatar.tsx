import React from "react";
import generateAvatarFromHash from "../../utils/generateAvatarFromHash";

import "./Avatar.scss";

interface AvatarProps {
    user: {
        _id: string
        isOnline?: boolean
        fullName?: string
        avatar?: string
    }
}

const Avatar = ({user}: AvatarProps) => {
    if (user.avatar) {
        return (
            <img
                className="avatar"
                src={user.avatar}
                alt={`Avatar ${user.fullName}`}
            />
        );
    } else {
        const {color, colorLighten} = generateAvatarFromHash(user._id);
        const firstChar = user.fullName && user.fullName[0].toUpperCase();
        return (
            <div
                style={{
                    background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
                }}
                className="avatar avatar--symbol"
            >
                {firstChar}
            </div>
        );
    }
};

export default Avatar;
