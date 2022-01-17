import React from "react";
import {Button, Card, CardGroup, Col, Row} from "react-bootstrap";

const CardItem = (props) => {
    return (
        <Card>
            <Card.Img variant="top" src="https://entrepot.app/collections/icpets/avatar.jpg"/>
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const Benefits = () => {
    return (
        <Row id={"benefits_block"}>
            <Col>
                <Row>
                    <div className={"button_inner d-flex"}>
                        <Button variant={"primary"}>Exclusively on the Internet
                            Computer</Button>
                    </div>
                </Row>
                <Row>
                    <div className={"cards_inner"}>
                        <CardItem/>
                        <CardItem/>
                        <CardItem/>
                    </div>
                </Row>
            </Col>
        </Row>
    )
}

export default Benefits;