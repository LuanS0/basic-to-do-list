
"use client";
import ToDoList from "./components/ToDoList";
import ListContextProvider from "../ListContext";

export default function Home() {
  return <>
    <article className="flex flex-col items-center justify-start w-full h-full min-h-screen min-w-screen">
      <ListContextProvider>
        <ToDoList />
      </ListContextProvider>
    </article>
  </>
}
