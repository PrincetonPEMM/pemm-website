import type { NextPage } from 'next'
import Script from 'next/script'
import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'tableau-viz': any;
        }
    }
}

const Maps: NextPage = () => {
  return (
    <div>
      <Script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></Script>
      <tableau-viz id="tableauViz" src='https://public.tableau.com/views/maps_16611808858560/Sheet1' device="phone" toolbar="bottom" hide-tabs></tableau-viz>
    </div>
  )
}

export default Maps
