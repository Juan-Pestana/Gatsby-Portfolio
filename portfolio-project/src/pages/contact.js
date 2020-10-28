import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title = 'Contacta' description='formulario de contacto'/>
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contáctame</h3>
          <form action="https://formspree.io/f/xpzorzbk" method="POST">
            <div className="form-group">
              <input type="text" name='Nombre' placeholder='Nombre' className='form-control'/>
              <input type="text" name='email' placeholder='Email' className='form-control'/>
              <textarea name='message' rows='5' placeholder='Mensaje' className='form-control'></textarea>
            </div>
            <button type='submit' className='submit-btn btn'>Enviar</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
