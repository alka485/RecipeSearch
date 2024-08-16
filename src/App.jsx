/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import axios from 'axios'
//---------------------------------------------------------import dependency
import {Header, AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput} from './components/Header'
import './App.css'

function App() {

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
