import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import GiftExchange from "./GiftExchange";

function Gift({ children }: any) {
    const tabList = [
        { title: "Đổi quà tặng", component: <GiftExchange /> },
        {
            title: "Vòng quay may mắn",
            component: (
                <div className="min-h-[65vh] text-center">
                    Page did not implemented
                </div>
            ),
            unread: true,
        },
    ];

    return (
        <div className="">
            <h3 className="pl-4 xl:pl-0 font-bold text-[1.8rem] max-w-[110rem] text-left text-greyscale-200 mb-8 flex mx-auto">
                Nhận quà tặng
            </h3>
            <Tab.Group>
                <Tab.List className=" pl-4 xl:pl-0 flex space-x-1 max-w-[110rem] bg-transparent mx-auto">
                    {tabList.map((tab, tabIdx) => (
                        <Tab className="relative bg-white h-[5rem] rounded-t-md">
                            {({ selected }) => {
                                if (selected) tab.unread = false;
                                return (
                                    <div className="flex relative px-4 py-2">
                                        <div
                                            className={`tab-btn py-2.5 leading-5 font-semibold  bg-white rounded-t-md ${
                                                selected
                                                    ? "text-primary"
                                                    : "text-greyscale-700"
                                            } `}
                                        >
                                            {tab.title}
                                        </div>
                                        {tab.unread && !selected ? (
                                            <div className="h-2 w-2 bg-red-400 rounded-lg ml-2" />
                                        ) : null}
                                    </div>
                                );
                            }}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="bg-white">
                    {tabList.map((tab, tabIdx) => (
                        <Tab.Panel key={tabIdx} className="p-10">
                            {tab.component}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default Gift;
