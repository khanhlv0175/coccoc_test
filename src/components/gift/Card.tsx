import React from "react";
import PropTypes from "prop-types";
import { DATE_FORMAT_OPTION } from "../../constants";

interface CardProp {
    coverImg: string;
    title: string;
    price: number;
    validFrom: number;
    validTo: number;
}

function Card(props: CardProp) {
    function formatNumber(num: number) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function formatDate(num: number) {
        const date = new Date(num);
        const option = DATE_FORMAT_OPTION;
        return date.toLocaleDateString("vi-VN", option);
    }

    const formatedNum = formatNumber(props.price);
    const validFrom = formatDate(props.validFrom);
    const validTo = formatDate(props.validTo);

    return (
        <div className="flex flex-col rounded-[0.8rem] shadow w-[90%] max-h-[35rem] md:max-w-[40%] lg:max-w-[30%] xl:max-w-[25rem] max-w-[40rem]">
            <img
                src={props.coverImg}
                alt="cover"
                className="object-cover rounded-t-[inherit] h-[14.5rem] shrink-0"
            />
            <div className="content text-left px-[1.2rem] pt-[1.2rem] pb-[1.6rem] flex-1 flex flex-col">
                <h3 className="text-greyscale-100">{props.title}</h3>
                <div className="text-greyscale-400 text-[1.4rem]">
                    Hiệu lực: <span>{validFrom}</span> - <span>{validTo}</span>
                </div>
                <div className="flex gap-x-[0.2rem] mt-2 mb-4">
                    <p className="text-secondary">{formatedNum}</p>
                    <span className="icon-point"></span>
                </div>
                <div className="cursor-pointer text-secondary border-secondary border-2 py-[0.6rem] px-6 rounded-[0.8rem] w-[9rem] text-[1.4rem] mt-auto hover:bg-secondary hover:text-white transition-all">
                    Đổi quà
                </div>
            </div>
        </div>
    );
}

export default Card;
