import { useState } from "react";

type props = {
    onSubmit: (itemName: string) => void; 
}

const Forms = ({onSubmit}: props) => {

    const [currentItemName, setCurrentItemName] = useState<string>('');
    
    const handleChangeCurrentItem = (item: string) => {
        setCurrentItemName(item);
    }
    
    const handleSubmitCurrentItem = () => {
        currentItemName && onSubmit(currentItemName);
        setCurrentItemName('');
    };

    return (<>
        <form className="flex flex-col mt-8">
            <label htmlFor="item">Item:</label>
            <input className="text-gray-900 rounded-md mt-2 p-2" type="text" id="item" value={currentItemName} onChange={(e) => handleChangeCurrentItem(e.target.value)} />
            <button className="bg-slate-500 mt-3 rounded-md p-2" type="button" onClick={handleSubmitCurrentItem}>Adicionar Item</button>
        </form>

    </>)
}

export default Forms;