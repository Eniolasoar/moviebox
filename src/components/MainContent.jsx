import { useEffect, useState } from "react";
import Card from "./Card.jsx"
import "./MainContent.css"
import "./Loader.css";

let API_KEY='d6c287e55b74adf5812bec5fad23e8b0';
let url='https://api.themoviedb.org/3/movie/top_rated?api_key='+API_KEY;
let url2='https://api.themoviedb.org/3/movie/upcoming?api_key='+API_KEY;
function MainContent(){
    const [urlset,setUrl]=useState(url);
    const [urlset2,setUrl2]=useState(url2);
    const[movieData,setData]=useState([]);
    const[movieData2,setData2]=useState([]);
    const [error, setError] = useState(null);
    const [error2, setError2] = useState(null);
    const [movieNo,setMovieNo]=useState(12);
    const [loading,setLoading]=useState("true");
    const [movieNo2,setMovieNo2]=useState(12);
    const [loading2,setLoading2]=useState("true");

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
    const loadMovies2=(event)=>{
        event.preventDefault();
        setMovieNo2((movieNo2)=>movieNo2+4)
    }
    useEffect(()=>{
        fetch(url2)
        .then(response=>response.json())
        .then(data=>setData2(data.results))
        .then(data=>setLoading2("false"))
        .catch(error=>setError2(error.message))
    },[urlset2])

    
    
    return(
        <div className="mainContent">
            <div className="movieContainer">

            <div className="movieHeading">
                <h2>Top Rated <span className="siteColor">| Movies</span></h2>
                
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
      <div className="movieHeading">
                <h2>Upcoming <span className="siteColor"> | Movies</span></h2>
                
            </div>


            </div>
            
            {loading=="true"?<div className="loaderModal">
            <div className="spinner-3"></div>
        </div>:
        <div className="movieList">
        {error ? (
     <p style={myStyle}>{error+" movies from database. Reload Page"}</p>
   ) : 
        
        (movieData2.length === 0 ? (
         <p style={{ textAlign: "center" }}><i>"No movies found"</i></p>
         ) : (
         movieData2.slice(0,movieNo2).map((result, index) => (
          
             <Card info={result} key={index} />
         ))
         ))
     }
        </div>
        
    
        
    }
    {movieNo2!==20?<div className="links">
        <button onClick={(e)=>loadMovies2(e)}>Load More Movies</button>
         </div>:null}
           
        </div>
    )
}
export default MainContent;