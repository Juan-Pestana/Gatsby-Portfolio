import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import Image from "gatsby-image"
// import Gitalk from 'gatsby-plugin-gitalk'
// import Gitalk from "gitalk";

const ComponentName = ({data}) => {

  const {content, title, description, image, slug} = data.blog

  // React.useEffect(() =>{
  //   getComments()
  // }) 

  // const getComments = () => {
  //   const title = title;
  //   const path = `blog/${slug}`;
  //   const url = `https://juanpestana.netlify.app/`;
  //   const gitalk = new Gitalk({
  //     clientID: '35dec51d7a84e28e1359',
  //     clientSecret: '69a414d596cdc6fa2967e9f2cdae95927ef33954',
  //     repo: 'https://github.com/Juan-Pestana/Gatsby-Portfolio',
  //     owner: 'juan-pestana',
  //     admin: ['juan-pestana'],
  //     id: slug,
  //     title: `Comments on '${title}'`,
  //     distractionFreeMode: false
  //   });
  //   gitalk.render("gitalk");
  // }

  
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
        {/* <div className="comments">
          <CommentCount config={disqusConfig} placeholder={'...'} />
          <Disqus config={disqusConfig} />
          <div id="gitalk"></div>
          
        </div> */}
        

        <Link to='/blog' className='btn center-btn'>Blog</Link>
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
