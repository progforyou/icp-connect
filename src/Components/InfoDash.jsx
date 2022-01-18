import React from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {connectStoreon} from "storeon/react";

const CardDash = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Header>
                    {props.header}
                </Card.Header>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const _InfoDash = (props) => {
    let hidden = props.tokens.length ? "" : "hidden"
    return (
        <Row id={"info_dash"}>
            <Col>
                <Row className={"cards_section"}>
                    <div className={"cards_inner"}>
                        <CardDash header={"ICP price"}/>
                        <CardDash header={"NNS stats"}/>
                        <CardDash header={"Your NFTs"}/>
                        <CardDash header={"PETS Token"}/>
                    </div>
                </Row>
                <Row className={"discord_section " + hidden}>
                    <Col xl={6} lg={6} xs={12} className={"discord_inner"}>
                        <Row className={"discord_text"}>
                            <p>Enter your Discord name (#name) and get a special <b>Pets Holders Role!</b></p>
                        </Row>
                        <Row className={"discord_href"}>
                            <a href="#qwe">Read more info</a>
                        </Row>
                    </Col>
                    <Col xl={6} lg={6} xs={12} className={"discord_form"}>
                        <Row className={"m-auto"}>
                            <Col>
                                <Row className={"input_inner"}>
                                    <div>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formName">
                                                <Form.Control type="text" placeholder="Your Discord Name"/>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Row>
                                <Row className={"btn_inner"}>
                                    <div>
                                        <Button variant={"primary"}>Verify</Button>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default connectStoreon('tokens', _InfoDash);