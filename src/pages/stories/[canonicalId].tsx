import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { GeneratedStoryText } from '../../components/elements/generatedStoryText';
import type {Paintings} from '../../components/types/paintings';
import type {Stories} from '../../components/types/stories';
import { StoryInformationWidget } from '../../components/elements/storyInformationWidget';
import { STORY_13_TEST_DATA, STORY_13_IMAGE_TEST_DATA } from '../../data/story13';
import Typography from '@mui/material/Typography';
import axios from 'axios';


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { canonicalId } = context.query;
    try {
      var images: Paintings[] = [];
      if (process.env['ENVIRONMENT'] == "DEV") {
        images = STORY_13_IMAGE_TEST_DATA;
      } else {
        const res = await axios(process.env.REACT_APP_API + 'images/' + canonicalId);
        images = await res.data;
      }
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
      var story: Stories = {};
      if (process.env['ENVIRONMENT'] == "DEV") {
        story = STORY_13_TEST_DATA;
      }
      else {
        const story_res = await axios(process.env.REACT_APP_API + 'stories/' + canonicalId);
        if (story_res.data.length > 0) {
          story = story_res.data[0];
        }
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

      <div className="flex space-x-10 flex-wrap overflow-hidden ml-2">
        <div className='m-4 w-3/4'>
          <Typography variant="h3">{data.story.macomber_title}</Typography>
        </div>
        <div className='w-1/5'></div>

        <div className="w-1/4 overflow-hidden">
          {data.imageUris && data.imageUris.length > 0 && <ImageGallery items={data.imageUris} />}
        </div>

        <div className="w-1/2 overflow-hidden">
          <GeneratedStoryText story={data.story}/>
        </div>

        <div className="w-1/4 overflow-hidden">
          <StoryInformationWidget story={data.story}/>
        </div>

        <div className="w-1/2 overflow-hidden mb-2">
          <p className="text-justify">
            {data.story && data.story.english_translation}
          </p>
        </div>

      </div>
    </div>
  )
}

export default StoriesDetailPage