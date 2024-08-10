/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import axios from 'axios'
//---------------------------------------------------------import dependency
import {Header, AppNameComponent,AppIcon} from './components/Header'
import './App.css'

function App() {
  
  return (
    <>
    <Header>
      <AppNameComponent>
        <AppIcon src='../public/hamburger.svg'/>
        Recipe Search
      </AppNameComponent>

    </Header>
      
    </>
  )
}

export default App
