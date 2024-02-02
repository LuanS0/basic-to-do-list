

type Props = {
    items: string[];
};

const List = ({ items }: Props) => {
    return (<>
        <article>
            { items && items.map( (item, key) => <div key={key} className=""><p>{item}</p><span>X</span></div> )}
        </article>
    </>);
}

export default List;