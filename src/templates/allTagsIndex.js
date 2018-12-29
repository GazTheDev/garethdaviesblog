import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default ({ data, pageContext }) => {
  return (
    <Layout>
      <h3 style={{ textAlign: `center` }}>List of Tags</h3>
      <ul>
        {pageContext.tags.map(tag => {
          const path = `/tags/${tag}`

          return (
            <h1>
              <li style={{
                color: ` white `, padding: `15px,32px`, textAlign: `center`, textDecoration: `none`
              }} key={tag} >
                <Link to={path}>{tag}</Link>
              </li>
            </h1>

          )
        })}
      </ul>
    </Layout>
  )
}
