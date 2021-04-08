import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import { Table, TableHead, TableBody, TableRows, TableCell } from "@components/common/Table";

const UsersPage = () => {
    const [userData, setUserdata] = useState([]);

    const checkboxAllRef = useRef();

    useEffect(() => {
        axios
            .get("https://6066036ab8fbbd0017567ec3.mockapi.io/v1/users?p=2&l=5")
            .then((response) => setUserdata(response.data));
    }, []);

    return (
        <div className="page-section">
            <div className="card card-fluid">
                <div className="card-body">
                    <Table>
                        <TableHead>
                            <TableRows>
                                <TableCell>
                                    <input type="checkbox" ref={checkboxAllRef} />
                                </TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>email</TableCell>
                                <TableCell>firstName</TableCell>
                                <TableCell>lastName</TableCell>
                                <TableCell>address</TableCell>
                                <TableCell>actions</TableCell>
                            </TableRows>
                        </TableHead>
                        <TableBody>
                            {userData.map((user, index) => {
                                return (
                                    <TableRows key={user.id}>
                                        <TableCell>
                                            <input type="checkbox" id={user.id} />
                                        </TableCell>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.firstName}</TableCell>
                                        <TableCell>{user.lastName}</TableCell>
                                        <TableCell>{user.address}</TableCell>
                                        <TableCell>
                                            <button className="btn btn-sm btn-icon btn-secondary mr-2">
                                                <i className="fa fa-pencil-alt" />
                                            </button>
                                            <button className="btn btn-sm btn-icon btn-secondary">
                                                <i className="far fa-trash-alt" />
                                            </button>
                                        </TableCell>
                                    </TableRows>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
