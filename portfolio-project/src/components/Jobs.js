import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"


const query = graphql`
  {
    allStrapiTrabajos(sort: {fields: strapiId, order: DESC}) {
      nodes {
        empresa
        fecha
        descr {
          id
          nombre
        }
        puesto
      }
    }
  }
`

const Jobs = () => {

  const data = useStaticQuery(query)
  const {
    allStrapiTrabajos: {nodes:jobs},
  } = data

  const[value,setValue] = React.useState(0)

  const {empresa, fecha, puesto, descr, strapiID} = jobs[value]
  
  console.log(empresa, fecha, puesto, descr);

  return (
    <section className='section jobs'>
      <Title title='experiencia'/>
      <div className="jobs-center">
        <div className="btn-container">
        {jobs.map((job, index) => {
          return <button 
          onClick= {()=>setValue(index)}
          key={index} 
          className={`job-btn ${index === value && "active-btn"}`}>{job.empresa}</button>

          })}
        </div>
        <article className='job-info'>
          <h3>{puesto}</h3>
          <h4>{empresa}</h4>
          <p className='job-date'>{fecha}</p>
          {descr.map((item)=>{
            return <div key={item.id} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{item.nombre}</p>
            </div>
          })}
        </article>
      </div>
      <Link to='/about' className='btn center-btn'>Más información</Link>
    </section>
  )
}

export default Jobs
