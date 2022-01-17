import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const InfoBlock = (props) => {
    return(
        <Row id={'info_block'}>
            <Col xl={7} lg={7} md={7} className={"info_section"}>
                <Row className={"big_text"}>
                    <div>
                        Connecting all Pets Lovers in one place
                    </div>
                </Row>
                <Row className={"small_text"}>
                    <div>
                        Connect your wallet and get an access to your ICPets collection and stacking rewards (coming)
                    </div>
                </Row>
                <Row>
                    <div className={"buttons d-flex"}>
                        <Button variant={"primary"} className={"plug"}> Connect Plug</Button>
                        <Button variant={"outline-primary"} className={"stoic"}> Connect Stoic</Button>
                    </div>
                </Row>
            </Col>
            <Col xl={5} lg={5} md={5} className={"img_section"}>
                <div className={"img_position"}>
                    <div className={"img_container"}>
                        <img src={"https://unssi-hiaaa-aaaah-qcmya-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=x4bvh-cykor-uwiaa-aaaaa-b4atg-aaqca-aae7n-q"} alt={"view"}/>
                    </div>
                </div>
                <div className={"img_position"}>
                    <div className={"img_container"}>
                        <img src={"https://unssi-hiaaa-aaaah-qcmya-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=wab2v-pykor-uwiaa-aaaaa-b4atg-aaqca-aae6j-a"} alt={"view"}/>
                    </div>
                </div>
                <div className={"img_position"}>
                    <div className={"img_container"}>
                        <img src={"https://unssi-hiaaa-aaaah-qcmya-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=6ahky-xakor-uwiaa-aaaaa-b4atg-aaqca-aaagc-q"} alt={"view"}/>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default InfoBlock;