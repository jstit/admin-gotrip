const { useEffect } = require("react");
const { useState } = require("react");

const useTable = (value) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPage, setLimitPage] = useState(5);
    const [totalPage, setTotalpage] = useState(() => {
        return value.length;
    });

    const [searchFilter, setSearchFilter] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [searchValueAll, setSearchValueAll] = useState("");

    useEffect(() => {
        setTotalpage(Math.ceil(value.length / limitPage));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    useEffect(() => {
        const data = onSearch(value, searchValueAll, searchFilter);
        setTotalpage(Math.ceil(data.length / limitPage));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValueAll]);

    useEffect(() => {
        const data = onSearch(value, searchValueAll, searchFilter);
        setTotalpage(Math.ceil(data.length / limitPage));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    function onSearch(arr = [], keyWord, filter = searchFilter) {
        let data = [];
        for (const value of arr) {
            if (filter === "all") {
                for (const key in value) {
                    if (value[key].toLowerCase().includes(keyWord.toLowerCase())) {
                        data.push(value);
                        break;
                    }
                }
            } else {
                if (value[filter].toLowerCase().includes(keyWord.toLowerCase())) {
                    data.push(value);
                }
            }
        }

        return data;
    }

    function createData() {
        let data = value;
        if (searchValueAll) {
            data = onSearch(data, searchValueAll, searchFilter);
        }
        data = data.slice((currentPage - 1) * limitPage, currentPage * limitPage);
        if (!searchValueAll && searchValue) {
            data = onSearch(data, searchValue, searchFilter);
        }
        return data;
    }

    const onHandleCurrenPage = (value) => {
        setCurrentPage(value);
    };

    const onHandleLimitPage = (value) => {
        setLimitPage(value);
    };

    const onHandleSearchValue = (value, filter = "") => {
        if (filter) setSearchFilter(filter);
        setSearchValue(value);
    };

    const onHandleSearchValueAll = (value, filter = "") => {
        if (filter) setSearchFilter(filter);
        setSearchValueAll(value);
    };

    return {
        createData,
        totalPage,
        onHandleCurrenPage,
        onHandleLimitPage,
        onHandleSearchValue,
        onHandleSearchValueAll,
    };
};

export default useTable;
