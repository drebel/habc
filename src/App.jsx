import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title.jsx'
import Instructions from './components/Instructions.jsx'

export default function App() {
  return (
    <>
      <Title />
      <Instructions /> 

      {/* gonna have a data.js file that we can have an array of objects where the properties are the data we want to pass in as props to our components
      we import the array at the top of the file
      then map over it and return custom component elements that will be our questions and inputs
      i think maybe i will break it up into each subsection? 
      */}
    </>
  )
}