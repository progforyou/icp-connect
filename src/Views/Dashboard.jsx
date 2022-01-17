import React from "react";
import {Container} from "react-bootstrap";
import InfoDash from "../Components/InfoDash";
import ListDash from "../Components/ListDash";

export const Dashboard = () => {
    return (
        <Container className={"mb-5"}>
            <InfoDash/>
            <ListDash/>
        </Container>
    )
}