const rucksack = require("rucksack-css")
const lost = require("lost")
const autoprefixer = require("autoprefixer")
const rupture = require("rupture")

const gatsbySourceFilesystemImages = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images`,
  },
}

const gatsbySourceFilesystemFonts = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `fonts`,
    path: `${__dirname}/static/fonts`,
  },
}

const gatsbyPluginPageCreator = {
  resolve: `gatsby-plugin-page-creator`,
  options: {
    path: `${__dirname}/src/pages`,
    ignore: {
      patterns: [`**/*`],
    },
  },
}

const gatsbyPluginStylus = {
  resolve: "gatsby-plugin-stylus",
  options: {
    postCssPlugins: [rucksack(), lost(), autoprefixer()],
    use: [rupture()],
  },
}

module.exports = {
  plugins: [
    gatsbySourceFilesystemImages,
    gatsbySourceFilesystemFonts,
    gatsbyPluginPageCreator,
    gatsbyPluginStylus,
    `gatsby-plugin-sharp`,
    `gatsby-env-variables`,
    `gatsby-alias-imports`,
    `gatsby-optional-chaining`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dynamic-routes`,
  ],
}
