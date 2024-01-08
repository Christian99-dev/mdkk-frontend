import React from "react"
import styled from "styled-components"
import Footer from "../sections/Footer"
import Root from "../components/Root"
import parse from "html-react-parser"

const PolicyPage = ({ text }) => {
  return (
    <Root>
      <PolicyPageStyle>
        <TextBoxStyle className="text">{parse(text)}</TextBoxStyle>
        <Footer />
      </PolicyPageStyle>
    </Root>
  )
}

const TextBoxStyle = styled.div`
  h1 {
    font-size: var(--fs-2);
    padding-bottom: var(--space-lg);
  }

  h2 {
    font-size: var(--fs-3);
    padding-bottom: var(--space-md);
  }

  h3 {
    font-size: var(--fs-4);
    padding-bottom: var(--space-sm);
  }

  h4,
  p,
  a,
  li {
    font-size: var(--fs-5);
    padding-bottom: var(--space-sm);
  }

  padding: var(--space-xl);
  overflow: scroll;
`

export default PolicyPage

const PolicyPageStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .text {
    flex: 1;
  }
`
