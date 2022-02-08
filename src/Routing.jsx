import React from "react";
import {Route, Routes} from "react-router-dom";
import NavApp from "./Components/Navbar";
import Dashboard from "./Views/Dashboard";
import Connect from "./Views/Connect";

const Routing = (props) => {
    return (
        <>
            <NavApp/>
            <Routes>
                <Route path="/dashboard" exact element={<Dashboard/>}/>
                <Route path="/" exact element={<Connect/>}/>
            </Routes>
        </>
    )
}

export default Routing;