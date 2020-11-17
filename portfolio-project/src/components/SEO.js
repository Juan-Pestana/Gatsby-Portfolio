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
        twitterUsername
        author
      }
    }
  }
`

const SEO = ({title, description}) => {

  const{site} = useStaticQuery(query)

  const {siteDescription, image, siteUrl, siteTitle, twitterUsername} = site.siteMetadata

  return <Helmet htmlAttributes={{lang: "es"}} title={`${title} | ${siteTitle}`}>
    <meta name='description' content={description || siteDescription}></meta>
    <meta name='image' content={image} />
    <meta name='twitter:card' content='summary_large_image'/>
    <meta name='twitter:creator' content={twitterUsername}/>
    <meta name='twitter:title' content={siteTitle}/>
    <meta name='twitter:description' content={siteDescription}/>
    <meta name='twitter:image' content={`${siteUrl}${image}`}/>
  </Helmet>
}

export default SEO
