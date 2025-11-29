import React from 'react'
import pic1 from '../assets/pic1.jpg'
import '../styles/about.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Welcome to Iyaite Networks! I'm Joshua Iyaite, a passionate developer 
              and network specialist dedicated to creating innovative digital solutions 
              that make a difference.
            </p>
            <p className="about-paragraph">
              With expertise in modern web technologies and network infrastructure, 
              I build robust, scalable applications that meet the evolving needs of 
              today's digital landscape.
            </p>
            
            <div className="skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Vite</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Networking</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src={pic1} 
              alt="Joshua Iyaite" 
              style={{width: '100%', borderRadius: '10px'}}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About