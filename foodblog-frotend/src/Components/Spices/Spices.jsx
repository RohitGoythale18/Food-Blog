import React, { useState, useEffect } from 'react'
import './Spices.css'
import { Link } from 'react-router-dom'
import VegHeadbar from '../Headbar/VegHeadbar'
import NonVegHeadbar from '../Headbar/NonVegHeadbar'

export default function Spices({ destination }) {
  const [spicesData, setSpicesData] = useState([]);
  const [nonVegData, setNonVegData] = useState([]);

  useEffect(() => {
    fetch('your-api-endpoint-for-spices')
      .then(response => response.json())
      .then(data => setSpicesData(data))
      .catch(error => console.error('Error fetching spices data:', error));

    fetch('your-nonveg-api-endpoint')
      .then(response => response.json())
      .then(data => setNonVegData(data))
      .catch(error => console.error('Error fetching non-veg data:', error));
  }, []);

  return (
    <>
      <VegHeadbar />
      <section className="veg-container">
        {/* {spicesData.map((spice, index) => (
          <div className='recipe-div' key={index}>
            <Link to={destination} className='recipe-img-link'>
              <img className='recipe-imgs' src={spice.image} alt={spice.name} />
            </Link>
            <Link to={destination} className='recipe-name'>{spice.name}</Link>
          </div>
        ))} */}
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/zunka.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Zunka</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/misal-pav.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Misal Pav</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/sabudana-khichadi.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Sabudana Khichadi</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/kanda-poha.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Kanda Poha</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/upma.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Upma</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/thalipeeth.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Thalipeeth</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/batata-vada.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Batata Vada</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/kothimbir-vadi.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Kothimbir Vadi</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/pithala.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Pithala</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/bhakarwadi.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Bhakarwadi</Link>
        </div>
      </section>
      <NonVegHeadbar />
      <section className="non-veg-container">
        {/* {nonVegData.map((nonVeg, index) => (
          <div className='recipe-div' key={index}>
            <Link to={destination} className='recipe-img-link'>
              <img className='recipe-imgs' src={nonVeg.image} alt={nonVeg.name} />
            </Link>
            <Link to={destination} className='recipe-name'>{nonVeg.name}</Link>
          </div>
        ))} */}
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/kombdi-vade.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Kombdi Vade</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/fish-curry.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Fish Curry</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/chicken-biryani.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Chicken Biryani</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/malwani-prawn-curry.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Prawn Curry</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/chicken-kheema.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Chicken Kheema</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/vajadi.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Vajadi</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/tambda-rassa.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Tambda Rassa</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/chicken-curry.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Chicken Curry</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/varhadi-chicken.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Varhadi Chicken</Link>
        </div>
        <div className='recipe-div'>
          <Link to='/' className='recipe-img-link'>
            <img className='recipe-imgs' src="../Images/Spices/sukka-mutton.png" alt="Image 1" />
          </Link>
          <Link to='/' className='recipe-name'>Sukka Mutton</Link>
        </div>
      </section>
    </>
  )
}
