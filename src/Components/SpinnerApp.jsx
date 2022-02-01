import React from "react";
import {Spinner} from "react-bootstrap";

export const SpinnerApp = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}