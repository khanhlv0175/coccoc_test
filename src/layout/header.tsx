import React, { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
function Header() {
    const logo = "/coccoc_logo.svg";

    const menuList = [
        { name: "Nhận quà tặng", link: "/" },
        { name: "Nhận điểm thưởng", link: "#" },
        { name: "Xếp hạng", link: "#" },
        { name: "Câu hỏi thường gặp", link: "#" },
    ];

    const menu = (
        <div className="flex flex-col px-4 lg:px-0 py-6 lg:py-0 bg-white lg:flex-row gap-y-[2.4rem] lg:gap-y-0 lg:gap-x-[2.4rem] text-greyscale-400">
            {menuList.map((item, idx) => (
                <a
                    href={item.link}
                    className={`font-normal ${
                        idx === 0 ? "text-primary" : null
                    }`}
                >
                    {item.name}
                </a>
            ))}
            <div className="flex gap-x-[0.2rem]">
                <img
                    src="/images/Avatar.png"
                    alt="user"
                    className="w-[2.4rem] h-[2.4rem] shrink-0"
                />
                <p className="font-semibold">Huy Thắng</p>
                <p>-</p>
                <div className="flex gap-x-[0.2rem]">
                    <p className="text-supporting">1.250</p>
                    <span className="icon-point"></span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white h-[9rem] flex items-center justify-between lg:justify-center ">
            <div className="max-w-[110rem] relative flex items-end justify-between w-[100%] pl-4 xl:pl-0">
                <img src={logo} alt="Coc coc" className="inline-block" />
                <div className="hidden lg:inline-block">{menu}</div>
                <div className="relative lg:hidden">
                    <Popover className="relative h-10">
                        <Popover.Button>
                            <MenuIcon className="w-10 h-10 text-greyscale-400" />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm bg-white mt-2 right-0">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <div className="relative">{menu}</div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                </div>
            </div>
        </div>
    );
}

export default Header;
