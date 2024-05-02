import { useNavigate } from "react-router-dom";
import "./Header.css"
function NavBar(){
    const navigate=useNavigate();
    const home=()=>{
        navigate("/");
    }
    return(
        <nav>
            <div className="nav-left">
                <img src="/Icons/tv.png" alt="" className="logo" onClick={home}/>
                <p>MovieBox</p>
            </div>
            <div className="input-container">
                <input type="text" placeholder="What do you want to watch?"/>
                <img src="/Icons/search.png" alt=""/>
            </div>
            
    </nav>
    )
}
export default NavBar;