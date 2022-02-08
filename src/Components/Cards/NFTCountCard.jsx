import React from "react";
import {Card} from "react-bootstrap";
import nft from '../../Assets/img/nft.png';

export default ({count}) => {
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