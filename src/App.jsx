/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'
//---------------------------------------------------------import dependency
import {Header, AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/Header'
import './App.css'
import RecipeComponent from './components/RecipeComponent'
import {RecipeListContainer} from './components/Recipe'

const Container = styled.div`
      display: flex;
      flex-direction: column; 
     `;

const Placeholder = styled.img`
      width: 120px;
      height:120px;
      margin:200px;
      opacity:50%;      
`;     

function App() {
    const [timeoutId, settimeoutId] = useState();
    const [recipeList, setRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    try{
      const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${import.meta.env.VITE_APPID}&app_key=${import.meta.env.VITE_APPKEY}`);
      //console.log(response);
      setRecipeList(response.data.hits)
    } catch (err) {
      console.error(err);
      
    }
  }

  const handleChange =(e) => {
    clearTimeout(timeoutId);//Clear the previous timeout if it exists
    const searchString = e.target.value;
    // Set a new timeout to fetch the recipe after 500ms of inactivity
    const newTimeout = setTimeout(() => {
      fetchRecipe(searchString);//Make API call with the search string
    }, 500);
    settimeoutId(newTimeout);//Store the new timeout ID
  };
  
  return (
    <Container>
    <Header>
      <AppNameComponent>
        <AppIcon src='./hamburger.svg'/>
        Recipe Search
      </AppNameComponent>
      <SearchComponent>
        <SearchIcon src='/search-icon.svg'/>
        <SearchInput placeholder='Search Recipe' onChange={handleChange}/>
      </SearchComponent>
    </Header>
    <RecipeListContainer>
       {
        recipeList.map((recipeObj,index) => (
          <RecipeComponent key={index} recipeObj ={recipeObj.recipe} />
        ))
       }

    </RecipeListContainer>

    </Container>
  )
}

export default App
