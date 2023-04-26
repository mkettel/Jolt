// import home css page
import '../css/home.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Header } from '../components/header';
import { VideoList } from '../components/video'



export const Home = () => {

    console.log("Hi from Home.js")

    return (
      <div className='appContent'>
        <div className="gradientWrapper"></div>
        <Header />
        <div className='topic'>
          <h3>Trending</h3>
        </div>

        <div className='videoContent'>
          <VideoList page="trending"/>
        </div>
      </div>
    )
  }
