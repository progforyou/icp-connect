import React from "react";
import {Card} from "react-bootstrap";

export const NNSCard = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Header>
                    NNS stats
                </Card.Header>
                <Card.Text>
                     content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}


export const PETSCard = (props) => {
    return (
        <Card>
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
        <Card>
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
    return (
        <Card>
            <Card.Body>
                <Card.Header>
                    ICP price
                </Card.Header>
                <Card.Text>
                    {data['internet-computer'].usd}
                    <span className={"variant"}>{data['internet-computer'].usd_24h_change.toFixed(2)}</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}