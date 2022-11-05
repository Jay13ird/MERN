import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const [searchType, setSearchType] = useState("people");
    const [searchId, setSearchId] = useState("");
    const navigate = useNavigate();


    const Search = (e) => {
        e.preventDefault();
        navigate(`/${searchType}/${searchId}`);
    }
    
    return (
        <div>
            <form action="">
                <label>Search for: </label>
                <select onChange={(e) => setSearchType(e.target.value)} name="searchType" id="searchType" value={searchType}>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                    <option value="starships">Starship</option>
                </select>
                <label>ID: </label>
                <input onChange={(e) => setSearchId(e.target.value)} type="number" name="apiID" id="apiID" value={searchId}/>
                <button onClick={Search}>Search</button>
            </form>
        </div>
    )
}

export default Form