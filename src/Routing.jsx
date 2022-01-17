import React from "react";
import {Route, Routes} from "react-router-dom";
import {Connect, Dashboard} from "./Views";
import NavApp from "./Components/Navbar";

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