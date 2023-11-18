import React from "react"
import styled from "styled-components"

const WorkCard = ({ data: { text, img } }) => {
  return (
    <WorkCardStyle>
      <img className="img" src={img} alt="img" />
      <p>{text}</p>
    </WorkCardStyle>
  )
}

export default WorkCard

const WorkCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 60vh; // bestimmt höhe von WorkCard
    object-fit: cover;
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
`
