import type { NextPage } from 'next'
import Mirador from '../components/libs/mirador/mirador'


const Paintings: NextPage = () => {
  const config = {
    id: 'iiifTest',
    window: {
      allowClose: false,
    },
    workspaceControlPanel: {
      enabled: false,
    },
    windows: [
    {
      loadedManifest: '/kebranegast.json',
    },
    {
      loadedManifest: '/page.json',
    },
    {
      loadedManifest: 'https://api.bl.uk/metadata/iiif/ark:/81055/vdc_100054876611.0x000001/manifest.json',
    },
    {
      loadedManifest: 'https://api.bl.uk/metadata/iiif/ark:/81055/vdc_100054876611.0x000001/manifest.json',
    },
    {
      loadedManifest: 'https://figgy.princeton.edu/concern/scanned_resources/6717f91a-c1f9-473a-8e62-25d6d6a1bc0f/manifest',
    }],
  };
  return (
    <div className="h-full">
        <h1>
          Paintings
        </h1>
        <div className="relative h-full w-auto">
          <div id="iiifTest"> </div>
          <Mirador config={config} />
        </div>
    </div>
  )
}

export default Paintings
