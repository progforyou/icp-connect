import React from "react";
import {Button} from "@mui/material";

const ConnectButtons = (props) => {
    return (
        <div>
            <Button onClick={props.loadPlug} variant="contained">Connect
                Plug</Button>
            <Button style={{margin: "auto 0 auto 15px"}} onClick={props.loadStoic} variant="contained">Connect
                Stoic</Button>
        </div>
    )
}

export default ConnectButtons;