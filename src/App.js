import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

import Layout from "@hoc/Layout/Layout";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <h1> Hello, World! </h1>
                </Layout>
            </div>
        );
    }
}

export default hot(App);