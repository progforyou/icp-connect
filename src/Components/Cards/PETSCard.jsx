import React from "react";
import {Card} from "react-bootstrap";
import CoinCard_svg from "../../Svg/CoinCard_svg";


export default (props) => {
    return (
        <Card>
            <Card.Body>
                <div className={"card_text"}>
                    <div className={"card_title"}>
                        PETS token
                    </div>
                    <div className={"card_description"}>
                        Soon
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
