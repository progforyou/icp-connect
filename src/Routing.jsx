import React from "react";
import {Route, Switch} from "react-router-dom";
import NavApp from "./Components/Navbar";
import Dashboard from "./Views/Dashboard";
import Connect from "./Views/Connect";

const Routing = (props) => {
    return (
        <>
            <NavApp/>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/" exact component={Connect}/>
            </Switch>
        </>
    )
}

export default Routing;