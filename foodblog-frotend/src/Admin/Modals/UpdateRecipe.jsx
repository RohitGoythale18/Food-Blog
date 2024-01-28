import React, { useState } from 'react'
import './UpdateRecipe.css';

export default function UpdateRecipe() {
    const [recipeType, setRecipeType] = useState('vegetarian');

    const handleTypeChange = (event) => {
        setRecipeType(event.target.value);
    };
    return (
        <>
            <section className='update-recipe-modal'>
                <h2 id='update-recipe-heading'>Update Recipe</h2>
                <form action="" className="update-recipe-form">
                    <div className="update-recipe-container">
                        <div className="recipe-info-input">
                            <input type="text" className='recipe-input' id='recipe-name-input' placeholder='Enter recipe name...' />
                            <textarea type="text" className='recipe-input' id='recipe-ingredients-input' placeholder='Enter ingredients...' />
                            <textarea type="text" className='recipe-input' id='recipe-cooking-steps-input' placeholder='Enter cooking steps...' />
                        </div>
                        <div className="radio-and-image-input">
                            <div className="recipe-radio-box">
                                <h3>Recipe type:</h3>
                                <input className='radio-input' type="radio" value="vegetarian" checked={recipeType === 'vegetarian'} onChange={handleTypeChange} />Vegetarian
                                <input className='radio-input' type="radio" value="nonvegetarian" checked={recipeType === 'nonvegetarian'} onChange={handleTypeChange} />Non-Vegetarian
                            </div>
                            <div className="recipe-image-input">
                                <h3>Upload recipe image</h3>
                                <input type='file' className='recipe-input' id='image-input' />
                            </div>
                        </div>
                    </div>
                    <button id='update-recipe-button'>Update</button>
                </form>
            </section>
        </>
    )
}
