import '../css/home.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { Link } from 'react-router-dom'


// Video List Component that i can use for now to display videos for each page differently

export const VideoList = (props) => {

  const videos = [
    {
      id: 1,
      title: 'History',
      url: "videos/history.mp4",
      page: 'trending',
    },
    {
      id: 2,
      title: 'Math',
      url: "videos/math_vid.mp4",
      page: 'trending'
    },
    {
      id: 3,
      title: 'Math_2',
      url: "videos/math_vid.mp4",
      page: 'trending',
    },
    {
      id: 4,
      title: 'AI',
      url: "videos/cc_AI.mp4",
      page: 'news',
    }
  ];

  const filteredVideos = videos.filter(video => video.page === props.page);

  return (

    <div className="video">
      {filteredVideos.map((video) => (
        <div key={video.id} className="video-item">
          {/* <h2>{video.title}</h2> */}
          <ReactPlayer
          url={video.url}
          width='100%'
          height='100%'
          controls={true}  />
        </div>
      ))}
    </div>
  );
}
