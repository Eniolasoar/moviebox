import {React,useEffect,useState,useRef} from 'react'
import './Header.css'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom';

function Header(){
    let API_KEY='d6c287e55b74adf5812bec5fad23e8b0';
let url='https://api.themoviedb.org/3/movie/popular?api_key='+API_KEY;

const[movieData,setData]=useState([]);
const [loading,setLoading]=useState("true");
const [error, setError] = useState(null);
const [urlset,setUrl]=useState(url);

const [slideIndex, setSlideIndex] = useState(0);
const [moviesToRemove, setMoviesToRemove] = useState(["653346","1093995"]);

// useEffect(()=>{
//     let i;
//     let slides=document.getElementsByClassName("mySlides");
//     for(i=0;i<slides.length;i++){
//         slides[i].style.display="none";
//     }
//     setSlideIndex((slideIndex)=>slideIndex+1);
//     if(slideIndex > slides.length){
//         setSlideIndex(1);
//     }
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000); 
// })
const timeoutRef = useRef(null);
useEffect(() => {
    if (movieData.length === 0) return;

    const slideShow = () => {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        setSlideIndex((prevIndex) => {
            let nextIndex = prevIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            slides[nextIndex].style.display = "block";
            return nextIndex;
        });
    };

    timeoutRef.current = setInterval(slideShow, 7000);

    return () => {
        clearInterval(timeoutRef.current);
    };
}, [movieData]);


let image_path="https://image.tmdb.org/t/p/w500";


useEffect(()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data=>setData(data.results))
    .then(data=>setLoading("false"))
    .catch(error=>setError(error.message))
},[urlset])

const getFirstTwoSentences = (text) => {
    const sentences = text.split('.').filter(sentence => sentence.trim().length > 0);
    const firstTwoSentences = sentences.slice(0, 2).map(sentence => sentence.trim() + '.');
    return firstTwoSentences;
};
const filteredMovieData = moviesToRemove.length > 0
? movieData.filter(movie => !moviesToRemove.includes(movie.id))
: movieData;

const navigate=useNavigate();
  const goToMovie = (cardId) => {
    navigate(`/movies/${cardId}`);
  };
    return(
        <>
            <section className="header">
               
               {filteredMovieData.slice(10,20).map((movie,index)=>{
                const firstTwoSentences = getFirstTwoSentences(movie.overview);

                return(
                 <div className="mySlides fade" key={index}>
                 <img src={image_path+movie.poster_path} width={"100%"} className='cover'/>

                <div className="slideInfo">


                 <div className="text">
                     <h1>{movie.title}</h1>
                     <div className="rating">
                         <div className="imdb2">
                             <img src="/Icons/IMDB.png" alt=""/>
                             {movie.vote_average}/10
                         </div>
                         <div className="rottenTomatoes2">
                             <img src="/Icons/tomato.png" alt="" />
                             {Math.round(movie.vote_average * 10)}%
                             
                         </div>
                     </div>
                     <p className="paragraph"> {firstTwoSentences.join(' ')}</p>
                     
                     <button onClick={()=>goToMovie(movie.id)}>
                         <img src="/Icons/play.png" alt=""/>

                         <p>FULL DETAILS</p>
                     </button>
                 </div>

                 <div className='poster'>
                 <img src={image_path+movie.poster_path} className='posterImage'/>
                 </div>
                </div>
 
                 <NavBar/>
                 <button onClick={()=>goToMovie(movie.id)} className='mobileBtn'>
                         <img src="/Icons/play.png" alt=""/>

                         <p>FULL DETAILS</p>
                     </button>
                </div>
)})}

              
                
                </section>
        </>
    )
    
}
export default Header