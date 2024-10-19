import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import classes from "./header.module.css"
import LowerHeader from './LowerHeader';



function Header() {
  return (
    <>
    <section>
        <div className={classes.header_container}>
                {/* logo */}
                <div className={classes.logo_container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />                
               </Link>
                  <div className={classes.delivery}>          
               {/* delivery */}
                <span>
                    {/* icon */}
                    <IoLocationOutline />
                </span>
                <div>
                    <p>Delivery to</p>
                    <span>Ethiopia</span>
                </div>
                </div>
            </div> 
            {/* search section*/}
            <div className={classes.search}>
                <select name="" id="">
                    <option value="">All</option>
                </select>
                {/* search bar */}
                <input type="text" name='' id='' placeholder='Search Amazon'/>
                {/* search icon */}
                <IoSearch size={25}/>
            </div>
            <div className={classes.order_container}>
                {/* right side links */}
                <Link to='' className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="United state flag" />
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                </Link>
                {/* three components */}
                <Link to="">
                        <p>Hello Sign In</p>
                        <span>Account & List</span>
                </Link>
                {/* orders */}
                <Link to="/orders">
                    <p>Return</p>
                    <span>& Orders</span>
                </Link>
                {/* cart */}
                <Link to='/cart' className={classes.cart}>
                    {/* icon */}
                    <BsCart2 size={35}/>
                    <span>0</span>
                </Link>
            </div>
        </div>
    </section>
    <LowerHeader />
    </>
  )
}

export default Header;