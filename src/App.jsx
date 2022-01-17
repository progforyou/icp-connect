import React from "react";
import {loadPlug} from "./Tools/Plug/PlugTools";
import {loadStoic} from "./Tools/Stoic/StoicTools";
import Navbar from "./Components/Navbar";
import {Connect} from "./Views";

const canisterId = 'unssi-hiaaa-aaaah-qcmya-cai'

function App() {
    const [plugCollection, setPlugCollection] = React.useState([]),
        [stoicCollection, setStoicCollection] = React.useState([]),
        [plugFetching, setPlugFetching] = React.useState(false),
        [stoicFetching, setStoicFetching] = React.useState(false);
    const setPlug = () => {
        setPlugFetching(true);
        loadPlug(canisterId).then(r => {
            setPlugCollection(r);
            setPlugFetching(false);
        }).catch(e => {
            console.log(e);
        })
    }
    const setStoic = () => {
        setStoicFetching(true);
        loadStoic(canisterId).then(r => {
            setPlugCollection(r);
            setStoicFetching(false);
        }).catch(e => {
            setStoicFetching(false);
            console.log(e);
        })
    }
    return (
        <div className="App">
            <Navbar/>
            <Connect/>
        </div>
    );
}

export default App;
