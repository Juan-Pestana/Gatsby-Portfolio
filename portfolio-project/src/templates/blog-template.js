import React from "react"
import { graphql, Link } from "gatsby"
import HyvorTalk from 'hyvor-talk-react'
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import Image from "gatsby-image"






const ComponentName = ({data}) => {

  const {content, title, description, image} = data.blog




  
  return (<Layout>
      <SEO title={title} description={description}/>
    <section className='blog-template'>
    <div className="image-wrapper">
        <Image fluid={image.childImageSharp.fluid} ></Image>
        </div>
      <div className="section-center">
        
      <h1 className='blog-title'>{title}</h1>
        <article className="blog-content">
          
          <ReactMarkdown source={content} />
        </article>

        <Link to='/blog' className='btn center-btn'>Blog</Link>

        <div className="comments">
          <HyvorTalk.Embed websiteId={2391} />
        </div>

        
      </div>

    </section>
  </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
      slug
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName
