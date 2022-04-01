import React from "react";

function Footer() {
    const logo = "/coccoc_logo.svg";
    return (
        <div className="bg-[#141515] min-h-[15rem] py-10 px-4">
            <div className="max-w-[110rem] mx-auto flex flex-wrap flex-col gap-y-6 md:gap-y-0 md:flex-row pl-4 md:pl-0">
                <div className="md:w-[50%] order-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex gap-x-[1.6rem] float-right md:w-[50%] md:justify-end order-3 md:order-2">
                    <span className="icon-linkedln cursor-pointer"></span>
                    <span className="icon-facebook cursor-pointer"></span>
                    <span className="icon-instagram cursor-pointer"></span>
                    <span className="icon-youtube cursor-pointer"></span>
                    <span className="icon-subtract cursor-pointer"></span>
                </div>
                <div className="bg-[#2A2B2B] w-full h-[0.1rem] md:mt-[2rem] md:mb-[1.2rem] order-4 md:order-3"></div>
                <p className="text-greyscale-400 md:min-w-[50%] order-5 md:order-4">
                    <span>&copy;</span>2021. Bản quyền thuộc về Công ty TNHH Cốc
                    Cốc.
                </p>
                <div className="flex text-greyscale-600 gap-x-[2rem] md:ml-4 flex-1 md:max-w-[50%] md:justify-end order-2 md:order-5">
                    <p className="cursor-pointer">Điều khoản sử dụng</p>
                    <p className="cursor-pointer">Chính sách bảo mật</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
