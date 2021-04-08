import React from "react";

const LayoutSidebar = (props) => {
    const { children } = props;
    return (
        <aside className="app-aside app-aside-expand-md app-aside-light">
            <div className="aside-content">
                <div className="aside-menu overflow-hidden ps ps--active-y">
                    <nav id="stacked-menu" className="stacked-menu stacked-menu-has-collapsible">
                        {children}
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default LayoutSidebar;
