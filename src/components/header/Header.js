import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://cdn-icons-png.flaticon.com/128/3223/3223000.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
                {/* <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Search</span></Link> */}
                <Link to="search/" style={{textDecoration: "none"}}><span>Search</span></Link>
            </div>
        </div>
    )
}

export default Header