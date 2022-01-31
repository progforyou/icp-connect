import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {connectStoreon} from "storeon/react";
import Controller from "../Controller/Controller";
import {ICPPriceCard, NFTCountCard, NNSCard, PETSCard} from "./CardsDash";
import {NotificationManager} from "react-notifications";
import {SpinnerApp} from "./SpinnerApp";
import CircleButton_svg from "../Svg/CircleButton_svg";


const _InfoDash = (props) => {
    const [tokesCount, setTokesCount] = React.useState(0);
    const [name, setName] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [discriminator, setDiscriminator] = React.useState("");
    const [isError, setIsError] = React.useState(false);
    let hidden = props.tokens.length ? "" : "hidden";
    const onSubmit = () => {
        setLoading(true);
        Controller().addRole(name, discriminator)
            .then(r => {
                NotificationManager.success('User updated!');
            })
            .catch(e => {
                if (e.response) {
                    if (e.response.status === 400) {
                        NotificationManager.success('User updated!');
                        console.log(e.response.data.data);
                        props.dispatch('setup/verify', e.response.data.data);
                    }
                    else {
                        NotificationManager.error(e.response.data.message.toString());
                    }
                } else {
                    NotificationManager.error(e.toString());
                }
            })
            .finally(r => {
                setLoading(false);
            });
    }
    React.useEffect(() => {
        let count = 0;
        if (props.tokens) props.tokens.map(token => {
            if (token) count += token.collections.length;
        })
        setTokesCount(count);
    }, [props.tokens])
    return (
        <Row id={"info_dash"}>
            <Col>
                <Row className={"cards_section"}>
                    <div className={"cards_inner"}>
                        <ICPPriceCard data={props.icp_price}/>
                        <NNSCard data={props.nns_stats}/>
                        <NFTCountCard count={tokesCount}/>
                        <PETSCard header={"PETS Token"}/>
                    </div>
                </Row>
                {/*#TODO already verify*/}
                {/*{props.verify ? <div>You already {props.verify.user.name} verify!</div> :*/}
                    <Row className={"discord_section " + hidden}>
                        <Col xl={6} lg={6} xs={12} className={"discord_inner"}>
                            <Row className={"discord_text"}>
                                <p>Enter your Discord name <span>(#name)</span> and get a special Pets Holders Role!</p>
                            </Row>
                            <Row className={"discord_href"}>
                                <div className={"d-flex"}>
                                    <span>Read more info</span>
                                    <CircleButton_svg customClass={"discord_href_svg"}/>
                                </div>
                            </Row>
                        </Col>
                        <Col xl={6} lg={6} xs={12} className={"discord_form"}>
                            <Row className={"my-auto"}>
                                <Col>
                                    <Row className={"input_inner"}>
                                        <div className={"form_inner"}>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formName">
                                                    <Form.Control type="text" placeholder="Your Discord Name"
                                                                  value={name} className={isError ? "error" : ""}
                                                                  onBlur={() => name.length ? setIsError(false) : setIsError(true)}
                                                                  onChange={(e) => {
                                                                      if (e.target.value) setIsError(false)
                                                                      else setIsError(true)
                                                                      setName(e.target.value)
                                                                  }}/>
                                                    <Form.Control type="text" placeholder="#"
                                                                  className={"discriminator"} value={discriminator}
                                                                  onChange={(e) => setDiscriminator(e.target.value)}/>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                    </Row>
                                    <Row className={"btn_inner"}>
                                        <div>
                                            <Button variant={"primary"} onClick={onSubmit} disabled={isError}>
                                                {loading ? <SpinnerApp/> : "Verify"}
                                            </Button>
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

export default connectStoreon('tokens', 'nns_stats', _InfoDash);