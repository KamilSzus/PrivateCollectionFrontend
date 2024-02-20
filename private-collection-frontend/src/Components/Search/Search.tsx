import { ChangeEvent, useState, MouseEvent, SyntheticEvent } from "react"

interface SearchProps { }

const Search: React.FC<SearchProps> = (props: SearchProps): JSX.Element => {

    const [search, setSearch] = useState<string>("");

    const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (e: SyntheticEvent) => {
        console.log(e);
    }

    return (
        <div>
            <input value={search} onChange={e => handleEvent(e)} />
            <button onClick={e=>onClick(e)} />
        </div>
    )
}

export default Search