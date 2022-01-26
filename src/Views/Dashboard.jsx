import React from "react";
import {Container} from "react-bootstrap";
import InfoDash from "../Components/InfoDash";
import ListDash from "../Components/ListDash";
import {connectStoreon} from "storeon/react";
import controller from "../Controller/Controller";
import {NotificationManager} from "react-notifications";

export const _Dashboard = (props) => {
    const timerRef = React.useRef(null);
    const [load, setLoad] = React.useState(false);
    const loadPlug = async () => {
        return await controller().getPlugData();
    }
    const loadStoic = async () => {
        return await controller().getStoicData();
    }
    const loadICPprice = async () => {
        return await controller().getICPtoUSD();
    }
    const loadAll = async () => {
        switch (props.setup.type) {
            case "plug":
                await loadPlug()
                break;
            case "stoic":
                await loadStoic()
                break;
        }
        await loadICPprice();
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => loadAll(), 2000);
        return true;
    }
    const loadOne = async () => {
        try {
            let data = await controller().checkDiscordStatus();
            props.dispatch('setup/verify', data);
        } catch (e) {
            props.dispatch('setup/verify', {});
            return null;
        }
    }
    React.useEffect(() => {
        setLoad(true);
        const init = async () => {
            try {
                await loadOne();
                await loadAll();
                setLoad(false);
                if (timerRef.current) clearTimeout(timerRef.current);
                timerRef.current = setTimeout(() => loadAll(), 2000);
            } catch (e) {
                setLoad(false);
                NotificationManager.error(e.toString());
                /*window.location = '/';*/
            }
        }
        init();
        return () => clearTimeout(timerRef.current);
    }, [])
    
    if (load) return null;
    if (!props.tokens.length) window.location = '/';
    return (
        <Container className={"mb-5"}>
            <InfoDash {...props} verify={props.setup.verify}/>
            <ListDash {...props}/>
        </Container>
    )
}

export const Dashboard = connectStoreon('tokens', 'setup', 'icp_price', _Dashboard);