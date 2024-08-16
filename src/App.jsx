/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import axios from 'axios'
//---------------------------------------------------------import dependency
import {Header, AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/Header'
import './App.css'

function App() {

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${import.meta.env.VITE_APP_ID }&app_key=${import.meta.env.VITE_APP_KEY}`);
    console.log(response);
    

  }

  const handleChange =(e) => {
    console.log(e.target.value);
    
  }
  
  return (
    <>
    <Header>
      <AppNameComponent>
        <AppIcon src='../public/hamburger.svg'/>
        Recipe Search
      </AppNameComponent>
      <SearchComponent>
        <SearchIcon src='../public/search-icon.svg'/>
        <SearchInput placeholder='Search Recipe' onChange={handleChange}/>
        

        

      </SearchComponent>

    </Header>
      
    </>
  )
}

export default App
