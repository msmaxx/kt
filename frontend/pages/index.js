import Head from 'next/head'
import SimpleSlider from "../components/popular_products";
import Hero from "../components/hero";

export default function Home() {
  return (
      <div>
          <Head>
              <title>PRICEx Marketplace</title>
          </Head>

          <Hero/>

          <SimpleSlider/>
      </div>
  )
}
