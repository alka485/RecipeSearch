/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'

const RecipeComponent = ({recipeObj}) => {
    //console.log(props);
    const [show, setShow] =useState([]);
    // const {recipeObj} = props;
    //console.log(recipeObj);
    
    console.log(recipeObj);
    

    
  return (
    <>
    
<ul>
     {recipeObj.ingredients.map((ing,index) => (
        <li key={index}>{ing.text}</li>
        
     ))}

</ul>
    
    
    </>
  )
}

export default RecipeComponent