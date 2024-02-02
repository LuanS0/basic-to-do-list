import useList from "@/HookList";

const List = () => {
    const { list, deleteItem } = useList();

    const handleDeleteItem = (item: IItem) => {
        deleteItem(item);
    }

    return (
        <>
            {list && list.length > 0 && (
                <article className="bg-gray-200 p-4 rounded-md">
                    {list.map((item) => (
                        <div key={item.id} className="flex items-center justify-between mb-2 p-2 bg-white rounded-md">
                            <p className="text-gray-800">{item.name}</p>
                            <span
                                onClick={() => handleDeleteItem(item)}
                                className="ml-2 cursor-pointer text-red-500 hover:text-red-700"
                            >
                                X
                            </span>
                        </div>
                    ))}
                </article>
            )}
        </>
    );
}

export default List;
