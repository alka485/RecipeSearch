/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {ReceipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText} from './Recipe'
import { Dialog, DialogTitle,DialogContent,DialogActions } from '@mui/material';

const RecipeComponent = ({recipeObj}) => {
    //console.log(props);
    const [show, setShow] =useState(false);

  return (
    <>
    <Dialog>
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

    </Dialog>

    <ReceipeContainer>
        <CoverImage src={recipeObj.image}/>
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeMoreText>See Complete Recipe</SeeMoreText>
    </ReceipeContainer>
    </>
  )
}

export default RecipeComponent