import type { NextPage } from 'next'
import React from 'react';
import ImageGallery from 'react-image-gallery';

const IMAGES = [
  {
    original: "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00004e/full/400,/0/default.jpg",
    thumbnail: "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00004f/full/400,/0/default.jpg",
  },
  {
    original: "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x000074/full/400,/0/default.jpg",
    thumbnail: "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00007b/full/400,/0/default.jpg",
  },
  {
    original: "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x000084/full/400,/0/default.jpg",
    thumbnail: "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000027/full/400,/0/default.jpg",
  },
];

const Stories: NextPage = () => {
  return (
    <div>
      <h1>
        Stories
      </h1>
      <div className="flex space-x-10 flex-wrap overflow-hidden">
        
        <div className="w-1/4 overflow-hidden">
          {/* Add content */}
        </div>

        <div className="w-1/4 overflow-hidden">
          <ImageGallery items={IMAGES} />
        </div>

        <div className="w-1/4 overflow-hidden">
          <h2>
            <b>Lorem ipsum</b>
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
            doloremque. Quaerat provident commodi consectetur veniam similique ad
            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
            quasi aliquam eligendi, placeat qui corporis!
          </p>
        </div>

        <div className="w-1/4 overflow-hidden">
          {/* Add content */}
        </div>

      </div>
    </div>
  )
}

export default Stories