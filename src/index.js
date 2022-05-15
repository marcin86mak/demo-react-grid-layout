import React from "react";
import ReactDOM from "react-dom";
import {PageLayout} from "./PageLayout";


const ExamplePage = () =>{

    return (
        <PageLayout/>
    )
}


const contentDiv = document.getElementById("root");
const gridProps = window.gridProps || {};
ReactDOM.render(React.createElement(ExamplePage, gridProps), contentDiv);