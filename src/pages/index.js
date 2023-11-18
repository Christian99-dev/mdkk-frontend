import React from "react"
import Root from "../components/Root"
import Hero from "../components/Hero"
import { SeoHeader } from "../components/SeoHeader"

const IndexPage = () => {
  return (
    <Root>
      <header>
      </header>
      <main>
        <Hero />
      </main>
      <footer>
      </footer>
    </Root>
  )
}

export default IndexPage

export const Head = () => <SeoHeader endung="index"/>
