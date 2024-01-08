import React from "react"
import PolicyPage from "../templates/PolicyPage"
import { SeoHeader } from "../components/SeoHeader"
import { graphql, useStaticQuery } from "gatsby"

const AgbPage = () => {
  const {
    strapiRechtliches: { agb },
  } = useStaticQuery(graphql`
    query {
      strapiRechtliches {
        agb: AGB
      }
    }
  `)
  return <PolicyPage text={agb} />
}

export default AgbPage

export const Head = () => <SeoHeader endung="agb" />
