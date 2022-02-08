import React from "react";
import {Card} from "react-bootstrap";
import icp from '../../Assets/img/icp.png';


export default ({data}) => {
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