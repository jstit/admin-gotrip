import React from "react";

const TableHead = (props) => {
    const { children } = props;
    return <thead>{children}</thead>;
};

export default TableHead;
