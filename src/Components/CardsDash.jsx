import React from "react";
import {Card} from "react-bootstrap";
import CoinCard_svg from "../Svg/CoinCard_svg";
import icp from '../Assets/img/icp.png';
import nft from '../Assets/img/nft.png';
import StatsCard_svg from "../Svg/StatsCard_svg";

export const NNSCard = (props) => {
    return (
        <Card className={"ntf_card"}>
            <Card.Body>
                <div>
                    <div className={"card_title"}>
                        Pets Avg Price
                    </div>
                    <div className={"card_description"}>
                        {props.data.find(e => e.token.type === "ICPets").stats.average}
                    </div>
                </div>
                <div>
                    <div className={"img"}>
                        <StatsCard_svg customClass={"img_svg"}/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}


export const PETSCard = (props) => {
    return (
        <Card>
            <Card.Body>
                <div>
                    <div className={"card_title"}>
                        PETS token
                    </div>
                    <div className={"card_description"}>
                        Coming soon
                    </div>
                </div>
                <div>
                    <div className={"img"}>
                        <CoinCard_svg customClass={"img_svg"}/>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export const NFTCountCard = ({count}) => {
    return (
        <Card>
            <Card.Body>
                <div className={"card_text"}>
                    <div className={"card_title"}>
                        Your NFTs
                    </div>
                    <div className={"card_description"}>
                        {count}
                    </div>
                </div>
                <div className={"card_img"}>
                    <div className={"img"}>
                        <div className={"img_png"}>
                            <img src={nft} alt="icp"/>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export const ICPPriceCard = ({data}) => {
    if (!Object.keys(data).length) return null;
    return (
        <Card>
            <Card.Body>
                <div className={"card_text"}>
                    <div className={"card_title"}>
                        ICP price
                    </div>
                    <div className={"card_description"}>
                        {data['internet-computer'].usd} <span className={"icp_text"}>USDT</span>
                    </div>
                </div>
                <div className={"card_img"}>
                    <div className={"img"}>
                        <div className={"img_png"}>
                            <img src={icp} alt="icp"/>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}