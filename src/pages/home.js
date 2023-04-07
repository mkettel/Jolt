// import home css page
import '../css/home.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'



export const Home = () => {

    console.log("Hi from Home.js")
    // <FontAwesomeIcon icon={icon({name: 'rocket', family: 'sharp', style: 'solid'})} />

    return (
      <div className='appContent'>
        <div className='header'>
          <h1 className='mainTitle'>Jolt</h1>
        </div>
        <div className='topic'>
          <h3>Science</h3>
        </div>
        <div className='content'>
          <div className='gridContent'>
          <VideoPlayer1 />
          <VideoPlayer2 />
          <VideoPlayer1 />
          <VideoPlayer2 />
          </div>
        </div>
        <div className='footerContainer'>
          <div className='footer'>
            <div className='nav-item'>
              <FontAwesomeIcon icon={icon({name: "vial"})} color="#CFC2B0" />
            </div>
            <div className='nav-item'>
              <FontAwesomeIcon icon={icon({name: "seedling"})} color="#CFC2B0" />
            </div>
            <div className='nav-item'>
              <FontAwesomeIcon icon={icon({name: 'rocket'})} color="#CFC2B0" />
            </div>
            <div className='nav-item'>
              <FontAwesomeIcon icon={icon({name: "dna"})} color="#CFC2B0" />
            </div>
          </div>
        </div>
      </div>
    )
  }


// components
function VideoPlayer1() {

  return (
    <div className='video'>
      <ReactPlayer
        className='react-video'
        url="videos/history.mp4"
        width='100%'
        height='100%'
        controls={true}
        style={
          {borderRadius: '5px'}
        }
        />
    </div>

  )
}
// https://www.youtube.com/watch?v=dQw4w9WgXcQ

function VideoPlayer2() {

  return (
    <div className='video'>
      <ReactPlayer
        className='react-video'
        url="videos/math_vid.mp4"
        width='100%'
        height='100%'
        controls={true}
        style={
          {borderRadius: '5px'}
        }
        />
    </div>

  )
}

// ADD an image yo
// <image className='logo' src='images/rocketship_icon.png' />
