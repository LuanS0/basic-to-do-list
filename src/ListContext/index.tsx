"use client";
import List from "@/app/components/List";
import { createContext, useState } from "react";

type ListType = {
    items: { id: number, name: string };
}

type ListContextType = {
    list: IItem[] | undefined;
    implementsList: (item: string) => void;
    deleteItem: (item: IItem) => void;
};


type ListContextProviderType = {
    children: React.ReactNode;
}

export const ListContext = createContext<ListContextType | undefined>(undefined);

const ListContextProvider = ({ children }: ListContextProviderType) => {
    const [list, setList] = useState<IItem[]>([]); // Initialize with an empty array

    const implementsList = (itemName: string) => {
        const newItem: IItem = { id: (list.length || 0) + 1, name: itemName };
        setList(existenceList => [...(existenceList || []), newItem]);
    };

    const deleteItem = (delItem: IItem) => {
        const updatedList: IItem[] | undefined = list?.filter((item) => item.id !== delItem.id);
        updatedList && setList(updatedList);
    };

    return (
        <>
            <ListContext.Provider value={{ list, deleteItem, implementsList }}>
                {children}
                <List />
            </ListContext.Provider>
        </>
    );
};

export default ListContextProvider;
