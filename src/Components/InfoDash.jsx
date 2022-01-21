import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {connectStoreon} from "storeon/react";
import Controller from "../Controller/Controller";
import {ICPPriceCard, NFTCountCard, NNSCard, PETSCard} from "./CardsDash";


const _InfoDash = (props) => {
    const [tokesCount, setTokesCount] = React.useState(0);
    const [name, setName] = React.useState("");
    let hidden = props.tokens.length ? "" : "hidden";
    const onSubmit = () => {
        Controller().loginDiscord();
        /*if (!Verification.name){
            Verification[name] = true;
            fs.writeFile("../Data/Verification.json", Verification, (e) => {
                console.log(e);
            })
        }*/
    }
    React.useEffect(() => {
        let count = 0;
        if (props.tokens) props.tokens.map(token => {
            count += token.collections.length;
        })
        setTokesCount(count);
    }, [props.tokens])
    return (
        <Row id={"info_dash"}>
            <Col>
                <Row className={"cards_section"}>
                    <div className={"cards_inner"}>
                        <ICPPriceCard data={props.icp_price}/>
                        <NNSCard />
                        <NFTCountCard count={tokesCount}/>
                        <PETSCard header={"PETS Token"}/>
                    </div>
                </Row>
                <Row className={"discord_section " + hidden}>
                    <Col xl={6} lg={6} xs={12} className={"discord_inner"}>
                        <Row className={"discord_text"}>
                            <p>Enter your Discord name (#name) and get a special <b>Pets Holders Role!</b></p>
                        </Row>
                        <Row className={"discord_href"}>
                            <a href="#qwe">Read more info</a>
                        </Row>
                    </Col>
                    <Col xl={6} lg={6} xs={12} className={"discord_form"}>
                        <Row className={"m-auto"}>
                            <Col>
                                <Row className={"input_inner"}>
                                    <div>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formName">
                                                <Form.Control type="text" placeholder="Your Discord Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Row>
                                <Row className={"btn_inner"}>
                                    <div>
                                        <Button variant={"primary"} onClick={onSubmit}>Verify</Button>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default connectStoreon('tokens', _InfoDash);