import React from "react";
import {Container} from "react-bootstrap";
import InfoDash from "../Components/InfoDash";
import ListDash from "../Components/ListDash";
import {connectStoreon} from "storeon/react";
import controller from "../Controller/Controller";

export const _Dashboard = (props) => {
    const timerRef = React.useRef(null);
    const [load, setLoad] = React.useState(false);
    const loadPlug = async () => {
        return controller().getPlugData().then(r => {
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => loadPlug(), 1000);
        })
    }
    React.useEffect(() => {
        setLoad(true);
        switch (props.setup.type) {
            case "plug":
                loadPlug().then(r => {
                    setLoad(false);
                    timerRef.current = setTimeout(() => loadPlug(), 1000);
                })
        }
        setLoad(false);
        return () => clearTimeout(timerRef.current);
    }, [])
    if (load) return null;
    console.log(props.tokens.length);
    if (!props.tokens.length) window.location = '/';
    return (
        <Container className={"mb-5"}>
            <InfoDash {...props}/>
            <ListDash {...props}/>
        </Container>
    )
}

export const Dashboard = connectStoreon('tokens', 'setup', _Dashboard);