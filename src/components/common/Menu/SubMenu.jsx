import React, { useState } from "react";

const SubMenu = (props) => {
    const { children } = props;
    const [hasOpen, setOpen] = useState(false);

    return (
        <li className={hasOpen ? "menu-item has-child has-open" : "menu-item has-child"}>
            <a href="/#" className="menu-link" onClick={() => setOpen(!hasOpen)}>
                <span className="menu-icon oi oi-bar-chart" />
                <span className="menu-text">Collections</span>
            </a>
            <ul className="menu">{children}</ul>
        </li>
    );
};

export default SubMenu;
