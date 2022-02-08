import React from "react";
import {Card} from "react-bootstrap";
import StatsCard_svg from "../../Svg/StatsCard_svg";

export default (props) => {
    return (
        <Card className={"ntf_card"}>
            <Card.Body>
                <div className={"card_text"}>
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