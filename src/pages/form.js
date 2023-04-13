// Import React
import React from 'react'
import '../css/form.css';
import { Header } from '../components/header';



// Create a new component
export const VideoForm = () => {

    console.log("Hi from Form.js")

    return (
      <div>
      <Header />
      <div className='topic'>
        <h3>Upload Video</h3>
      </div>
      {/* Upload Video Form */}

    </div>
    )
  }
