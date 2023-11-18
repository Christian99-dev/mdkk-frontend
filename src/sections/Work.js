import React from "react"
import styled from "styled-components"
import WorkCard from "../components/WorkCard"
import useDevice from "../hooks/useDevice"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const data = [
  {
    text: "Die Abwassertechnik spielt eine entscheidende Rolle für die Nachhaltigkeit, indem sie Abwässer effektiv reinigt und so die Umwelt vor Verschmutzung schützt.",
    img: "/mock/pipe.jpg",
  },
  {
    text: "Die Abwassertechnike Umwelt vor Verschmutzung schützt.",
    img: "/mock/pipe.jpg",
  },
  {
    text: "Die Abwassertechnik spielt eine entschgt und so die Umwelt vor Verschmutzung schützt.",
    img: "/mock/pipe.jpg",
  },
]

const Work = () => {
  const { mobile, tablet_sm, tablet, laptop, desktop, desktopXL } = useDevice()

  let slidesPerView = 3

  if (laptop || tablet || tablet) slidesPerView = 2
  if (tablet_sm || mobile) slidesPerView = 1
  return (
    <WorkStyle>
      <h2>Meine Arbeit</h2>
      <p className="sub">Preis</p>

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        autoHeight={true}
        spaceBetween={50}
        slidesPerView={slidesPerView}
      >
        <SwiperSlide>
          <WorkCard data={data[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <WorkCard data={data[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <WorkCard data={data[2]} />
        </SwiperSlide>
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

  .cards-row {
    background-color: red;
    display: flex;
    gap: var(--space-lg);
    padding: 0 var(--space-xxxl);
  }

  .swiper {
    padding: 0 var(--space-xxxl);
    padding-bottom: var(--space-xxl);

    .swiper-pagination {
      /* top: 2px; */
    }
  }
`
