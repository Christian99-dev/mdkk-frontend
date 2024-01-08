import React from "react"
import PolicyPage from "../templates/PolicyPage"
import { SeoHeader } from "../components/SeoHeader"
import { graphql, useStaticQuery } from "gatsby"

const ImpressumPage = () => {
  const {
    strapiRechtliches: { impressum },
  } = useStaticQuery(graphql`
    query {
      strapiRechtliches {
        impressum: Impressum
      }
    }
  `)
  return <PolicyPage text={impressum} />
}

export default ImpressumPage

export const Head = () => <SeoHeader endung="impressum" />
