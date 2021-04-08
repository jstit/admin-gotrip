import React from "react";

const TableRows = (props) => {
    const { children } = props;
    return <tr>{children}</tr>;
};

export default TableRows;
