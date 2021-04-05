import React from "react";

const index = () => {
    return (
        <aside className="app-aside app-aside-expand-md app-aside-light">
            <div className="aside-content">
                <div className="aside-menu overflow-hidden ps ps--active-y">
                    <nav id="stacked-menu" className="stacked-menu stacked-menu-has-collapsible">
                        <ul className="menu">
                            <li className="menu-item">
                                <a href="index-2.html" className="menu-link">
                                    <span className="menu-icon fas fa-home" />
                                    <span className="menu-text">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <footer className="aside-footer border-top p-3">
                    <button className="btn btn-light btn-block text-primary" data-toggle="skin">
                        Night mode <i className="fas fa-moon ml-1" />
                    </button>
                </footer>
            </div>
        </aside>
    );
};

export default index;
