import "./Header.css"
function NavBar(){
    return(
        <nav>
            <div className="nav-left">
                <img src="/Icons/tv.png" alt="" className="logo"/>
                <p>MovieBox</p>
            </div>
            <div className="input-container">
                <input type="text" placeholder="What do you want to watch?"/>
                <img src="/Icons/search.png" alt=""/>
            </div>
            <div className="nav-right">
           
                <div className="menu">
                    <img src="/Icons/Menu alt 4.svg" alt="" />
                </div>

            </div>
    </nav>
    )
}
export default NavBar;