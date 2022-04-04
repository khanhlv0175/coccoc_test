import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { GET_LIST_GIFT } from "../../constants/api";
import GiftExchange from "./GiftExchange";

function Gift({ children }: any) {
    // const giftExchange = useRef(<GiftExchange />);
    // const abc = useMemo(() => <GiftExchange />, []);
    // const [selectedIndex, setSelectedIndex] = useState(0);
    const [dataGift, setDataGift] = useState([]) as any;

    // Get all data
    useEffect(() => {
        fetch(GET_LIST_GIFT)
            .then((res) => res.json())
            .then((data) => setDataGift([...data]))
            .catch((err) => console.log(err));
    }, []);

    const tabList = [
        // { title: "Đổi quà tặng", component: giftExchange },
        {
            title: "Đổi quà tặng",
            component: <GiftExchange dataGift={dataGift} />,
        },
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
                        <Tab.Panel key={tabIdx.toString()} className="p-10">
                            {({ selected }) => {
                                console.log(selected);
                            }}
                            {tab.component}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default Gift;
