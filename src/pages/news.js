// Import React
import React from 'react'
import '../css/subpage.css';
import { Header } from '../components/header';




// Create a new component
export const News = () => {

    console.log("Hi from News.js")

    return (
      <div>
        <Header />
        <div className='topic'>
          <h3>News</h3>
        </div>
      </div>

    )
  }
