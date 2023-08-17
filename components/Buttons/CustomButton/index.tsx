import React, { MouseEvent } from "react";

const CustomButton = (props: {
    text: string;
    addClass?: string;
    children?: any;
    type?: any;
    onClick?: any; // Change the type here
}) => {
    const { text, addClass, children, type, onClick } = props;
    return (
        <button type={type} onClick={onClick} className={addClass}>
            {text}
            {children ? children : null}
        </button>
    );
};

export default CustomButton;
