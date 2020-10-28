import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const ProjectsPage = ({data:{allStrapiProjects:{nodes:projects}}}) => {
  return (
    <Layout>
      <SEO title = 'Proyectos' description='Proyectos Web Juan Pestana'/>
      <section className="projects-page">
        <Projects projects={projects} title='todos los proyectos'/>
      </section>

    </Layout>
  )

    
    
}

export const query = graphql`
  {
    allStrapiProjects {
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
  }
`


export default ProjectsPage
