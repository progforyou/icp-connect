import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import Paginator from "./Paginator";

const CardItem = (props) => {
    return (
        <a target="_blank" className={"card_href"} href={props.url}>
            <Card>
                <Card.Img variant="top" src={props.url}/>
                <div className={"info_card green"}><span>ICPets</span></div>
            </Card>
        </a>
    )
}

const ListDash = (props) => {
    const renderList = () => {
        if (props.tokens){
            return props.tokens.map((el, key) => {
                return <CardItem key={key} {...el}/>
            })
        }
    }
    console.log(props);
    return (
        <Row id={'list_dash'}>
            <Col>
                <Row>
                    <Paginator/>
                </Row>
                <Row className={"list_cards mb-5"}>
                    <div className={"cards_inner"}>
                        {renderList()}
                        {renderList()}
                        {renderList()}
                        {renderList()}
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