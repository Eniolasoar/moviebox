import { useNavigate } from "react-router-dom";
import "./Header.css"
import { useState } from "react";
function NavBar(){
    const navigate=useNavigate();
    const home=()=>{
        navigate("/");
    }
    const [query, setQuery] = useState("");
    const search=()=>{
        navigate(`/search/${query}`);
    }
    const [isfocus,setIsFocus]=useState(false);
    return(
        <nav>
            <div className="nav-left">
                <img src="/Icons/tv.png" alt="" className="logo" onClick={home} width={50}/>
                <p>MovieBox</p>
            </div>
            <div className="input-container">
                <input type="text" placeholder="What do you want to watch?" onFocus={()=>setIsFocus(true)} value={query} onChange={(e)=>setQuery(e.target.value)}/>
                
                <img src="/Icons/search.png" alt="" style={{ background: isfocus ? " #be123c" : "none", }} onClick={search}/>
            </div>
            
    </nav>
    )
}
export default NavBar;