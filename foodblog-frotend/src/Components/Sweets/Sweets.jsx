import React, { useState, useEffect } from 'react'
import './Sweets.css'
import { Link } from 'react-router-dom';

export default function Sweets({ destination }) {
  const [sweetsData, setSweetsData] = useState([]);

  useEffect(() => {
    // Assuming you have an API endpoint to fetch sweets data
    fetch('your-api-endpoint')
      .then(response => response.json())
      .then(data => setSweetsData(data))
      .catch(error => console.error('Error fetching sweets data:', error));
  }, []);

  return (
    <>
      <section className="veg-container">
        {/* {sweetsData.map((sweet, index) => (
          <div className='recipe-div' key={index}>
            <Link to={destination} className='recipe-img-link'>
              <img className='recipe-imgs' src={sweet.image} alt={sweet.name} />
            </Link>
            <Link to={destination} className='recipe-name'>{sweet.name}</Link>
          </div>
        ))} */}
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/gulab-jamun.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Gulab Jamun</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/kaju-katli.png" alt="Image 2" />
          </Link>
          <Link to='/' className='recipe-name'>Kaju Katli</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/puran-poli.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Puran Poli</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/kheer.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Kheer</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/coconut-burfi.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Coconut Burfi</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/jalebi.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Jalebi</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/carrot-halwa.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Carrot Halwa</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/badam-burfi.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Badam Burfi</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/oats-laddu.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Oats Laddu</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/malpua.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Maplua</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Sweets/doodh-peda.png" alt="Image 3" />
          </Link>
          <Link to='/' className='recipe-name'>Doodh Peda</Link>
        </div>
      </section>
    </>
  )
}
