import React from "react";
import {Route} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";

export const RouteComponent = () => (
    <>
        <Route exact path="/" component={Home}/>
        <Route path="/layout" component={Layout}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/setting" component={Setting}/>
    </>
);
