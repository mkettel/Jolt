// Import React
import React from 'react'
import '../css/subpage.css';
import { Header } from '../components/header';
import { VideoList } from '../components/video';



// Create a new component
export const Science = () => {

    console.log("Hi from Science.js")

    return (
      <div>
      <Header />
      <div className='topic'>
        <h3>Science</h3>
      </div>

      <div className='videoContent'>
          <VideoList page="science"/>
        </div>
    </div>
    )
  }
