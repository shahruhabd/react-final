import React from 'react'
import Header from "../components/Header"
import ContentBlock from '../components/ContentBlock'
import FunctionalComponent from '../components/FunctionalComponent'
import ClassComponent from '../components/ClassComponent';
import ControlledForm from '../components/ControlledForm';
import UncontrolledForm from '../components/UncontrolledForm';
import '../css/main.css'

const Main = () => {
  return (
    <div className='wrapper'>
      <Header />
      <ContentBlock />
      <FunctionalComponent message="Hello from props!" />
      <ClassComponent />
      <ControlledForm />
      <UncontrolledForm />
    </div>
  )
}

export default Main