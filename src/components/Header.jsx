import React from 'react';
import LogoWorldIsYoursDark from "../assets/icons/dark/logo-dark.svg";
import SearchIconDark from "../assets/icons/dark/icon-search-dark.svg";
import {NavLink} from "react-router-dom";
import CartIconDark from "../assets/icons/dark/icon-cart-dark.svg";
import HeartIconDark from "../assets/icons/dark/icon-heart-dark.svg";
import ProfileIconDark from "../assets/icons/dark/icon-profile-dark.svg";

function Header ({isCategoriesOpen, setIsCategoriesOpen}) {
    return (
        <div className='flex justify-between items-center px-10 bg-white text-custom-black drop-shadow-5xl'>
            <div className='flex justify-between items-center'>
                <img src={LogoWorldIsYoursDark} alt="World Is Yours"/>
                <div className='mx-10 text-center'>
                    <div className='text-custom-black/30'>ENG</div>
                    <div className='underline'>UA</div>
                </div>
                <img src={SearchIconDark} alt='Search'/>
            </div>
            <ul className='flex justify-between items-center'>
                <li className='mr-10'>ГОЛОВНА</li>
                <li onClick={() => setIsCategoriesOpen(!isCategoriesOpen)} className='mr-10'>КАТАЛОГ</li>
                <li>КОНТАКТИ</li>
            </ul>
            <div className='flex justify-between items-center '>
                <NavLink className='mr-10' to={'/'}><img className='text-red-400' src={CartIconDark} alt="Profile"/></NavLink>
                <NavLink className='mr-10' to={'/'}><img src={HeartIconDark} alt="Favorites"/></NavLink>
                <NavLink to={'/'}><img src={ProfileIconDark} alt="Cart"/></NavLink>
            </div>
        </div>
    );
}

export default Header;
