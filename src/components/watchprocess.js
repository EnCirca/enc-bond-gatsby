import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const WatchProcess = (props) => {

    const data = useStaticQuery(graphql`
    query {
        __typename
    }
  `)

    return (
        <div>
            {data}
        </div>
    )
}

export default WatchProcess