import React from "react";

import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
    const { children, icon, path = "/#" } = props;
    return (
        <li className="menu-item">
            <NavLink to={path} className="menu-link" activeClassName="has-active">
                <span className="menu-icon">{icon}</span>
                <span className="menu-text">{children}</span>
            </NavLink>
        </li>
    );
};

export default MenuItem;
