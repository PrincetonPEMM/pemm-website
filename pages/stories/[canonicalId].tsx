import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import ImageGallery from 'react-image-gallery';
import type {Paintings} from '../../components/types/paintings';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
      const { canonicalId } = context.query;
      const res = await axios(process.env.REACT_APP_API + 'images/' + canonicalId);
      const images: Paintings[] = await res.data;
      let imageUris = [];
      for (let i = 0; i < images.length; i++) {
          if (images[i].image_link) {
            let breakup = images[i].image_link!.split("full");
            let original = images[i].image_link;
            let thumbnail = images[i].image_link;
            if (breakup.length === 3) {
                //TODO: Update this and use a more standardized way to format how to display the image
                original = breakup[0] + "full" + breakup[1] + "400," + breakup[2];
                thumbnail = breakup[0] + "full" + breakup[1] + "90," + breakup[2];
            }
            imageUris.push({"original": original, "thumbnail": thumbnail});
        }
      }
      return {
        props: {
          data: {
            imageUris: imageUris
          }
        }
      }
    } catch {
        return {
          props: {
            data: {
              imageUris: []
            }
          }
        }
    }
  }

const Stories: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          {data.imageUris && data.imageUris.length > 0 && <ImageGallery items={data.imageUris} />}
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