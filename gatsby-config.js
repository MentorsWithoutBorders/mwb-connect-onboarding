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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MWB Connect Onboarding',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/mwb-icon.png', 
        crossOrigin: `use-credentials`,
      },
    },    
  ],
}
