/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const RecipeComponent = (props) => {
    console.log(props);
    const [show, setShow] =useState(false);
    const {recipeObj} = props;
    console.log(recipeObj);
    
  return (
    <table>
        <thead>
            <th>Ingredients</th>
            <th>Weight</th>
        </thead>
        <tbody>
            {recipeObj.ingredients.map((ingredientObj) => (
                <tr key = {ingredientObj.text}>
                    <td>{ingredientObj.text}</td>
                    <td>{ingredientObj.weight}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default RecipeComponent