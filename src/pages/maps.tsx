import type { NextPage } from 'next'
import EmbeddedMap from '../components/elements/embeddedMap';

const Maps: NextPage = () => {
  return (
    <div>
      <script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
      <EmbeddedMap />
    </div>
  )
}

export default Maps
