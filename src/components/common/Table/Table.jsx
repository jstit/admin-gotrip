import React from "react";

const Table = (props) => {
    const { children } = props;
    return (
        <div className="table-responsive">
            <table className="table">{children}</table>
        </div>
    );
};

export default Table;
