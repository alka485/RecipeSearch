/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {RecipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText} from './Recipe'
import { Dialog, DialogTitle,DialogContent,DialogActions } from '@mui/material';

const RecipeComponent = ({recipeObj}) => {
    //console.log(props);
    const [show, setShow] =useState(false);

  return (
    <>
    <Dialog open ={show}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
            <IngredientsText onClick={() => window.open(recipeObj.url)}>See More</IngredientsText>
            <SeeMoreText onClick={()=>setShow("")}>Close</SeeMoreText>
        </DialogActions>

    </Dialog>

    <RecipeContainer>
        <CoverImage src={recipeObj.image}/>
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={()=> setShow(true)}>Ingredients</IngredientsText>
        <SeeMoreText onClick={()=> window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
    </RecipeContainer>
    </>
  )
}

export default RecipeComponent