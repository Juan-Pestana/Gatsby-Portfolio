import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// 

const Blog = ({
  data:{allStrapiBlogs: {nodes:blogs},
  }
}) => {
  return (
    <Layout>
    <SEO title = 'Blog' description='Blog de Juan Pestana, programación, historias y otras batallas'/>
      <section className="blog-page">
        <Blogs blogs={blogs} title='blog'/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
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

export default Blog
