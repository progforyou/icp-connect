import React from "react";
import {Pagination} from "react-bootstrap";

const casePaginator = (totalPages, currentPage, props) => {
    let newPages = [],
        prevPages = [],
        currentPages = [],
        lastPages = [];
    for (let i = 1; i <= totalPages; i++) {
        newPages.push(i);
    }
    if (totalPages === null || totalPages < 2) return []
    if (totalPages > 6) {
        prevPages = newPages.slice(0, 3);
        lastPages = newPages.slice(newPages.length - 3, newPages.length);
        if (currentPage === 3) {
            prevPages.push(4);
            newPages = [...prevPages, ...currentPages, '...', ...lastPages];
        } else if (currentPage === 4) {
            prevPages.push(4, 5);
            newPages = [...prevPages, ...currentPages, '...', ...lastPages];
        } else if (currentPage === newPages.length - 3) {
            lastPages.splice(0, 0, currentPage);
            lastPages.splice(0, 0, currentPage - 1);
            newPages = [...prevPages, ...currentPages, '...', ...lastPages];
        } else if (currentPage === newPages.length - 2) {
            lastPages.splice(0, 0, currentPage - 1);
            newPages = [...prevPages, ...currentPages, '...', ...lastPages];
        } else if (currentPage > 4 && currentPage < 6) {
            currentPages = newPages.slice(currentPage - 2, currentPage + 1);
            newPages = [...prevPages, ...currentPages, '...', ...lastPages];
        } else if (currentPage <= newPages.length && currentPage >= newPages.length - 3) {
            newPages = [...prevPages, '...', ...lastPages];
        } else if (currentPage < newPages.length - 3 && currentPage > newPages.length - 5) {
            currentPages = newPages.slice(currentPage - 2, currentPage + 1);
            newPages = [...prevPages, '...', ...currentPages, ...lastPages];
        } else if (currentPage >= 6 && currentPage <= newPages.length - 5) {
            currentPages = newPages.slice(currentPage - 2, currentPage + 1);
            newPages = [...prevPages, '...', ...currentPages, '...', ...lastPages];
        } else newPages = [...prevPages, ...currentPages, '...', ...lastPages];
    }
    newPages = newPages.map((el, id) => currentPage === el ?
        <PaginatorElem isActive number={el} id={id} {...props}/> :
        <PaginatorElem number={el} id={id} {...props}/>);
    if (currentPage !== 1) newPages.splice(0, 0, <PaginatorArrowPrev {...props} number={currentPage - 1}/>)
    else newPages.splice(0, 0, <PaginatorArrowPrev {...props} hidden number={currentPage - 1}/>)
    if (currentPage !== totalPages && totalPages) newPages.splice(newPages.length, 0, <PaginatorArrowNext {...props}
                                                                                                          number={currentPage + 1}/>)
    else newPages.splice(newPages.length, 0, <PaginatorArrowNext {...props} hidden
                                                                 number={currentPage + 1}/>)
    return newPages
}

const PaginatorElem = (props) => {
    const onClick = () => {
        props.onClick(props.number);
    }
    return (
        <Pagination.Item active={props.isActive} onClick={onClick}>{props.number}</Pagination.Item>
    )
}

const PaginatorArrowPrev = (props) => {
    const onClick = () => {
        props.onClick(props.currentPage - 1);
    }
    return (
        <Pagination.Prev className={"prev " + (props.hidden ? "hidden" : "")} onClick={onClick}/>
    )
}

const PaginatorArrowNext = (props) => {
    const onClick = () => {
        props.onClick(props.currentPage + 1);
    }
    return (
        <Pagination.Next className={"next " + (props.hidden ? "hidden" : "")} onClick={onClick}/>
    )
}

const Paginator = (props) => {
    const onClick = (page) => {
        return props.onClick(page);
    }

    return (
        <Pagination id={"pagination"}>
            {props.totalPages > 1 ?
                <>
                    <Pagination.First className={"first"} onClick={() => onClick(1)}>First</Pagination.First>
                    {casePaginator(props.totalPages, props.currentPage, props)}
                    <Pagination.Last className={"last"} onClick={() => onClick(props.totalPages)}>Last</Pagination.Last>
                </>
                : null}
        </Pagination>
    )
}

export default Paginator;