import React from "react";
import {Pagination} from "react-bootstrap";

const Paginator = () => {
    return (
        <Pagination id={"pagination"}>
            <Pagination.Prev/>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis/>

            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Next/>
        </Pagination>
    )
}

export default Paginator;