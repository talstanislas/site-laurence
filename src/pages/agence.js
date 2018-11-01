import React from 'react'
import './Agence.css'
import Menu from '../components/menu.js'
import Layout from '../components/layout'

const agencyPage = () => (
  <Layout>
    <div className="container agencyPage">
      <div className="container first">
        <img className="logo" src={require('../img/180921-IM-1-300DPI.jpg')} />
      </div>
      <div className="barre" />
      <div className="container second">
        <div className="text">
          <div>
            <small>
              Accenderat super his incitatum propositum ad nocendum aliqua
              mulier vilis, quae ad palatium ut poposcerat intromissa insidias
              ei latenter obtendi prodiderat a militibus obscurissimis. quam
              Constantina exultans ut in tuto iam locata mariti salute muneratam
              vehiculoque inpositam per regiae ianuas emisit in publicum, ut his
              inlecebris alios quoque ad indicanda proliceret paria vel maiora.
            </small>
          </div>
        </div>
        <img
          className="secondPic"
          src={require('../img/180921-IM-3-300DPI.jpg')}
        />
      </div>
      <div className="barre" />
      <div className="container second last">
        <img
          className="secondPic"
          src={require('../img/180921-IM-2-300DPI.jpg')}
        />
        <div className="text">
          <div>
            <small>
              Accenderat super his incitatum propositum ad nocendum aliqua
              mulier vilis, quae ad palatium ut poposcerat intromissa insidias
              ei latenter obtendi prodiderat a militibus obscurissimis. quam
              Constantina exultans ut in tuto iam locata mariti salute muneratam
              vehiculoque inpositam per regiae ianuas emisit in publicum, ut his
              inlecebris alios quoque ad indicanda proliceret paria vel maiora.
            </small>
          </div>
        </div>
      </div>
      <div className="barre" />
      <div className="container third">
        <img
          className="thirdPic"
          src={require('../img/180921-IM-5-300DPI.jpg')}
        />
        <div className="thirdText">
          <small>
            Accenderat super his incitatum propositum ad nocendum aliqua mulier
            vilis, quae ad palatium ut poposcerat intromissa insidias ei
            latenter obtendi prodiderat a militibus obscurissimis. quam
            Constantina exultans ut in tuto iam locata mariti salute muneratam
            vehiculoque inpositam per regiae ianuas emisit in publicum, ut his
            inlecebris alios quoque ad indicanda proliceret paria vel maiora.
          </small>
        </div>
      </div>
    </div>
  </Layout>
)

export default agencyPage
