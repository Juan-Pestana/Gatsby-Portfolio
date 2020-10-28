import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"




const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteUrl
        linkedInUrl
        image
        siteDescription: description
        author
      }
    }
  }
`

const SEO = ({title, description}) => {

  const{site} = useStaticQuery(query)

  const {siteDescription, author, image, linkedInUrl, siteUrl, siteTitle} = site.siteMetadata

  return <Helmet htmlAttributes={{lang: "es"}} title={`${title} | ${siteTitle}`}>
    <meta name='description' content={description || siteDescription}></meta>
    <meta name='image' content={image} />
  </Helmet>
}

export default SEO
