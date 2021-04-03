import React from "react";

const index = () => {
    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item"></li>
            </ul>

            <ul className="navbar-nav nav-right">
                <li className="nav-item mode">
                    <a className="nav-link" href="/#">
                        <i className="fas fa-moon dark-icon" />
                        <i className="fas fa-sun light-icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default index;
