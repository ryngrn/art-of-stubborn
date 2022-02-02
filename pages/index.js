import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Art of Stubborn  |  Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          <img src="/stubborn-mule.png" class="coming-soon-image" />
        </p>
      </main>

      <Footer />
    </div>
  )
}
