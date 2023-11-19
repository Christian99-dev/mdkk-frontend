import React from "react"
import PolicyPage from "../templates/PolicyPage"
import { SeoHeader } from "../components/SeoHeader"

const datenschutz = () => {
  return <PolicyPage text="Datenschutzerlärung" />
}

export default datenschutz

export const Head = () => <SeoHeader endung="datenschutz" />
