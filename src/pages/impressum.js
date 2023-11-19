import React from "react"
import PolicyPage from "../templates/PolicyPage"
import { SeoHeader } from "../components/SeoHeader"

const impressum = () => {
  return <PolicyPage text="Impressum" />
}

export default impressum

export const Head = () => <SeoHeader endung="impressum" />
