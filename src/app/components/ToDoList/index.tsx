import { useState } from "react";
import Forms from "../Form";
import List from "../List";
import ListContext from "@/ListContext";
import ListContextProvider from "@/ListContext";
import useList from "@/HookList";

const ToDoList = () => {
    const { implementsList } = useList();

    const handleImplementList = (itemName: string) => {
        implementsList(itemName);
    };

    return <Forms onSubmit={handleImplementList} />
};

export default ToDoList;