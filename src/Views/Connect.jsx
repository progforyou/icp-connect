import React from "react";
import {Container} from "react-bootstrap";
import InfoBlock from "../Components/InfoBlock";
import Benefits from "../Components/Benefits";

export const Connect = (props) => {
    return (
        <Container className={"mb-5"}>
            <InfoBlock/>
            <Benefits/>
        </Container>
    )
}