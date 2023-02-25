import React, {useEffect, useState} from 'react'

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MeCard from "./components/MeCard";
import Projects from "./components/Projects";
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {

  try {
    const response = await fetch(BACKEND_URL + "/*", {
        method: "GET",
        headers: {"Content-Type": "text/html"},
        body: {}
    });
    if (response.ok) {
        alert("Email sent!");
    }
} catch (error) {
    console.log(error);
}

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


