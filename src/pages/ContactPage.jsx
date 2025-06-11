import React from 'react'
import Header from '../components/Headers/Header'
import Footer from '../components/Footer/Footer'


const ContactPage = () => {
    return (
         <div className="root">
            <div className='main-layout'>
            <Header/>
            <div className='content'>
                    <div className='page'>
            <div>
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                
                <h2>General Enquiries</h2>
                <h4>Vivekanand College Main Campus</h4>
                <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071</p>
                India
                <p>Phone: **+91 12345 67890**<br></br>
                    Email: **info@vivekanandcollege.edu**<br></br>  
                    Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

                <h2>Admissions Office</h2>
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
                    Phone: +91 98765 43210<br></br>
                    Email: admissions@vivekanandcollege.edu</p>

                <h2>Student Support Services</h2>
                <p>For current student support, academic advising, or general assistance:<br></br>
                    Phone: +91 87654 32109<br></br>
                    Email: studentsupport@vivekanandcollege.edu</p>

                <h2>Find Us on the Map</h2>
                <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
                {/* map add */}
            </div>
            </div>
            </div>
           
                    <Footer/>
                    </div>
        </div>
    )
}
export default ContactPage