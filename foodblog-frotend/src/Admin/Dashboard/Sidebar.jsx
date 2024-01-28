import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <section className="sidebar-conatiner">
                <div className='admin-portal-logo-and-name'>
                    <img src="/OIG.png" id='admin-logo' alt="" />

                    <svg id='admin-portal-name' xmlns="http://www.w3.org/2000/svg">
                        <text id='admin-portal-name-svg-text' x="5" y="35">FoodMania</text>
                    </svg>
                </div>

                <div className="admin-sidebar-tabs">
                    <NavLink to='/dashboard' className='admin-tab-name' activeclassname='active'>Dashboard</NavLink>
                    <NavLink to='/dashboard/manage-sweets' className='admin-tab-name' activeclassname='active'>Sweets</NavLink>
                    <NavLink to='/dashboard/manage-spices' className='admin-tab-name' activeclassname='active'>Spices</NavLink>
                    <NavLink to='/dashboard/manage-soups' className='admin-tab-name' activeclassname='active'>Soups</NavLink>
                    <NavLink to='/dashboard/manage-feedback' className='admin-tab-name' activeclassname='active'>Feedback</NavLink>
                </div>

                <div className="logout-btn-div">
                    <button id='logout-btn'>Logout</button>
                </div>
            </section>
        </>
    )
}
