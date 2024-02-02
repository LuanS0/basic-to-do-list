"use client";
import Image from "next/image";
import List from "./components/List";
import { useState } from "react";

export default function Home() {
  const [list, setList] = useState<string[]>(['a', 'b', 'c', 'd']);
  const [currentItem, setCurrentItem] = useState('');

  const handleNewItem = () => {
    setList((existenceItem) => [...existenceItem, currentItem]);
  };

  const handleCurrentItem = (item: string) => {
    setCurrentItem(item);
  };

  return (<>
    <form className="">
      <label htmlFor="item">Item:</label>
      <input className="" type="text" id="item" value={currentItem} onChange={(e) => handleCurrentItem(e.target.value)}/>
      <button type="button" onClick={handleNewItem}>Adicionar Item</button>
    </form>
    <List items={list}/>
    
  </>);
}
