import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import ImageGallery from 'react-image-gallery';
import type {Paintings} from '../../components/types/paintings';
import type {Stories} from '../../components/types/stories';
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
      const story_res = await axios(process.env.REACT_APP_API + 'stories/' + canonicalId);
      let story: Stories = {};
      if (story_res.data.length > 0) {
        story = story_res.data[0];
      }
      return {
        props: {
          data: {
            imageUris: imageUris,
            story: story
          }
        }
      }
    } catch {
        return {
          props: {
            data: {
              imageUris: [],
              story: {}
            }
          }
        }
    }
  }

const StoriesDetailPage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
          <p className="text-justify">
            {data.story && data.story.english_translation}
          </p>
        </div>

        <div className="w-1/4 overflow-hidden">
          {/* Add content */}
        </div>

      </div>
    </div>
  )
}

export default StoriesDetailPage