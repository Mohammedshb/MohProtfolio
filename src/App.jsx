import Banner from "./Components/banner/Banner"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import RecentWork from "./Components/RecentWork/RecentWork"
import About from "./Components/ِAbout/About"


function App() {
 

  return (
    <>
      {/* NAVBAR COMPONENT */}
     <Navbar/>
     {/* BANNER COMPONENT */}
     <Banner/>
     {/* ABOUT COMPONENT */}
     <About/>
     {/* FOOTER COMPONENT */}
     <RecentWork/>
     {/* Contact */}
        <Contact/>
     {/* FOOTER COMPONENT */}
     <Footer/>
    </>
  )
}

export default App
