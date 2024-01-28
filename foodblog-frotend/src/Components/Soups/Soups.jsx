import React, { useState, useEffect } from 'react'
import './Soups.css'
import { Link } from 'react-router-dom'
import VegHeadbar from '../Headbar/VegHeadbar'
import NonVegHeadbar from '../Headbar/NonVegHeadbar'

export default function Soups() {
  const [soupsData, setSoupsData] = useState([]);

  useEffect(() => {
    fetch('your-api-endpoint-for-soups')
      .then(Response => Response.json())
      .then(data => setSoupsData(data))
      .catch(error => console.error('Error fetching soups data: ', error));
  }, []);

  return (
    <>
      <VegHeadbar />
      <section className="veg-container">
        {/* {
          soupsData.map((soups, index) => (
            <div className='recipe-div' key={index}>
              <Link to={destination} className='recipe-img-link'>
                <img className='recipe-imgs' src={soups.image} alt={soups.name} />
              </Link>
              <Link to={destination} className='recipe-name'>{soups.name}</Link>
            </div>
          ))
        } */}
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Soups/daal.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Daal</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Soups/tomato-saar.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Tomato Saar</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Soups/solkadi.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Solkadi</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Soups/kala-vatana-usal.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Kala Vatana Usal</Link>
        </div>
      </section>
      <NonVegHeadbar />
      <section className="non-veg-container">
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Soups/chicken-soup.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Chicken Soup</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Soups/prawn-coconut-soup.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Prawn & Coconut Soup</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/pandhara-rassa.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Pandhara Rassa</Link>
        </div>
      </section>
    </>
  )
}
