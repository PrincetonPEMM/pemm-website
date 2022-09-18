import type { NextPage } from 'next'
import EmbeddedMap from '../components/elements/embeddedMap';
import Script from 'next/script'

const Maps: NextPage = () => {
  return (
    <div>
      <Script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></Script>
      <EmbeddedMap />
    </div>
  )
}

export default Maps
