import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import AdmissionPage from './pages/AdmissionPage'
import NotFoundPage from './pages/NotFoundPage'
import "./styles/pages.css"
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'
import { useState } from 'react'


const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sonali Yuvraj Malavi"
          studentPhotoUrl="\images\Sonali.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div >
      <title>Excellent in OJT</title>
      <div className='App'>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
              <Route path="/aboutpage"element={<AboutPage/>}/>
              <Route path="/coursespage" element={<CoursesPage/>}/>
              <Route path="/contactpage" element={<ContactPage/>}/>
              <Route path="/admissionpage" element={<AdmissionPage/>}/>
              <Route path="/notfoundpage" element={<NotFoundPage/>} />
          </Routes>
          
      </BrowserRouter>
        </div>
        <ChatbotComponent/>
    </div>
    </>
  )
}
export default App