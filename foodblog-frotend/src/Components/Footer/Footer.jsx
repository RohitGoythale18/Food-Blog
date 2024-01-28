import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="footer-logo-and-details">
          <div className='portal-logo-and-name footer-logo'>
            <img src="./public/OIG.png" id='footer-logo' alt="" />

            <svg id='footer-portal-name' width="200" height="50" xmlns="http://www.w3.org/2000/svg">
              <text id='footer-portal-name-svg-text' x="10" y="35">FoodMania</text>
            </svg>
          </div>
        </div>
        <footer className='footer-box'>
          <Link to='/' className="footer-tabs">About Us</Link>
          <Link to='/' className="footer-tabs">Navigation</Link>
          <Link to='/' className="footer-tabs">Site Map</Link>
          <Link to='/' className="footer-tabs">Popular Posts</Link>
          <Link to='/' className="footer-tabs">Recent Comments</Link>
          <Link to='/' className="footer-tabs">Privacy Policy</Link>
          <Link to='/' className="footer-tabs">Newsletter Signup</Link>
          <Link to='/' className="footer-tabs">Contact Information</Link>
          <Link to='/' className="footer-tabs">Terms of Service</Link>
        </footer>
        <div className="copyright-div">
          &copy; FoodMania 2023 | All rights reserved.
        </div>
      </section>
    </>
  )
}
