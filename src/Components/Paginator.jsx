import React from "react";
import {Pagination} from "react-bootstrap";

const Paginator = () => {
    return (
        <Pagination id={"pagination"}>
            <Pagination.First className={"first"}>First</Pagination.First>
            <Pagination.Prev className={"prev"}/>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis disabled/>

            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Next className={"next"}/>
            <Pagination.Last className={"last"}>Last</Pagination.Last>
        </Pagination>
    )
}

export default Paginator;