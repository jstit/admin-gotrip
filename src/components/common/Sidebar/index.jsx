import React from "react";

const index = () => {
    return (
        <div>
            <div className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-item">
                        <a href="/#" className="sidebar-nav-link">
                            <div>
                                <i className="fas fa-tachometer-alt" />
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default index;
