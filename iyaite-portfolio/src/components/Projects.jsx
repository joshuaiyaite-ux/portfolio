import React from 'react'
import pic2 from '../assets/pic2.jpg'
import pic4 from '../assets/pic4.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Househive Sales Management",
      description: "A full-stack sales management solution with React and Node.js",
      image: pic2,
      liveLink: "https://hive-lime-one.vercel.app/",
      githubLink: "https://github.com/joshuaiyaite-ux/Hive"
    },
    {
      id: 2,
      title: "Househub",
      description: "Responsive portfolio website built with React and Vite",
      image: pic4,
      liveLink: "http://househub-ruby.vercel.app/",
      githubLink: "https://github.com/joshuaiyaite-ux/househub"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects