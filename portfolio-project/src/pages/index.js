import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"



export default ({data}) => {

  const {allStrapiProjects:{nodes:projects},
        allStrapiBlogs:{nodes:blogs}} = data

  return (
  <Layout>
    <Hero/>
    <Services/>
    <Jobs/>
    <Projects projects={projects} title='proyectos' showLink/>
    <Blogs blogs={blogs} title='últimos artículos' showLink/>
  </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        github
        id
        url
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        description
        date(formatString: "DD-MM-YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
// 
