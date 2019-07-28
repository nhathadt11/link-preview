// import metascraperAuthor from 'metascraper-author'
// import metascraperDate from 'metascraper-date'
// import metascraperDescription from 'metascraper-description'
// import metascraperImage from 'metascraper-image'
// import metascraperLogo from 'metascraper-logo'
// import metascraperPublisher from 'metascraper-publisher'
// import metascraperTitle from 'metascraper-title'
// import metascraperUrl from 'metascraper-url'
// import got from 'got'

const metascraper = require('metascraper')([
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo')(),
  require('metascraper-clearbit')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')()
])

const got = require('got')

// ;(async () => {
//   const metadata = await Metascraper.scrapeHtml(html)
//   console.log(metadata)
// })()

// console.log(metadata)

const lookup = async (targetUrl) => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  console.log(metadata)

  return metadata
}

module.exports = lookup
