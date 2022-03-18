require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'MWB Connect Onboarding',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-source-pg',
      options: {
        connectionString: process.env.DB_CONN_STRING,
        schema: 'public',
      },
    },
  ],
}
