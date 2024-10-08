/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-offline",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_BACKEND_URL,
        accessToken: process.env.GATSBY_BACKEND_API_TOKEN,
        singleTypes: [
          "footer",
          "global",
          "rechtliches",
          "seo",
          "willkommen",
          {
            singularName: "about-me",
            queryParams: {
              populate: ["Bild", "Lebenslauf"],
            },
          },
          {
            singularName: "arbeit",
            queryParams: {
              populate: ["Taetigkeiten.Bild"],
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: ["Logo"],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          placeholder: `blurred`,
          breakpoints: [411, 768, 1400, 1921],
        },
      },
    },
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        formats: ["woff2"],
        usePreload: true,
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "html", "js", "svg", "py"],
      },
    },
  ],
}
