// Import React
import React from 'react'
import '../css/subpage.css';
import { Header } from '../components/header';



// Create a new component
export const Funny = () => {

    console.log("Hi from Funny.js")

    return (
      <div>
      <Header />
      <div className='topic'>
        <h3>Funny</h3>
      </div>
    </div>
    )
  }
