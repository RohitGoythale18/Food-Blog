import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search Text:', searchText);
    };
    return (
        <>
            <nav className='navbar'>
                <div className='portal-logo-and-name'>
                    <img src="./public/OIG.png"id='logo' alt="" />
    
                    <svg id='portal-name' width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                        <text id='portal-name-svg-text' x="10" y="35">FoodMania</text>
                    </svg>
                </div>
                <div className='navbar-tabs'>
                    <NavLink to='/' className='tab-name' activeclassname='active'>Home</NavLink>
                    <NavLink to='/sweets' className='tab-name' activeclassname='active'>Sweets</NavLink>
                    <NavLink to='/spices' className='tab-name' activeclassname='active'>Spices</NavLink>
                    <NavLink to='/soups' className='tab-name' activeclassname='active'>Soups</NavLink>
                    <NavLink to='/contact-us' className='tab-name' activeclassname='active'>Contact Us</NavLink>
                </div>
                <div className='search-div'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id='search-input'
                            value={searchText}
                            onChange={handleSearchChange}
                            placeholder="Search recipe"
                        />
                        <button type="submit" id='search-btn'>Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
