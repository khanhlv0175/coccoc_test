import React, { useEffect, useMemo, useState } from "react";
import { GET_LIST_GIFT } from "../../constants/api";
import Pagination from "../common/Pagination";
import Card from "./Card";
import Filter from "./Filter";

interface GiftData {
    id: number;
    imageUrl: string;
    name: string;
    requiredPoints: number;
    activeTimeFrom: number;
    activeTimeTo: number;
}

function GiftExchange({ pageItem = 20 }) {
    const [dataGift, setDataGift] = useState([]) as any;
    const [currentPage, setCurrentPage] = useState(1);

    // Get data for current page
    const currentPageData = useMemo(() => {
        const firstPageIdx = (currentPage - 1) * pageItem;
        const lastPageIdx = firstPageIdx + pageItem;
        return dataGift.slice(firstPageIdx, lastPageIdx);
    }, [currentPage, dataGift]);

    // Get all data
    useEffect(() => {
        fetch(GET_LIST_GIFT)
            .then((res) => res.json())
            .then((data) => setDataGift([...data]))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="max-w-[110rem] flex flex-col mx-auto bg-white">
            <div className="mb-8">
                <Filter
                    data={dataGift}
                    filterList={[
                        "Tất cả",
                        "Voucher khuyến mại",
                        "Thẻ điện thoại",
                        "Quà tặng",
                    ]}
                />
            </div>
            <div className="flex flex-wrap gap-x-[3rem] gap-y-[3rem] min-h-[65vh] justify-center xl:justify-between">
                {currentPageData &&
                    currentPageData.length > 0 &&
                    currentPageData.map((gift: GiftData) => {
                        return (
                            <Card
                                key={gift.id}
                                coverImg={gift.imageUrl}
                                title={gift.name}
                                price={gift.requiredPoints}
                                validFrom={gift.activeTimeFrom}
                                validTo={gift.activeTimeTo}
                            />
                        );
                    })}
            </div>
            <Pagination
                className="pagination-bar flex justify-center mt-10 mb-20"
                currentPage={currentPage}
                totalCount={dataGift ? dataGift.length : 0}
                pageSize={pageItem}
                onPageChange={(page: number) => setCurrentPage(page)}
                siblingCount={1}
            />
        </div>
    );
}

export default GiftExchange;
