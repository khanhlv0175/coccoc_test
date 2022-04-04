import { Listbox, Popover, Transition } from "@headlessui/react";
import { FilterIcon } from "@heroicons/react/outline";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { Fragment, useState } from "react";

const sortList = [
    { id: 1, name: "Phổ biến" },
    { id: 2, name: "Giá tăng dần" },
    { id: 3, name: "Giá giảm dần" },
    { id: 4, name: "Thời gian hiệu lực tăng dần" },
    { id: 5, name: "Thời gian hiệu lực giảm dần" },
];

function Filter(props: { data: []; filterList: string[] }) {
    const [selectedSort, setSelectedSort] = useState(sortList[0]);

    const checkList = (
        <div className="flex lg:gap-x-[2.6rem] flex-col lg:flex-row items-start">
            {props.filterList.map((filter: string) => {
                return (
                    <div key={filter} className="flex items-center">
                        <input
                            type="checkbox"
                            id={filter}
                            className="opacity-0 absolute h-6 w-6 cursor-pointer"
                        />
                        <div className="bg-white border-2 rounded-md border-greyscale-300 w-6 h-6 flex flex-shrink-0 justify-center items-center">
                            <CheckIcon className="text-white h-6 w-6 pointer-events-none" />
                        </div>
                        <label
                            htmlFor={filter}
                            className="text-greyscale-300 text-[1.4rem] ml-2 cursor-pointer"
                        >
                            {filter}
                        </label>
                    </div>
                );
            })}
        </div>
    );

    const sortCondition = (
        <div className="w-[20rem] lg:w-[28rem] text-[1.4rem] flex lg:ml-auto ring-transparent">
            <Listbox value={selectedSort} onChange={setSelectedSort}>
                <div className="relative mt-1 w-full">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left text-greyscale-500 bg-white border-greyscale-500 border-[0.1rem] rounded-lg shadow-md cursor-default">
                        <span className="block truncate">
                            {`Sắp xếp theo: ${selectedSort.name}`}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDownIcon className="w-8 h-8" aria-hidden />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full mt-1 overflow-auto bg-white rounded-xl shadow-lg max-h-96 border-[0.1rem] border-greyscale-600">
                            {sortList.map((sort, idx) => (
                                <Listbox.Option
                                    value={sort}
                                    key={idx}
                                    className={({ active }) =>
                                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                            active
                                                ? "text-amber-900 bg-amber-100"
                                                : "text-greyscale-500"
                                        }`
                                    }
                                >
                                    {({ selected }) => {
                                        return (
                                            <>
                                                <span
                                                    className={`block truncate text-left ${
                                                        selected
                                                            ? "font-semibold"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {sort.name}
                                                </span>
                                                {selected && (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <CheckIcon
                                                            className="w-6 h-6"
                                                            aria-hidden
                                                        />
                                                    </span>
                                                )}
                                            </>
                                        );
                                    }}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );

    return (
        <div className="flex flex-col lg:flex-row relative">
            <Popover className="relative lg:hidden w-[30rem]">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`${
                                open ? "" : "text-opacity-90"
                            } text-greyscale-400 px-3 py-2 rounded-lg inline-flex cursor-pointer relative left-0`}
                        >
                            <FilterIcon className="w-10 h-10 mr-4" />
                            <label>Bộ lọc</label>
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
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm mt-1 left-1/2 -translate-x-1/4">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                                    <div className="relative grid gap-8 bg-[#ddd] rounded-[inherit] bg-opacity-90 p-7">
                                        {checkList}
                                        {sortCondition}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
            <div className="hidden lg:flex px-6 py-8 lg:p-0 lg:flex-row w-[30rem] bg-white bg-opacity-80 lg:bg-opacity-0 backdrop-blur-sm absolute lg:relative lg:w-full rounded-lg shadow-lg lg:shadow-none lg:rounded-none lg:items-center">
                {checkList}
                {sortCondition}
            </div>
        </div>
    );
}

export default Filter;
