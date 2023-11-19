import React from "react"
import PolicyPage from "../templates/PolicyPage"
import { SeoHeader } from "../components/SeoHeader"

const agb = () => {
  return <PolicyPage text="AGB" />
}

export default agb

export const Head = () => <SeoHeader endung="agb" />
