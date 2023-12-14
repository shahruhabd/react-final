import React from 'react'
import Header from "../components/Header"
import ContentBlock from '../components/ContentBlock'

import '../css/main.css'
import FunctionalComponent from '../components/FunctionalComponent'

const Main = () => {
  return (
    <div className='wrapper'>
        <Header />
        <ContentBlock />
        <FunctionalComponent />
    </div>
  )
}

export default Main