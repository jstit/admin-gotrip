import React, { useState } from "react";

import Pagination from "@material-ui/lab/Pagination";

import Layout from "@components/common/Layout";
import Header from "@components/common/Header";
import Sidebar from "@components/common/Sidebar";

import { useUser } from "@shared/modules/user/hook";
import { useEffect } from "react";

import useTable from "@shared/hook/useTable";

const App = () => {
    const [state, setState] = React.useState([]);

    const { getUser } = useUser();

    const {
        createData,
        totalPage,
        onHandleCurrenPage,
        onHandleSearchValue,
        onHandleSearchValueAll,
    } = useTable(state);

    React.useEffect(() => {
        getUser().then((data) => {
            setState(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const userData = createData();

    return (
        <Layout>
            <Header></Header>
            <Sidebar></Sidebar>
            <div className="wrapper">
                <div className="row">
                    <div className="col-12 col-m-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h3>Table</h3>
                                <i className="fas fa-ellipsis-h" />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="search"
                                    onChange={(e) => onHandleSearchValue(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="search all"
                                    onChange={(e) => onHandleSearchValueAll(e.target.value)}
                                />
                            </div>
                            <div className="card-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>email</th>
                                            <th>firstName</th>
                                            <th>lastName</th>
                                            {/* <th>sex</th> */}
                                            <th>address</th>
                                            <th>role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userData.map((user) => {
                                            return (
                                                <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    {/* <td>{user.sex === true ? "Nam" : "Nữ"}</td> */}
                                                    <td>{user.address}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.role}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <br />
                                <Pagination
                                    count={totalPage}
                                    onChange={(e, index) => {
                                        onHandleCurrenPage(index);
                                    }}
                                    showFirstButton
                                    showLastButton
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default App;
