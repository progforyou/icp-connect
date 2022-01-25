import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import Paginator from "./Paginator";
import {connectStoreon} from "storeon/react";
import Controller from "../Controller/Controller";
import {NotificationManager} from "react-notifications";

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

const _ListDash = (props) => {
    const renderList = () => {
        let counter = 0;
        let result = []
        if (props.tokens) {
            result.push(props.tokens.map(token => {
                if (token) {
                    return token.collections.map((el, key) => {
                        counter += 1;
                        return <CardItem key={key} {...el} type={token.type}/>
                    })
                }
            }))
        }
        if (counter === 2 || (counter - 2) % 3 === 0) {
            result.push(<CardItem key={counter + 1} hidden/>)
        }
        return result
    }
    React.useEffect(() => {
        if (!props.tokens.length) {
            Controller().removeRole()
                .then(r => {
                    NotificationManager.error('User was updated!');
                })
                .catch(e => {
                    NotificationManager.error(e.message.toString());
                });
        }
    }, [props.tokens])
    return (
        <Row id={'list_dash'}>
            {props.tokens.length ?
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
                </Col> :
                <Col>
                    <Row>
                        No tokens
                    </Row>
                </Col>
            }
        </Row>
    )
}

export default connectStoreon('tokens', _ListDash);