import './App.css'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import CrosshairCursor from "./components/Crosshair";

function App() {


  return (
    <>
      <CrosshairCursor />
      <div className="navbar"></div>
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
