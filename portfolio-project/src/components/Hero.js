import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

import HeroImg from "./HeroImg"


// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `

const Hero = () => {
  const {
    file:
      {childImageSharp:{fluid},
    },
  } = useStaticQuery(query)


 
  return <header className='hero'>
    <div className="section-center hero-center">
      <article className='hero-info'>
       <div>
          <div className="underline"></div>
          <h1>Juan Pestana</h1>
          <h4>Desarrollador web </h4>
          <Link to='/contact' className='btn'>Contacta</Link>
          <SocialLinks/>
       </div>
        
      </article>
       
          <HeroImg />
        
        

      {/* <Image fluid={fluid} className='hero-img'/> */}
    </div>
  </header>
}

export default Hero
