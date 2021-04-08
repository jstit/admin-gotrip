import React from "react";

const Menu = (props) => {
    const { children } = props;
    return <ul className="menu">{children}</ul>;
};

export default Menu;
