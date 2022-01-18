import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import Paginator from "./Paginator";

const CardItem = (props) => {
    let color = "",
        hidden = props.hidden ? "hidden" : "";
    switch (props.type) {
        case "ICPets":
            color = "green";
            break;
        default:
            color = "blue";
            break;
    }
    return (
        <a target="_blank" className={"card_href " + hidden} href={props.url}>
            <Card>
                <Card.Img variant="top" src={props.url}/>
                <div className={"info_card " + color}><span>{props.type}</span></div>
            </Card>
        </a>
    )
}

const ListDash = (props) => {
    const renderList = () => {
        let counter = 0;
        let result = []
        if (props.tokens) {
            result.push(props.tokens.map(token => {
                return token.collections.map((el, key) => {
                    counter += 1;
                    return <CardItem key={key} {...el} type={token.type}/>
                })
            }))
        }
        if (counter === 2 || (counter - 2) % 3 === 0) {
            result.push(<CardItem key={counter + 1} hidden/>)
        }
        return result
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