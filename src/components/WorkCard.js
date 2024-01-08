import React from "react"
import styled from "styled-components"
import Parallax from "./Parallax"
import { device } from "../theme/breakpoints"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const WorkCard = ({ data: { beschreibung, bild } }) => {
  return (
    <WorkCardStyle>
      <div className="image-wrapper">
        <Parallax strength={199}>
          <GatsbyImage
            image={getImage(bild.localFile)}
            alt={bild.alternativeText}
            className="img"
          />
        </Parallax>
      </div>
      <p>{beschreibung}</p>
    </WorkCardStyle>
  )
}

export default WorkCard

const WorkCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 60vh; // bestimmt höhe von WorkCard
    img {
      object-fit: cover;
    }
  }

  p {
    display: block;
    height: min-content;
    width: 100%;
    padding-top: var(--space-md);
    padding-right: var(--space-md);
    color: black;
    font-size: var(--fs-5);
    font-weight: 500;
    line-height: 1.7;
    text-align: left;
  }

  @media ${device.tablet_sm} {
    p {
      text-align: center;
      padding-bottom: var(--space-md);
      padding-right: 0;
    }
  }
`
