// import home css page
import '../css/home.css';
import ReactPlayer from 'react-player';



export const Home = () => {

    console.log("Hi from Home.js")

    return (
      <div className='appContent'>
        <div className='header'>
          <h1 className='mainTitle'>Jolt</h1>
        </div>
        <div className='content'>
          <div className='gridContent'>
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          <VideoPlayer />
          </div>
        </div>
      </div>
    )
  }


// components
function VideoPlayer() {



  return (
    <div className='video'>
      <ReactPlayer
        className='react-video'
        url="videos/cc_AI.mp4"
        width='200px'
        height='200px'
        controls={true}
        />
    </div>

  )
}
// https://www.youtube.com/watch?v=dQw4w9WgXcQ
