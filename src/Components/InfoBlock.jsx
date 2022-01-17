import React from "react";
import {Button, Col, Row, Spinner} from "react-bootstrap";
import controller from "../Controller/Controller";
import {useNavigate} from "react-router-dom";
import {NotificationManager} from 'react-notifications';
import {SpinnerApp} from "./SpinnerApp";


const InfoBlock = (props) => {
    let navigate = useNavigate();
    const [plugFetching, setPlugFetching] = React.useState(false),
        [stoicFetching, setStoicFetching] = React.useState(false);
    const connectPlug = () => {
        setPlugFetching(true);
        controller().loadPlugData().then(r => {
            setPlugFetching(false);
            navigate("../dashboard");
        }).catch(e => {
            setPlugFetching(false);
            NotificationManager.error(e.toString(), 'Try again!', 5000, () => {
                connectPlug();
            });
        })
    }
    const connectStoic = () => {
        setStoicFetching(true);
        controller().loadStoicData().then(r => {
            setStoicFetching(false);
            navigate("../dashboard");
        }).catch(e => {
            setStoicFetching(false);
            NotificationManager.error(e.toString(), 'Click for try again!', 5000, () => {
                connectPlug();
            });
        })
    }
    return (
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
                        <Button variant={"primary"} className={"plug"} onClick={connectPlug}>{plugFetching ?
                            <SpinnerApp/> : "Connect Plug"}</Button>
                        <Button variant={"outline-primary"} className={"stoic"} onClick={connectStoic}>{stoicFetching ?
                            <SpinnerApp/> : "Connect Stoic"}</Button>
                    </div>
                </Row>
            </Col>
            <Col xl={5} lg={5} md={5} className={"img_section"}>
                <div className={"img_position"}>
                    <div className={"img_container"}>
                        <img
                            src={"https://unssi-hiaaa-aaaah-qcmya-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=x4bvh-cykor-uwiaa-aaaaa-b4atg-aaqca-aae7n-q"}
                            alt={"view"}/>
                    </div>
                </div>
                <div className={"img_position"}>
                    <div className={"img_container"}>
                        <img
                            src={"https://unssi-hiaaa-aaaah-qcmya-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=wab2v-pykor-uwiaa-aaaaa-b4atg-aaqca-aae6j-a"}
                            alt={"view"}/>
                    </div>
                </div>
                <div className={"img_position"}>
                    <div className={"img_container"}>
                        <img
                            src={"https://unssi-hiaaa-aaaah-qcmya-cai.raw.ic0.app/?cc=0&type=thumbnail&tokenid=6ahky-xakor-uwiaa-aaaaa-b4atg-aaqca-aaagc-q"}
                            alt={"view"}/>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default InfoBlock;