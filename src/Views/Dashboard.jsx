import React from "react";
import {Container} from "react-bootstrap";
import InfoDash from "../Components/InfoDash";
import ListDash from "../Components/ListDash";
import {connectStoreon} from "storeon/react";

export const _Dashboard = (props) => {
    return (
        <Container className={"mb-5"}>
            <InfoDash {...props}/>
            <ListDash {...props}/>
        </Container>
    )
}

export const Dashboard = connectStoreon('tokens', _Dashboard);