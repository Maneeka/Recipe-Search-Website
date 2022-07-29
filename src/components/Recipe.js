import React, {useState} from 'react'
import RecipeDetails from './RecipeDetails'

const Recipe = ({recipe}) => {
    const [show, setShow] = useState(false)
    const { healthLabels, image, ingredients, label, url} = recipe.recipe
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <div className="link-and-veg">
                <a href={url} target="_blank" rel="noopener noreferrer">See recipe!</a>
                {healthLabels.includes("Vegetarian")? <h3 id="veg">Vegetarian</h3> : <h3 id="non-veg">Non-Vegetarian</h3>}
            </div>
            <button type="button" onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    )
}

export default Recipe
