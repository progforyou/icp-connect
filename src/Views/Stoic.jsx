import React from "react";
import {CircularProgress} from "@mui/material";
import NFTCard from "../Card";

export const StoicView = (props) => {
    return (
        <div>
            Stoic balance:
            <div>
                {props.fetching ?
                    <CircularProgress/> :
                    <>
                        {props.data ? props.data.map((item, key) => (
                            <NFTCard token={item} key={key}/>
                        )) : <div>null</div>}
                    </>
                }
            </div>
        </div>
    )
}