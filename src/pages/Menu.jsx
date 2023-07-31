import React from "react";
import { data } from '../data'
import '../styles/menu.css'
import MenuItem from "../Components/MenuItem"
const Menu = () => {
    return (

        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
                <div className="menuList">
                    {data.map((menuItem) => {
                        return <MenuItem key={menuItem.id} image={menuItem.image} name={menuItem.name} price={menuItem.price} />
                    })}

                </div>


    </div>
    )
}
export default Menu;