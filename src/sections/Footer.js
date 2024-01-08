import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

const Footer = () => {
  const {
    strapiFooter: { links },
  } = useStaticQuery(graphql`
    query {
      strapiFooter {
        links :Links
      }
    }
  `)
  return (
    <FooterStyle>
      <Link to="/">{links}</Link>
      <div className="links">
        <Link className="left" to="/impressum">
          Impressum
        </Link>
        <Link className="middle" to="/agb">
          AGB
        </Link>
        <Link className="right" to="/datenschutz">
          Datenschutzerklärung
        </Link>
      </div>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.footer`
  color: white;
  background-color: black;
  padding: var(--space-lg) var(--space-xxxl);
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: var(--fs-3);
    color: white;
    text-decoration: none;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .links {
    display: flex;
    a {
      font-size: var(--fs-5);
      font-weight: 300;
      text-decoration: none;
      color: white;

      &.left {
        padding-right: var(--space-xs);
        border-right: 2px white solid;
      }

      &.middle {
        padding: 0 var(--space-xs);
        border-right: 2px white solid;
      }

      &.right {
        padding-left: var(--space-xs);
      }
      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  @media ${device.tablet} {
    justify-content: unset;
    flex-direction: column;
    gap: var(--space-xxxl);
    padding: var(--space-xxxl);
    .links {
      flex-direction: column;
      gap: var(--space-lg);
      a {
        text-align: center;
        &.left,
        &.middle,
        &.right {
          padding: unset;
          border: unset;
        }
      }
    }
  }
`
