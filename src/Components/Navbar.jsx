import * as React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {BsTwitter, FaDiscord, RiEarthFill} from "react-icons/all";

const NavApp = (props) => {
    return (
        <Navbar className={"py-0"} expand={"md"} bg="light" variant="light" id={'navbar'}>
            <Container fluid className={"py-0"}>
                <Navbar.Brand href="#home"><Button className={"brand"} variant={"outline-primary"}>ICPets Holders
                    Hub</Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id={"navbar-nav"} className={"justify-content-end"}>
                    <Nav className={"py-0"}>
                        <Nav.Link href="#home" className={"menu_item"}>
                            <div className={"item"}><BsTwitter/> Twitter</div>
                        </Nav.Link>
                        <Nav.Link href="#features" className={"menu_item"}>
                            <div className={"item"}><FaDiscord/>Discord</div>
                        </Nav.Link>
                        <Nav.Link href="#pricing" className={"menu_item"}>
                            <div className={"item"}><RiEarthFill/>DSCVR</div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavApp;