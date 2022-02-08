import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import Paginator from "./Paginator";
import {connectStoreon} from "storeon/react";
import Controller from "../Controller/Controller";
import {NotificationManager} from "react-notifications";
import {useParams} from "react-router-dom";

const CardItem = (props) => {
    let color = "",
        hidden = props.hidden ? "hidden" : "";
    switch (props.type) {
        case "ICPets":
            color = "purple";
            break;
        default:
            color = "yellow";
            break;
    }
    return (
        <a target="_blank" className={"card_href " + hidden} href={props.url}>
            <Card>
                <div className={"top_info"}>
                    <span className={"token_id"}>#{!hidden ? props.index.toString() : null}</span>
                    <div className={"info_card " + color}><span>{props.type}</span></div>
                </div>
                <div className={"card_top"}>
                    <img src={props.url} alt={props.index}/>
                </div>
                <div className={"description"}>
                    {props.listed ? <span className={"listed active"}>listed</span> :
                        <span className={"delisted active"}>delisted</span>}
                </div>
            </Card>
        </a>
    )
}

const _ListDash = (props) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);
    const countByPage = 25;
    const renderList = () => {
        let result = []
        if (props.tokens) {
            props.tokens.map((token, keyToken) => {
                if (token) {
                    return token.collections.map((el, key) => {
                        result.push(<CardItem key={`${token.type}.${keyToken}.${key}`} {...el} type={token.type}/>)
                    })
                }
            })
        }
        result = result.slice((currentPage - 1) * countByPage, currentPage * countByPage);
        if (result.length === 2 || (result.length - 2) % 3 === 0) {
            result.push(<CardItem key={result.length + 1} hidden/>)
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
        } else {
            let counter = 0;
            props.tokens.map(token => {
                if (token) {
                    return token.collections.map((el, key) => {
                        counter += 1;
                    })
                }
            })
            setTotalPages(Math.ceil(counter/25));
        }
    }, [props.tokens])
    return (
        <Row id={'list_dash'}>
            {props.tokens.length ?
                <Col>
                    <Row>
                        <Paginator currentPage={currentPage} totalPages={totalPages} onClick={(page) => setCurrentPage(page)}/>
                    </Row>
                    <Row className={"list_cards my-5"}>
                        <div className={"cards_inner"}>
                            {renderList()}
                        </div>
                    </Row>
                    <Row>
                        <Paginator currentPage={currentPage} totalPages={totalPages} onClick={(page) => setCurrentPage(page)}/>
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