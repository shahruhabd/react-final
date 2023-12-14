import React from 'react'
import Header from "../components/Header"
import ContentBlock from '../components/ContentBlock'

import '../css/main.css'

const Main = () => {
  return (
    <div className='wrapper'>
        <Header />
        <ContentBlock />
    </div>
  )
}

export default Main