import React from "react";
import {StoreContext} from 'storeon/react'
import {BrowserRouter} from "react-router-dom";
import Routing from "./Routing";
import {store} from "./Store";
import {NotificationContainer} from 'react-notifications';


const App = (props) => {
    return (
        <StoreContext.Provider value={store}>
            <BrowserRouter>
                <Routing/>
                <NotificationContainer/>
            </BrowserRouter>
        </StoreContext.Provider>
    )
}

export default App;
