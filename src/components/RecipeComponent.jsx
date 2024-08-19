/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const RecipeComponent = ({recipeObj}) => {
    //console.log(props);
    const [show, setShow] =useState([]);

  return (
    <>
    <table>
        <thead>
            <th>Ingredients</th>
            <th>Weight</th>
        </thead>
        <tbody>
            {recipeObj.ingredients.map((ingredientObj,index)=>(
                <tr key={index}>
                    <td>{ingredientObj.text}</td>
                    <td>{ingredientObj.weight}</td>
                </tr>
            ))}
        </tbody>
    </table>
    
{/* <ul>
     {recipeObj.ingredients.map((ing,index) => (
        <li key={index}>{ing.text}</li>
        
     ))}

</ul> */}
    
    
    </>
  )
}

export default RecipeComponent