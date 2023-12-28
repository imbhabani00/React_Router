import React from "react";
import './Navbar.css';
import {NavLink ,Outlet ,} from "react-router-dom";
const Navbar = () => {
    return (<>
        <div className="Links">
            <NavLink style={({isActive})=>isActive?{color:"red"}:undefined} to='/'>Home</NavLink>
            <NavLink style={({isActive})=>isActive?{color:"red"}:undefined} to="/about">About</NavLink>
            <NavLink style={({isActive})=>isActive?{color:"red"}:undefined} to="/items">Items</NavLink>
        </div>
        <Outlet/>
    </>)
}
export default Navbar;