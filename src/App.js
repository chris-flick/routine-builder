import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "@hoc/Layout/Layout";
import Home from "@components/Home/Home";
import Profile from "@components/Profile/Profile";
import History from "@components/History/History";
import NoMatch from "@components/NoMatch/NoMatch";
import "./App.css";

class App extends Component {
    
    render() {

        const routes = (
            <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        );

        return (
            <div className="App">
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

export default App;