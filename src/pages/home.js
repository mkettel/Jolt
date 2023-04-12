// import home css page
import '../css/home.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Header } from '../components/header';



export const Home = () => {

    console.log("Hi from Home.js")

    return (
      <div className='appContent'>
        <div className="gradientWrapper"></div>
        <Header />
        <VideoContainer />
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

function VideoContainer() {

  return (
    <div className='content'>
      <div className='gridContent'>
      <VideoPlayer1 />
      <VideoPlayer2 />
      <VideoPlayer1 />
      <VideoPlayer2 />
      </div>
    </div>
  )
}

// ADD an image yo
// <image className='logo' src='images/rocketship_icon.png' />
