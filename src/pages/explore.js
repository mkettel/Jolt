// Import React
import React from 'react'
import '../css/subpage.css';
import { Header } from '../components/header';



// Create a new component
export const Explore = () => {

    console.log("Hi from Explore.js")

    return (
      <div>
      <Header />
      <div className='topic'>
        <h3>Explore</h3>
      </div>
    </div>
    )
  }
