import React from "react"
import styled from "styled-components"
import WorkCard from "../components/WorkCard"
import useDevice from "../hooks/useDevice"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { graphql, useStaticQuery } from "gatsby"

const Work = () => {
  const {
    strapiArbeit: { titel, untertitel, taetigkeiten },
  } = useStaticQuery(graphql`
    query {
      strapiArbeit {
        titel: Titel
        untertitel: Untertitel
        taetigkeiten: Taetigkeiten {
          beschreibung: Beschreibung
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
    }
  `)
  const { mobile, tablet_sm, tablet, laptop } = useDevice()

  let slidesPerView = 3

  if (laptop || tablet || tablet) slidesPerView = 2
  if (tablet_sm || mobile) slidesPerView = 1
  return (
    <WorkStyle id="work">
      <h2>{titel}</h2>
      <p className="sub">{untertitel}</p>

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        autoHeight={true}
        spaceBetween={50}
        slidesPerView={slidesPerView}
      >
        {taetigkeiten.map((taetigkeit, index) => (
          <SwiperSlide key={index}>
            <WorkCard data={taetigkeit} />
          </SwiperSlide>
        ))}
      </Swiper>
    </WorkStyle>
  )
}

export default Work

const WorkStyle = styled.section`
  h2 {
    font-weight: 600;
    font-size: var(--fs-2);
    text-align: center;
    padding-top: var(--space-xxl);
  }

  .sub {
    padding-top: var(--space-xs);
    padding-bottom: var(--space-xxl);
    font-size: var(--fs-3);
    font-weight: 400;
    text-align: center;
  }

  .swiper {
    padding: 0 var(--space-xxxl);
    padding-bottom: var(--space-xxl);
  }
`
