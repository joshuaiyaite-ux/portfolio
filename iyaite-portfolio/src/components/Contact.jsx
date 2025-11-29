import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h3>Phone</h3>
                <p>0759221634</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h3>Email</h3>
                <p>joshuaiyaite@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <div>
                <h3>Website</h3>
                <p>www.iyaitenetworks.com</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact