import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const SeoHeader = ({ endung, children }) => {
  const {
    strapiSeo,
    strapiSeo: { webseitenTitel, webseitenUrl, favicon },
  } = useStaticQuery(graphql`
    {
      strapiSeo {
        webseitenTitel: WebseitenTitel
        webseitenUrl: WebseitenUrl
        favicon {
          formats {
            small {
              url
            }
          }
        }
        agb: Agb {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        datenschutz: Datenschutzerklaerung {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        index: Homepage {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
        impressum: Impressum {
          desc: SeitenBeschreibung
          title: SeitenTitel
        }
      }
    }
  `)

  const can = endung !== "index" ? webseitenUrl + "/" + endung : webseitenUrl
  return (
    <>
      <title>
        {strapiSeo[endung].title} | {webseitenTitel}
      </title>
      <meta name="description" content={strapiSeo[endung].desc} />
      <link rel="stylesheet" type="text/css" href="/fonts/fontface.css" />
      <link rel="icon" href={process.env.GATSBY_BACKEND_URL + favicon.formats.small.url} />
      <link rel="canonical" href={can} />
      {children}
    </>
  )
}
