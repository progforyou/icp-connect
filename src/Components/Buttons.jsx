import React from "react";
import {Button} from "react-bootstrap";

const ConnectButtons = (props) => {
    return (
        <div>
            <Button onClick={props.loadPlug} variant="success">Connect
                Plug</Button>
            <Button style={{margin: "auto 0 auto 15px"}} onClick={props.loadStoic} variant="success">Connect
                Stoic</Button>
        </div>
    )
}

export default ConnectButtons;