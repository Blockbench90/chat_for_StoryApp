import React from "react";
import classNames from "classnames";

import "./Block.scss";

interface BlockProps {
    children: React.ReactNode
    className?: string
}

const Block: React.FC<BlockProps> = ({ children, className }) => (
  <div className={classNames("block", className)}>{children}</div>
);

export default Block;
