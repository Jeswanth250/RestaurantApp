import React,{useState} from 'react'
import img from '../assets/burgerlogo.png'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';


function Navbar() {
  const[openLinks,setOpenLinks]=useState(false);
  const toogleNavbar=()=>{
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks?"open":"close"}>
        <img src={img} alt="burger" />

        <div className='hiddenLinks'>
          <Link to="/home" >Home</Link>
          <Link to="/menu" >Menu</Link>
          <Link to="/aboutus" >About us</Link>
          <Link to="/contact">Contact us</Link>
          <button onClick={toogleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/home" >Home</Link>
        <Link to="/menu" >Menu</Link>
        <Link to="/aboutus" >About us</Link>
        <Link to="/contact">Contact us</Link>

      </div>
    </div>
  )
}

export default Navbar