import React, { useEffect ,useState} from 'react';
import Card from "./Card.jsx"
import { useParams } from 'react-router-dom';
import './Search.css'
import NavBar from "./NavBar";

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const {query}=useParams();


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query.toLowerCase()}&api_key=d6c287e55b74adf5812bec5fad23e8b0`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data.results))
        .catch((error) => setError(error.message));
    })

    
    return (
        <>
        <NavBar/>
        <div className="search-container">
            <h1>Search Results For:</h1>
            <p className="query">{query}</p>

            <div className="searchList">

                {searchResults.length == 0 ?<p className='noMovies'>No Movies Found.<br></br>Try Another Search Term</p>:searchResults.map((movie, index) => (
                <Card info={movie} key={index} />
            ))}
            
            </div>
        </div>

        </>
    );
}

export default Search;