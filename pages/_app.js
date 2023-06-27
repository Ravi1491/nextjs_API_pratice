import Layout from '../comps/Layout'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
    <head>
      <title>Next.js</title>
    </head>
    <body>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </body>
  </html>
  )
}

export default MyApp
