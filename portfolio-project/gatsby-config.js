/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Juan Pestana Portfolio programador web",
    description: "Portfolio de los proyectos de desarrollo web de Juan Pestana",
    author: "Juan Pestana",
    linkedInUrl: "https://www.linkedin.com/in/juan-pestana",
    image: "/portfolio.png",
    siteUrl: "https://juanpestana.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-gitalk`,
      options: {
        clientID: '35dec51d7a84e28e1359',
        clientSecret: '69a414d596cdc6fa2967e9f2cdae95927ef33954',
        repo: 'https://juanpestana.netlify.app/',
        owner: 'juan-pestana',
        admin: ['juan-pestana'],

        distractionFreeMode: false  // Facebook-like distraction free mode
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`trabajos`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
  ],
}
