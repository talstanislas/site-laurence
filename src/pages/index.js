import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <div className="container contactContainer">
        <br />
        <br />
        <br />
        <br />

        <h2>HOME PAGE</h2>
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
    </div>
  </Layout>
)

export default IndexPage
