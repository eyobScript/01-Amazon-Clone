import React from 'react'
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
                <a href="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />                
               </a>
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
                <a href='' className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="United state flag" />
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                </a>
                {/* three components */}
                <a href="">
                        <p>Hello Sign In</p>
                        <span>Account & List</span>
                </a>
                {/* orders */}
                <a href="">
                    <p>Return</p>
                    <span>& Orders</span>
                </a>
                {/* cart */}
                <a href='' className={classes.cart}>
                    {/* icon */}
                    <BsCart2 size={35}/>
                    <span>0</span>
                </a>
            </div>
        </div>
    </section>
    <LowerHeader />
    </>
  )
}

export default Header
