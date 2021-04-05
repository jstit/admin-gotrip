import React from "react";

import Header from "@components/common/Header";
import Sidebar from "@components/common/Sidebar";

const App = () => {
    return (
        <div className="app">
            <Header></Header>
            <Sidebar></Sidebar>
            <main className="app-main">
                <div className="wrapper">
                    <div className="page has-sidebar has-sidebar-expand-xl">
                        <div className="page-inner">
                            <div className="page-section">
                                <div className="card card-fluid">
                                    {/* .card-header */}
                                    <div className="card-header">
                                        {/* .nav-tabs */}
                                        <ul className="nav nav-tabs card-header-tabs">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active show"
                                                    data-toggle="tab"
                                                    href="#tab1"
                                                >
                                                    All
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    data-toggle="tab"
                                                    href="#tab2"
                                                >
                                                    Ongoing
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    data-toggle="tab"
                                                    href="#tab3"
                                                >
                                                    Completed
                                                </a>
                                            </li>
                                        </ul>
                                        {/* /.nav-tabs */}
                                    </div>
                                    {/* /.card-header */}
                                    {/* .card-body */}
                                    <div className="card-body">
                                        {/* .form-group */}
                                        <div className="form-group">
                                            {/* .input-group */}
                                            <div className="input-group input-group-alt">
                                                {/* .input-group-prepend */}
                                                <div className="input-group-prepend">
                                                    <select className="custom-select">
                                                        <option selected> Filter By </option>
                                                        <option value={1}> Tags </option>
                                                        <option value={2}> Vendor </option>
                                                        <option value={3}> Variants </option>
                                                        <option value={4}> Prices </option>
                                                        <option value={5}> Sales </option>
                                                    </select>
                                                </div>
                                                {/* /.input-group-prepend */}
                                                {/* .input-group */}
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <span className="oi oi-magnifying-glass" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search record"
                                                    />
                                                </div>
                                                {/* /.input-group */}
                                            </div>
                                            {/* /.input-group */}
                                        </div>
                                        {/* /.form-group */}
                                        {/* .table-responsive */}
                                        <div className="text-muted">
                                            Showing 1 to 10 of 1,000 entries
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th
                                                            colSpan={2}
                                                            style={{ minWidth: "320px" }}
                                                        >
                                                            <div className="thead-dd dropdown">
                                                                <span className="custom-control custom-control-nolabel custom-checkbox">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="custom-control-input"
                                                                        id="check-handle"
                                                                    />
                                                                    <label
                                                                        className="custom-control-label"
                                                                        htmlFor="check-handle"
                                                                    />
                                                                </span>
                                                                <div
                                                                    className="thead-btn"
                                                                    role="button"
                                                                    data-toggle="dropdown"
                                                                    aria-haspopup="true"
                                                                    aria-expanded="false"
                                                                >
                                                                    2333366666
                                                                </div>
                                                                <div className="dropdown-menu">
                                                                    <div className="dropdown-arrow" />
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="/#"
                                                                    >
                                                                        Select all
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="/#"
                                                                    >
                                                                        Unselect all
                                                                    </a>
                                                                    <div className="dropdown-divider" />
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="/#"
                                                                    >
                                                                        Bulk remove
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="/#"
                                                                    >
                                                                        Bulk edit
                                                                    </a>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="/#"
                                                                    >
                                                                        Separate actions
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th> Inventory </th>
                                                        <th> Variants </th>
                                                        <th> Prices </th>
                                                        <th> Sales </th>
                                                        <th
                                                            style={{
                                                                width: "100px",
                                                                minWidth: "100px",
                                                            }}
                                                        >
                                                            &nbsp;
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="align-middle col-checker">
                                                            <div className="custom-control custom-control-nolabel custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    className="custom-control-input"
                                                                    name="selectedRow[]"
                                                                    id="p4"
                                                                />
                                                                <label
                                                                    className="custom-control-label"
                                                                    htmlFor="p4"
                                                                />
                                                            </div>
                                                        </td>

                                                        <td className="align-middle"> 169 </td>
                                                        <td className="align-middle"> 1 </td>
                                                        <td className="align-middle"> $34.41 </td>
                                                        <td className="align-middle"> 1824 </td>
                                                        <td className="align-middle text-right">
                                                            <a
                                                                href="/#"
                                                                className="btn btn-sm btn-icon btn-secondary"
                                                            >
                                                                <i className="fa fa-pencil-alt" />
                                                                <span className="sr-only">
                                                                    Edit
                                                                </span>
                                                            </a>
                                                            <a
                                                                href="/#"
                                                                className="btn btn-sm btn-icon btn-secondary"
                                                            >
                                                                <i className="far fa-trash-alt" />
                                                                <span className="sr-only">
                                                                    Remove
                                                                </span>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <ul className="pagination justify-content-center mt-4">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="/#" tabIndex={-1}>
                                                    <i className="fa fa-lg fa-angle-left" />
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item disabled">
                                                <a className="page-link" href="/#" tabIndex={-1}>
                                                    ...
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/#">
                                                    13
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="/#">
                                                    14
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/#">
                                                    15
                                                </a>
                                            </li>
                                            <li className="page-item disabled">
                                                <a className="page-link" href="/#" tabIndex={-1}>
                                                    ...
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/#">
                                                    24
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="/#">
                                                    <i className="fa fa-lg fa-angle-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
