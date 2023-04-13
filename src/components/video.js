import '../css/home.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
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
      shareURL: 'https://drive.google.com/file/d/1sMEJ82QrJNuLY84Eky71kQzMkEWcz2dG/view?usp=share_link',
      tags: ['science', 'weather', 'fun']
    },
    {
      id: 4,
      title: 'Balloons',
      url: "videos/fun/balloons.mp4",
      page: 'funny',
      shareURL: 'https://drive.google.com/file/d/1YJlsOwUdAhDA6ezW_a5UglTn0uZkmvzN/view?usp=share_link'
    },
    {
      id: 5,
      title: 'Cookie Chilling',
      url: "videos/fun/cookie_fun.mp4",
      page: 'funny',
      shareURL: 'https://drive.google.com/file/d/1p2WJcFBeUNHHuE56tUYQ84Y899S8vMJE/view?usp=share_link'
    },
    {
      id: 6,
      title: 'Making Rock Candy',
      url: "videos/fun/rock_candy.mp4",
      page: 'funny',
      shareURL: 'https://drive.google.com/file/d/1aU4H95RaBedn3BAK2oh9TWU_DEXK1Ewr/view?usp=share_link'
    },
    //NEWS VIDEOS ************************
    {
      id: 7,
      title: 'Antartica Drake Passage',
      url: "videos/news/antartica_drake.mp4",
      page: 'news',
      shareURL: 'https://drive.google.com/file/d/1CMBYAwxEfqxGcJGDzk_4n2ph5wZYwNbi/view?usp=share_link'
    },
    {
      id: 8,
      title: 'Mars Volunteers',
      url: "videos/news/mars_news.mp4",
      page: 'news',
      shareURL: 'https://drive.google.com/file/d/1Xu91PSgaUzjnNfrl0CcMnOeBt4hHP5ZN/view?usp=share_link'
    },
    {
      id: 9,
      title: 'Random World News',
      url: "videos/news/rando_long_hair_news.mp4",
      page: 'news',
      shareURL: 'https://drive.google.com/file/d/1P1p3LYTB9Bl6zrBMm6LnEcdtN9q-nY8o/view?usp=share_link'
    },
    {
      id: 10,
      title: 'Prosthetic Thumb',
      url: "videos/news/second_thumb.mp4",
      page: 'news',
      shareURL: 'https://drive.google.com/file/d/1ZTsRnL8Kdp50NKIhfg7w9k8ciD1fZTLz/view?usp=sharing'
    },
    // SCIENCE TOPICS ************************
    {
      id: 11,
      title: 'Environmental Consulting',
      url: "videos/science/environmental_consulting.mp4",
      page: 'science',
      shareURL: 'https://drive.google.com/file/d/1o-LhauQGpCxGq64U7zS0PD-d4T8dBz5-/view?usp=share_link'
    },
    {
      id: 12,
      title: 'Fish Waste to Plastic',
      url: "videos/science/fish_waste.mp4",
      page: 'science',
      shareURL: 'https://drive.google.com/file/d/14t6BfDidHqBcSqasc9Z-KdIpbtOQy-WT/view?usp=share_link'
    },
    {
      id: 13,
      title: 'Greenhouse Gas Effect NYC',
      url: "videos/science/greenhouse_gas_nyc.mp4",
      page: 'science',
      shareURL: 'https://drive.google.com/file/d/1zbftKZlVC4UuA6M_TIPdHPPhVSLgfPwF/view?usp=share_link'
    },
    {
      id: 14,
      title: 'Plastic Free',
      url: "videos/science/plastic_free.mp4",
      page: 'science',
      shareURL: 'https://drive.google.com/file/d/1FJK0yq-jOTLSP0iER_zylYlhsDfaZ_9j/view?usp=share_link'
    },
    // TRENDING VIDEOS ************************
    {
      id: 15,
      title: 'Water-based Society',
      url: "videos/trending/water_humans.mp4",
      page: 'trending',
      shareURL: 'https://drive.google.com/file/d/1G6Z9Qfm7xMscpXKHK2NV7YVVjQZ0l5jQ/view?usp=share_link'
    },
    {
      id: 16,
      title: 'Terrifying Planet',
      url: "videos/trending/scary_planet.mp4",
      page: ['trending', 'science'],
      shareURL: 'https://drive.google.com/file/d/1PPtDz2Eljj4WgBtdsgS5XMKxbJucl5CK/view?usp=share_link'
    },
    {
      id: 17,
      title: 'Mola Mola in the Deep Ocean',
      url: "videos/trending/mola_mola.mp4",
      page: 'trending',
      shareURL: 'https://drive.google.com/file/d/190J8yfxIcpYJUMvR22usyoZHb9debojs/view?usp=share_link'
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
      page: ['trending', 'science'],
      shareURL: 'https://drive.google.com/file/d/17UohK7wAtdauH8p8Fwt-GDj_JnIPxz_D/view?usp=share_link'
    },
  ];

  // Uses State to update if the copy URL button is clicked while also sorting and filtering the db of videos by if the video has the correct prop.page
  // sets the video.page property as the page prop when component is called on html
  const [filteredVideos, setFilteredVideos] = useState(
    videos.filter(video => video.page.includes(props.page)) //filters so that props passed on the page is equial to video.page
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
        setFilteredVideos(updatedVideos); // updates state of copied property based on ID of video clicked
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
          <button className='copyButton' onClick={() => copyToClipboard(video)}>
            {video.copied && 'Copied!'}
            {!video.copied && <FontAwesomeIcon icon={icon({name: "link"})} color="#ffffff" />}
          </button>
        </div>
      ))}
    </div>
  );
}
