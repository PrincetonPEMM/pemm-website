import type { NextPage } from 'next'

const IMAGES = [
  "vdc_100054923333.0x00004e",
  "vdc_100054923333.0x00004f",
  "vdc_100054923333.0x000074",
  "vdc_100054923333.0x00007b",
  "vdc_100054923333.0x000084",
  "vdc_100054933823.0x000027",
  "vdc_100054933823.0x000028",
  "vdc_100054933823.0x000046",
  "vdc_100054933823.0x00004d",
  "vdc_100054933823.0x000054",
  "vdc_100054933823.0x0000e6",
];

const PRINCETON_IMAGES = [
  "99%2F5b%2Fcc%2F995bcc2069dc451298f11bd8448be628",
  "d9%2F19%2F40%2Fd91940a0919e43c98a5fe14f27ae0866"
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
              return <img className={imageStyles} key={i} src={"https://api.bl.uk/image/iiif/ark:/81055/" + 
                image + 
                "/full/400,/0/default.jpg"}></img>;
          })}
          { 
            PRINCETON_IMAGES.map(function(image, i){
              return <img className={imageStyles} key={i} src={"https://iiif-cloud.princeton.edu/iiif/2/" + 
                image + 
                "%2Fintermediate_file/full/400,/0/default.jpg"}></img>;
          })}
        </div>
    </div>
  )
}

export default Paintings
