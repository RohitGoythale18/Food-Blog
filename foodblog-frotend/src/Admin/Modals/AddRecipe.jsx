import React, { useState } from 'react';
import './AddRecipe.css';
import axios from 'axios';

export default function AddRecipe({fetchData, closeModal}) {
    const [recipeName, setRecipeName] = useState('');
    const [recipeIngredients, setRecipeIngredients] = useState('');
    const [recipeSteps, setRecipeSteps] = useState('');
    const [recipeType, setRecipeType] = useState('vegetarian');
    const [recipeImg, setRecipeImg] = useState('');

    const handleTypeChange = (event) => {
        setRecipeType(event.target.value);
    };

    const onSubmit = async () => {
        const data = {
            recipeName, recipeIngredients, recipeSteps, recipeType, recipeImg
        }

        await axios.post('http://localhost:8080/api/add-recipe', data).then(res => {
            if (res.data.status === 200) {
                console.log("Recipe added successully..!")
                fetchData();
                closeModal();
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <section className='add-recipe-modal'>
                <h2 id='add-recipe-heading'>Add Recipe</h2>
                <form onSubmit={onSubmit} className="add-recipe-form">
                    <div className="add-recipe-container">
                        <div className="recipe-info-input">
                            <input
                                type="text"
                                value={recipeName}
                                onChange={(e) => setRecipeName(e.target.value)}
                                className='recipe-input'
                                id='recipe-name-input'
                                placeholder='Enter recipe name...' />

                            <textarea
                                type="text"
                                value={recipeIngredients}
                                onChange={(e) => setRecipeIngredients(e.target.value)}
                                className='recipe-input'
                                id='recipe-ingredients-input'
                                placeholder='Enter ingredients...' />

                            <textarea type="text"
                                value={recipeSteps}
                                onChange={(e) => setRecipeSteps(e.target.value)}
                                className='recipe-input'
                                id='recipe-cooking-steps-input'
                                placeholder='Enter cooking steps...' />
                        </div>
                        <div className="radio-and-image-input">
                            <div className="recipe-radio-box">
                                <h3>Recipe type:</h3>
                                <input className='radio-input' type="radio" value="vegetarian" checked={recipeType === 'vegetarian'} onChange={handleTypeChange} />Vegetarian
                                <input className='radio-input' type="radio" value="nonvegetarian" checked={recipeType === 'nonvegetarian'} onChange={handleTypeChange} />Non-Vegetarian
                            </div>
                            <div className="recipe-image-input">
                                <h3>Upload recipe image</h3>
                                <input
                                    type='file'
                                    value={recipeImg}
                                    onChange={(e) => setRecipeImg(e.target.value)}
                                    className='recipe-input'
                                    id='image-input' />
                            </div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        id='add-recipe-button'>
                        Add
                    </button>
                </form>
            </section>
        </>
    );
}