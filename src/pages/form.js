// import home css page
import '../css/home.css';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Header } from '../components/header';
import { useState } from 'react';
import { VideoForm } from '../components/video';



export const AddVideoForm = () => {

  return (
    <>
      <VideoForm />
    </>
  )
}
