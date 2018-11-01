const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const campaignTemplate = path.resolve('src/templates/book-campagne.js')
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              html
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
  ).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: campaignTemplate,
      })
    })
  })
}
