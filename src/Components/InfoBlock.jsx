import React from "react";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import controller from "../Controller/Controller";
import {useNavigate} from "react-router-dom";
import {NotificationManager} from 'react-notifications';
import {SpinnerApp} from "./SpinnerApp";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import plug from '../Assets/img/plug.png';
import stoic from '../Assets/img/stoic.png';
import img_1 from '../Assets/img/img_main_1.png';
import img_2 from '../Assets/img/img_main_2.png';
import img_3 from '../Assets/img/img_main_3.png';
import img_4 from '../Assets/img/img_main_4.png';
import Star_svg from "../Svg/Star_svg";
import Circle_svg from "../Svg/Circle_svg";
import Dot_svg from "../Svg/Dot_svg";
import SmallFilter_home_svg from "../Svg/SmallFilter_home_svg";
import BigFilter_home_svg from "../Svg/BigFilter_home_svg";
import CircleFilter_home_svg from "../Svg/CircleFilter_home_svg";


const InfoBlock = (props) => {
    let navigate = useNavigate();
    const [plugFetching, setPlugFetching] = React.useState(false),
        [stoicFetching, setStoicFetching] = React.useState(false);
    const connectPlug = () => {
        setPlugFetching(true);
        controller().loadPlugData().then(r => {
            setPlugFetching(false);
            if (r.length) navigate("../dashboard");
            else NotificationManager.error('No tokens!');
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
            if (r.length) navigate("../dashboard");
            else NotificationManager.error('No tokens!');
        }).catch(e => {
            setStoicFetching(false);
            NotificationManager.error(e.toString(), 'Click for try again!', 5000, () => {
                connectStoic();
            });
        })
    }
    return (
        <div className={"info_block_bg"}>

            <Container id={'info_block'}>
                <Row>
                    <Col xl={7} lg={7} md={7} className={"info_section"}>
                        <Row className={"big_text"}>
                            <div>
                                Connecting all Pets Lovers <span className={"green_text"}>in one place</span>
                            </div>
                        </Row>
                        <Row className={"small_text"}>
                            <div>
                                Connect your wallet and get an access to your ICPets collection and stacking rewards
                                (coming)
                            </div>
                        </Row>
                        <Row>
                            <div className={"buttons d-flex"}>
                                <Button variant={"primary"} className={"plug"} onClick={connectPlug}>{plugFetching ?
                                    <SpinnerApp/> : <span>Connect Plug <img alt={"plug"} src={plug}/></span>}</Button>
                                <Button variant={"outline-primary"} className={"stoic"}
                                        onClick={connectStoic}>{stoicFetching ?
                                    <SpinnerApp/> :
                                    <span>Connect Stoic <img alt={"stoic"} src={stoic}/></span>}</Button>
                            </div>
                        </Row>
                        <Row>
                            <div className={"description d-flex"}>
                                <div className={"stats"}>
                                    <div className="stats_count">
                                        4.5k+
                                    </div>
                                    <div className="stats_text">
                                        Twitter
                                    </div>
                                </div>
                                <div className={"stats"}>
                                    <div className="stats_count">
                                        850+
                                    </div>
                                    <div className="stats_text">
                                        Unique holders
                                    </div>
                                </div>
                                <div className={"stats"}>
                                    <div className="stats_count">
                                        8k+
                                    </div>
                                    <div className="stats_text">
                                        Discord members
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Star_svg customClass={"star_left"} color={"#2CC0AF"} width={"26"} height={"30"}/>
                        <Circle_svg customClass={"circle_top"} color={"#2CC0AF"} width={"16"} height={"16"}/>
                        <Circle_svg customClass={"circle_bottom"} color={"#2CC0AF"} width={"21"} height={"21"}/>
                        <Circle_svg customClass={"circle_top_right"} color={"#CCFBF1"} width={"16"} height={"16"}/>
                        <Dot_svg customClass={"dot_bottom"}/>
                        <SmallFilter_home_svg customClass={"small_filter"}/>
                    </Col>
                    <Col xl={5} lg={5} md={5} className={"img_section"}>
                        <div className={"img_position"}>
                            <div className={"img_container"}>
                                <img
                                    src={img_1}
                                    alt={"view"}/>
                            </div>
                        </div>
                        <div className={"img_position"}>
                            <div className={"img_container"}>
                                <img
                                    src={img_2}
                                    alt={"view"}/>
                            </div>
                        </div>
                        <div className={"img_position"}>
                            <div className={"img_container"}>
                                <img
                                    src={img_3}
                                    alt={"view"}/>
                            </div>
                        </div>
                        <div className={"img_position"}>
                            <div className={"img_container"}>
                                <img
                                    src={img_4}
                                    alt={"view"}/>
                            </div>
                        </div>
                        <Star_svg customClass={"star_center"} color={"#EAB407"} width={"26"} height={"30"}/>
                        <Star_svg customClass={"star_right"} color={"#2CC0AF"} width={"26"} height={"30"}/>
                    </Col>
                    <BigFilter_home_svg customClass={"big_filter"}/>
                    <CircleFilter_home_svg customClass={"circle_filter"}/>
                </Row>
            </Container>
        </div>
    )
}

export default InfoBlock;