import React from "react";
import {Card} from "react-bootstrap";

export const NNSCard = (props) => {
    return (
        <Card className={"ntf_card"}>
            <Card.Body>
                <Card.Header>
                    Pets Avg Price
                </Card.Header>
                <Card.Text>
                    {/*<ul>
                        {props.data.map(el => {
                            return (
                                <li>
                                    {el.token.type}: {el.stats.floor}
                                </li>
                            )
                        })}
                    </ul>*/}
                        {/*Pets Avg Price:*/} {props.data.find(e => e.token.type === "ICPets").stats.average}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export const PETSCard = (props) => {
    return (
        <Card className={"ntf_card"}>
            <Card.Body>
                <Card.Header>
                    PETS Token
                </Card.Header>
                <Card.Text>
                    soon
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export const NFTCountCard = ({count}) => {
    return (
        <Card className={"ntf_card"}>
            <Card.Body>
                <Card.Header>
                    Your NFTs
                </Card.Header>
                <Card.Text>
                    {count}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export const ICPPriceCard = ({data}) => {
    if (!Object.keys(data).length) return null;
    let change = data['internet-computer'].usd_24h_change > 0 ? "up" : "down"
    return (
        <Card className={"icp_card"}>
            <Card.Body>
                <Card.Header>
                    ICP price
                </Card.Header>
                <Card.Text>
                    <span className={"price"}>{data['internet-computer'].usd}</span>
                    <span className={"change " + change}>{data['internet-computer'].usd_24h_change.toFixed(2)}%</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}