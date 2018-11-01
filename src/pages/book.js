import React from 'react'
import { Link, graphql } from 'gatsby'
import Menu from '../components/menu.js'
import './book.css'
import Layout from '../components/layout'

const Book = ({ data }) => (
  <Layout>
    <div className="container campagnePicture">
      {data.allMarkdownRemark.edges.map(post => (
        <Link to={post.node.frontmatter.path} key={post.node.id}>
          <div className="wrapper firstWrap">
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
          </div>
        </Link>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BookIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
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
    }
  }
`

export default Book
