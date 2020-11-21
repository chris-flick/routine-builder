import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>, 
    document.getElementById("root")
);

if (module.hot){
    module.hot.accept()
}