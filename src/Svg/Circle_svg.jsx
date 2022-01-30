import React from "react";

export default (props) => {
    return (
        <svg className={props.customClass} width={props.width} height={props.height} viewBox="0 0 16 16" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="8" fill={props.color}/>
        </svg>

    )
}