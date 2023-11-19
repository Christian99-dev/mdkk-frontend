import React from "react"
import styled from "styled-components"
import Footer from "../sections/Footer"
import Root from "../components/Root"

const PolicyPage = ({ text }) => {
  return (
    <Root>
      <PolicyPageStyle>
        <div className="text">{text}</div>
        <Footer />
      </PolicyPageStyle>
    </Root>
  )
}

export default PolicyPage

const PolicyPageStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .text {
    flex: 1;
  }
`
