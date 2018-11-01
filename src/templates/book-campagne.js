import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Menu from '../components/menu'
import './book-campagne.css'
import Layout from '../components/layout'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="container">
        <div className="campagnePage">
          <div className="firstCampaignRow">
            <img
              className="firstCampaignRowPic"
              src={post.frontmatter.picture}
            />
            <div className="overlay">
              <div className="campagnTitle">{post.frontmatter.title}</div>
              <div className="campagnDescription">
                <text>{post.frontmatter.description}</text>
              </div>
            </div>
          </div>
          <div className="trait" />
          <div className="secondRow">
            <img
              className="secondRowPic"
              src={post.frontmatter.picture1}
              alt="L'image n'a pas chargé"
            />
            <img
              className="secondRowPic n°2"
              src={post.frontmatter.picture2}
              alt="L'image n'a pas chargé"
            />
          </div>
          <div className="trait" />
          <div className="thirdRow">
            <img
              className="thirdRowPic"
              src={post.frontmatter.picture3}
              alt="L'image n'a pas chargé"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

{
  /* <div className="wrapper firstWrap">
<img
  className="picture"
  src={post.node.frontmatter.picture}
  alt="noo"
/>
<div className="overlay">
  <div className="campagnTitle">{post.node.frontmatter.title}</div>
  <div className="campagnDescription">
    <text>{post.node.frontmatter.description}</text>
  </div>
</div>
</div> */
}

export const postQuery = graphql`
  query CampagneByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        name
        picture
        picture1
        picture2
        picture3
        picture4
        picture5
        description
      }
    }
  }
`
