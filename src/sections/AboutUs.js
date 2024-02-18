import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import { Fade } from "react-awesome-reveal"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const AboutUs = () => {
  const {
    strapiAboutMe: { name, text, bild },
  } = useStaticQuery(graphql`
    query {
      strapiAboutMe {
        name: Name
        text: Text
        bild: Bild {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  return (
    <AboutUsStyle id="aboutus">
      <GatsbyImage
        image={getImage(bild.localFile)}
        alt={bild.alternativeText}
        className="me"
      />
      <div className="text-box">
        <Fade direction="right" duration={500} triggerOnce={true}>
          <h2>{name}</h2>
        </Fade>
        <Fade direction="right" duration={800} triggerOnce={true}>
          <p>{parse(text)}</p>
        </Fade>
      </div>
    </AboutUsStyle>
  )
}

export default AboutUs

const AboutUsStyle = styled.section`
  height: 100vh;
  display: flex;
  padding: var(--space-xxl) var(--space-xxxl);

  .me {
    width: 50%;
    object-fit: cover;
  }

  .text-box {
    padding-top: var(--space-xl);
    padding-left: var(--space-xl);
    width: 50%;
    
    h2 {
      font-size: var(--fs-1);
      font-weight: 600;
      padding-bottom: var(--space-lg);
    }

    p {
      font-weight: 300;
      font-size: var(--fs-4);
      line-height: 1.3;
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
    height: min-content;
    .me {
      width: 100%;
      height: 70vw;
    }

    .text-box {
      padding-left: unset;
      text-align: center;
      width: 100%;
      height: min-content;

      ul {
        li {
          display: flex;
          flex-direction: column;
          span {
            display: none;
          }
        }
      }
    }
  }
`
