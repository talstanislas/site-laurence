import React from 'react'
import './Contact.css'
import Menu from '../components/menu.js'
import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <div className="container contactContainer">
      <img
        className="contactPicture"
        src={require('../img/180921-IM-2-300DPI.jpg')}
      />
      <div className="contactInfos">
        <div className="contactMail">
          <text>laurence@gouttefangeas.com</text>
        </div>
        <div className="contactName">
          <text>Laurence Gouttefangeas - </text>
          <text> 06.13.23.52.00</text>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
