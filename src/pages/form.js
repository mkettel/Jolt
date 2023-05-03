import '../css/home.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Header } from '../components/header';
import { VideoList } from '../components/video'


export function Form({ videos }) {

  console.log(videos)

  // Need to only allow Jade to be able to see the component.

  // 1. input for Jade to provide all needed fields to add a video to the list
  // 2. Takes the value from the input and then stores it in various states?
  // 3. OnSubmit of the button then it will send and add the data to the original video array

  return (
    <>
      <VideoList />
      <h2>Video Add Form</h2>
    </>
  )
}
