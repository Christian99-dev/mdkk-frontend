import React from "react"
import Root from "../components/Root"
import Hero from "../sections/Hero"
import { SeoHeader } from "../components/SeoHeader"
import Work from "../sections/Work"
import Footer from "../sections/Footer"

const IndexPage = () => {
  return (
    <Root>
      <header></header>
      <main>
        <Hero />
        <Work />
      </main>
      <Footer />
    </Root>
  )
}

export default IndexPage

export const Head = () => <SeoHeader endung="index" />
