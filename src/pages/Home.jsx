import React from "react";
import { Link } from "react-router-dom";
import '../styles/home.css'
const Home = () => {
    return (
        <div className="home">
            <div className="headerContainer" >
                <h1>Boom Burger</h1>
                <p>BURGER BURNS YOUR HEART</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>

        </div>
    )
}
export default Home;