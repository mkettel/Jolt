import '../css/home.css';
import ReactPlayer from 'react-player';
import { useState } from 'react';

// CSS Located in HOME.CSS
// Video List Component that i can use for now to display videos for each page differently

export const VideoList = (props) => {


  // ************************************************
  // *** Place to store mini DB of videos for now ***
  // ************************************************
  const videos = [
    {
      id: 1,
      title: 'History',
      url: "videos/history.mp4",
      page: 'none',
    },
    {
      id: 2,
      title: 'Math',
      url: "videos/math_vid.mp4",
      page: 'none'
    },
    // FOR FUN VIDEOS ************************
    {
      id: 3,
      title: 'Tornado Debunk',
      url: "videos/fun/tornado_debunk.mp4",
      page: 'funny',
      tags: ['science', 'weather', 'fun']
    },
    {
      id: 4,
      title: 'Balloons',
      url: "videos/fun/balloons.mp4",
      page: 'funny',
    },
    {
      id: 5,
      title: 'Cookie Chilling',
      url: "videos/fun/cookie_fun.mp4",
      page: 'funny',
    },
    {
      id: 6,
      title: 'Making Rock Candy',
      url: "videos/fun/rock_candy.mp4",
      page: 'funny',
    },
    //NEWS VIDEOS ************************
    {
      id: 7,
      title: 'Antartica Drake Passage',
      url: "videos/news/antartica_drake.mp4",
      page: 'news',
    },
    {
      id: 8,
      title: 'Mars Volunteers',
      url: "videos/news/mars_news.mp4",
      page: 'news',
    },
    {
      id: 9,
      title: 'Random World News',
      url: "videos/news/rando_long_hair_news.mp4",
      page: 'news',
    },
    {
      id: 10,
      title: 'Prosthetic Thumb',
      url: "videos/news/second_thumb.mp4",
      page: 'news',
    },
    // SCIENCE TOPICS ************************
    {
      id: 11,
      title: 'Environmental Consulting',
      url: "videos/science/environmental_consulting.mp4",
      page: 'science',
    },
    {
      id: 12,
      title: 'Fish Waste to Plastic',
      url: "videos/science/fish_waste.mp4",
      page: 'science',
    },
    {
      id: 13,
      title: 'Greenhouse Gas Effect NYC',
      url: "videos/science/greenhouse_gas_nyc.mp4",
      page: 'science',
    },
    {
      id: 14,
      title: 'Plastic Free',
      url: "videos/science/plastic_free.mp4",
      page: 'science',
    },
    // TRENDING VIDEOS ************************
    {
      id: 15,
      title: 'Water-based Society',
      url: "videos/trending/water_humans.mp4",
      page: 'trending',
    },
    {
      id: 16,
      title: 'Terrifying Planet',
      url: "videos/trending/scary_planet.mp4",
      page: 'trending',
    },
    {
      id: 17,
      title: 'Mola Mola in the Deep Ocean',
      url: "videos/trending/mola_mola.mp4",
      page: 'trending',
    },
    {
      id: 18,
      title: 'Kayaking off a Beautiful Waterfall',
      url: "videos/trending/kayak_waterfall.mp4",
      page: 'trending',
      shareURL: 'https://drive.google.com/file/d/1EuOofbJRuIVdNjwZNXlCvTiaYt9X51-X/view?usp=share_link'
    },
    {
      id: 19,
      title: 'Home Egg Science',
      url: "videos/trending/home_science_egg.mp4",
      page: 'trending',
    },
  ];

  // sets the video.page property as the page prop when component is called on html
  const [filteredVideos, setFilteredVideos] = useState(
    videos.filter(video => video.page === props.page) //filters so that props passed on the page is equial to video.page
      .map(video => ({
        ...video,
        copied: false // add a new "copied" property to each video
      }))
  );




  // Clipboard Function
  function copyToClipboard(video) {
    navigator.clipboard.writeText(video.shareURL)
      .then(() => {
        const updatedVideos = filteredVideos.map(v => v.id === video.id ? {...v, copied: true} : {...v, copied: false});
        setFilteredVideos(updatedVideos);
      })
      .catch(err => console.error('failed to copy video URL', err));
  }




  return (

    <div className="video">
      {filteredVideos
      .sort((a, b) => b.id - a.id) // reverse order of videos showing up
      .map((video) => (
        <div key={video.id} className="video-item">
          <h2 className='title'>{video.title}</h2>
          <ReactPlayer
          url={video.url}
          width='100%'
          height='100%'
          controls={true}
          data-title={video.title}
          />
          <button onClick={() => copyToClipboard(video)}>
            {video.copied && 'Copied!'}
            {!video.copied && 'Copy URL'}
          </button>
        </div>
      ))}
    </div>
  );
}
