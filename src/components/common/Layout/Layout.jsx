import React from "react";

const Layout = (props) => {
    const { children } = props;
    return <div className="app">{children}</div>;
};

export default Layout;
