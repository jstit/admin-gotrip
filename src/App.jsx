import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout, LayoutContent, LayoutHeader, LayoutSidebar } from "@components/common/Layout";
import { Menu, MenuItem, SubMenu } from "@components/common/Menu";

import UsersPage from "@pages/Users";

const App = () => {
    return (
        <Router>
            <Layout>
                <LayoutHeader></LayoutHeader>
                <LayoutSidebar>
                    <Menu>
                        <MenuItem path="/123">MenuItem</MenuItem>
                        <MenuItem path="/321">MenuItem</MenuItem>
                        <SubMenu>
                            <MenuItem path="/123">MenuItem</MenuItem>
                            <MenuItem path="/321">MenuItem</MenuItem>
                        </SubMenu>
                    </Menu>
                </LayoutSidebar>
                <LayoutContent>
                    <Switch>
                        <Route path="/users" component={UsersPage} />
                    </Switch>
                </LayoutContent>
            </Layout>
        </Router>
    );
};

export default App;
