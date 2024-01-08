import React from "react"
import PolicyPage from "../templates/PolicyPage"
import { SeoHeader } from "../components/SeoHeader"
import { graphql, useStaticQuery } from "gatsby"

const DatenschutzPage = () => {
  const {
    strapiRechtliches: { datenschutz },
  } = useStaticQuery(graphql`
    query {
      strapiRechtliches {
        datenschutz: Datenschutzerklaerung
      }
    }
  `)
  return <PolicyPage text={datenschutz} />
}

export default DatenschutzPage

export const Head = () => <SeoHeader endung="datenschutz" />
