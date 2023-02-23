import React, {useEffect, useState} from 'react'

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MeCard from "./components/MeCard";
import Projects from "./components/Projects";
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <React.Fragment>
      <Navbar/>
      <Banner/>
      <MeCard/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </React.Fragment>
  )
}

export default App


