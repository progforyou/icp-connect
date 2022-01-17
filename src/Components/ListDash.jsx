import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import Paginator from "./Paginator";

const CardItem = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src="https://entrepot.app/collections/icpets/avatar.jpg"/>
            <div className={"info_card green"}><span>ICPets</span></div>
        </Card>
    )
}

const ListDash = (props) => {
    return (
        <Row id={'list_dash'}>
            <Col>
                <Row>
                    <Paginator/>
                </Row>
                <Row className={"list_cards mb-5"}>
                    <div className={"cards_inner"}>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                    </div>
                </Row>
                <Row>
                    <Paginator/>
                </Row>
            </Col>
        </Row>
    )
}

export default ListDash;