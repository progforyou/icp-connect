import React from "react";
import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import icp_img from '../Assets/img/icp.png'
import Circle_svg from "../Svg/Circle_svg";
import CircleCard_svg from "../Svg/CircleCard_svg";
import DoorCard_svg from "../Svg/DoorCard_svg";
import PeopleCard_svg from "../Svg/PeopleCard_svg";
import robber from '../Assets/img/robber.png';

const CardItemConnect = (props) => {
    return (
        <Card>
            <Card.Body>
                <div className={"img_inner"}>
                    <CircleCard_svg customClass={"circle"}/>
                    <DoorCard_svg customClass={"img_icon"}/>
                </div>
                <Card.Title>
                    Connect
                </Card.Title>
                <Card.Text>
                    Connect your Stoic or Plug wallet and enter Pets Holders Hub
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const CardItemVerify = (props) => {
    return (
        <Card>
            <Card.Body>
                <div className={"img_inner"}>
                    <CircleCard_svg customClass={"circle"}/>
                    <PeopleCard_svg customClass={"img_icon"}/>
                </div>
                <Card.Title>
                    Verify
                </Card.Title>
                <Card.Text>
                    Enter your discord name and verify that you are Pets Holder. You will receive a special Discord role
                    automatically.
                    Your role will be removed
                    if you sell your pets.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const CardItemRewards = (props) => {
    return (
        <Card>
            <Card.Body>
                <div className={"img_inner"}>
                    <CircleCard_svg customClass={"circle"}/>
                    <div className={"img_icon"}>
                        <div className="img">
                            <img src={robber} alt="robber"/>
                        </div>
                    </div>
                </div>
                <Card.Title>
                    Rewards
                </Card.Title>
                <Card.Text>
                    Now you can check all your listed and delisted pets. PETS token and
                    staking are coming.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

const Benefits = () => {
    return (
        <Container id={'benefits_block'}>
            <Row>
                <Col>
                    <Row>
                        <div className={"d-flex"}>
                            <div className={"icp_img"}>
                                <img src={icp_img} alt={"icp"}/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className={"big_text"}>
                            Exclusively on the Internet Computer
                        </div>
                    </Row>
                    <Row>
                        <div className={"cards_inner"}>
                            <CardItemConnect/>
                            <CardItemVerify/>
                            <CardItemRewards/>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Benefits;