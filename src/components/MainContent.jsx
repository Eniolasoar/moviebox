import { useEffect, useState } from "react";
import Card from "./Card.jsx"
import "./MainContent.css"
import "./Loader.css";

let API_KEY='d6c287e55b74adf5812bec5fad23e8b0';
let url='https://api.themoviedb.org/3/movie/top_rated?api_key='+API_KEY;
function MainContent(){
    const[movieData,setData]=useState([]);
    const [urlset,setUrl]=useState(url);
    const [error, setError] = useState(null);
    const [movieNo,setMovieNo]=useState(12);
    const [loading,setLoading]=useState("true");


    const myStyle={
            textAlign: "center",
    width: "700px",
    fontSize: "30px",
    backgroundColor: "red",
    padding: "10px",
    color: "white"
}
    

    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>setData(data.results))
        .then(data=>setLoading("false"))
        .catch(error=>setError(error.message))
    },[urlset])

    const loadMovies=(event)=>{
        event.preventDefault();
        setMovieNo((movieNo)=>movieNo+4)
    }


    
    return(
        <div className="mainContent">
            <div className="movieHeading">
                <h2>Featured Movie</h2>
                
            </div>
            {loading=="true"?<div className="loaderModal">
            <div className="spinner-3"></div>
        </div>:
        <div className="movieList">
        {error ? (
     <p style={myStyle}>{error+" movies from database. Reload Page"}</p>
   ) : 
        
        (movieData.length === 0 ? (
         <p style={{ textAlign: "center" }}><i>"No movies found"</i></p>
         ) : (
         movieData.slice(0,movieNo).map((result, index) => (
          
             <Card info={result} key={index} />
         ))
         ))
     }
        </div>
        
    
        
    }
    {movieNo!==20?<div className="links">
        <button onClick={(e)=>loadMovies(e)}>Load More Movies</button>
         </div>:null}
           
        </div>
    )
}
export default MainContent;