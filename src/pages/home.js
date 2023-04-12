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


// *********************
// ** COMPONENTS *******
// *********************

// 1. need to use state / effect hook to pass props to the URL to make it dynamic
// 2. Add that video player component to the videoContainer component and then just use that for all videos and change them based on page somehow
// function VideoPlayer1() {

//   return (
//     <div className='video'>
//       <ReactPlayer
//         className='react-video'
//         url="videos/history.mp4"
//         width='100%'
//         height='100%'
//         controls={true}
//         style={
//           {borderRadius: '5px'}
//         }
//         />
//     </div>

//   )
// }
// https://www.youtube.com/watch?v=dQw4w9WgXcQ

// function VideoPlayer2() {

//   return (
//     <div className='video'>
//       <ReactPlayer
//         className='react-video'
//         url="videos/math_vid.mp4"
//         width='100%'
//         height='100%'
//         controls={true}
//         style={
//           {borderRadius: '5px'}
//         }
//         />
//     </div>

//   )
// }

// Component that Holds all of the videos
// function VideoContainer() {

//   return (
//     <div className='content'>
//       <div className='gridContent'>
//       <VideoPlayer1 />
//       <VideoPlayer2 />
//       <VideoPlayer1 />
//       <VideoPlayer2 />
//       </div>
//     </div>
//   )
// }

// function VideoContainer() {

//   return (
//     <div className='content'>
//       <VideoList page="trending"/>
//     </div>
//   )
// }

// function VideoList(props) {
//   const videos = [
//     {
//       id: 1,
//       title: 'History',
//       url: "videos/history.mp4",
//       page: 'trending',
//     },
//     {
//       id: 2,
//       title: 'Math',
//       url: "videos/math_vid.mp4",
//       page: 'trending'
//     },
//     {
//       id: 3,
//       title: 'Math_2',
//       url: "videos/math_vid.mp4",
//       page: 'trending',
//     }
//   ];

//   const filteredVideos = videos.filter(video => video.page === props.page);

//   return (

//     <div className="video">
//       {filteredVideos.map((video) => (
//         <div key={video.id} className="video-item">
//           {/* <h2>{video.title}</h2> */}
//           <ReactPlayer
//           url={video.url}
//           width='100%'
//           height='100%'
//           controls={true}  />
//         </div>
//       ))}
//     </div>
//   );
// }
