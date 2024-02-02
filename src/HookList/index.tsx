import { ListContext } from "@/ListContext";
import { useContext } from "react";

const useList = () => {
    const context = useContext(ListContext);

    if (!context) {
        throw new Error('useList must be used within the ListProvider');
    }

    return context;
};

export default useList;