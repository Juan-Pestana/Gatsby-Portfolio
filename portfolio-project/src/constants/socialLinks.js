import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaMailBulk
} from "react-icons/fa"

const data = [
  {
    id: 1,
    name: 'Mail',
    icon: <FaMailBulk alt='send mail' className="social-icon"></FaMailBulk>,
    url: "mailto:juan.pestana82@gmail.com",
  },
  {
    id: 2,
    name: 'Linkedin',
    icon: <FaLinkedin alt='Linkedin Profile' className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/juan-pestana",
  },
  {
    id: 3,
    name: 'Github',
    icon: <FaGithubSquare alt='Github Profile' className="social-icon"></FaGithubSquare>,
    url: "https://github.com/Juan-Pestana",
  },
  {
    id: 4,
    name: 'Twitter',
    icon: <FaTwitterSquare alt='Twitter Profile' className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/PestanaDev",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target='_blank' id={link.name} rel='noopener noreferrer'  className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
