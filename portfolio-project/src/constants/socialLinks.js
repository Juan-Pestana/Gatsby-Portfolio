import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaMailBulk
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaMailBulk className="social-icon"></FaMailBulk>,
    url: "mailto:juan.pestana82@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/juan-pestana",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/Juan-Pestana",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/PestanaDev",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
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
