import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination";
import "../../styles/pagination.scss";
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

interface PropPaging {
    totalCount: number;
    onPageChange: any;
    siblingCount?: number;
    currentPage: number;
    pageSize: number;
    className: string;
}

function Pagination(props: PropPaging) {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });
    if (!paginationRange) return null;
    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames("pagination-container", {
                [className]: className,
            })}
        >
            {/* Left navigation arrow */}
            <li
                className={classnames("pagination-item", {
                    disabled: currentPage === 1,
                })}
                onClick={onPrevious}
            >
                <ChevronDoubleLeftIcon className="w-6 h-6" />
            </li>
            {paginationRange.map((pageNumber) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li key={pageNumber} className="pagination-item dots">
                            &#8230;
                        </li>
                    );
                }

                // Render our Page Pills
                return (
                    <li
                        className={classnames("pagination-item", {
                            selected: pageNumber === currentPage,
                        })}
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={classnames("pagination-item", {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <ChevronDoubleRightIcon className="w-6 h-6" />
            </li>
        </ul>
    );
}

export default Pagination;
