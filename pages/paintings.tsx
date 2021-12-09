import type { NextPage } from 'next'

const IMAGES = [
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00004e/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00004f/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x000074/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x00007b/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054923333.0x000084/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000027/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000028/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000046/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x00004d/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x000054/full/400,/0/default.jpg",
  "https://api.bl.uk/image/iiif/ark:/81055/vdc_100054933823.0x0000e6/full/400,/0/default.jpg",
  "https://iiif-cloud.princeton.edu/iiif/2/99%2F5b%2Fcc%2F995bcc2069dc451298f11bd8448be628%2Fintermediate_file/full/400,/0/default.jpg",
  "https://iiif-cloud.princeton.edu/iiif/2/d9%2F19%2F40%2Fd91940a0919e43c98a5fe14f27ae0866%2Fintermediate_file/full/400,/0/default.jpg"
];

const Paintings: NextPage = () => {
  const imageStyles = "m-2";
  return (
    <div>
        <h1>
          Paintings
        </h1>
        <div className="flex flex-wrap justify-center ml-10">
          { 
            IMAGES.map(function(image, i){
              return <img className={imageStyles} key={i} src={image}></img>;
          })}
        </div>
    </div>
  )
}

export default Paintings
