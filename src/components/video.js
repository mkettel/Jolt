import '../css/home.css';
import ReactPlayer from 'react-player';

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
      page: 'trending',
    },
    {
      id: 2,
      title: 'Math',
      url: "videos/math_vid.mp4",
      page: 'trending'
    },
    // FOR FUN VIDEOS ************************
    {
      id: 3,
      title: 'Tornado Debunk',
      url: "videos/fun/tornado_debunk.mp4",
      page: 'funny',
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
    },
    {
      id: 19,
      title: 'Home Egg Science',
      url: "videos/trending/home_science_egg.mp4",
      page: 'trending',
    },
  ];

  const filteredVideos = videos.filter(video => video.page === props.page);

  // reverse order of videos showing up is the .sort method added

  return (

    <div className="video">
      {filteredVideos
      .sort((a, b) => b.id - a.id)
      .map((video) => (
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
