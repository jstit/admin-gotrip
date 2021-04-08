import React from "react";

const LayoutContent = (props) => {
    const { children } = props;
    return (
        <div className="app-main">
            <div className="wrapper">
                <div className="page">
                    <div className="page-inner">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default LayoutContent;
