import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import ImageGallery from 'react-image-gallery';
import type {Paintings} from '../../components/types/paintings';
import type {Stories} from '../../components/types/stories';
import { STORY_13_TEST_DATA, STORY_13_IMAGE_TEST_DATA } from '../../data/story13';
import axios from 'axios';

export const StoryInformationWidget = (props: any) => {
    const story = props.story;
    return (
      <>
        <button className="bg-black text-white"> Story Information Widget </button>
      </>
    );
  };

export const GeneratedStoryText = (props: any) => {
    const story = props.story;
    return (
      <>
        <button className="text-black"> Generated Story Text </button>
      </>
    );
  };

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
      <div className="flex space-x-10 flex-wrap overflow-hidden">
        
        <div className="w-1/4 overflow-hidden">
          {/* Add content */}
        </div>
     
        <div className="w-1/4 overflow-hidden">
          {data.imageUris && data.imageUris.length > 0 && <ImageGallery items={data.imageUris} />}
          <StoryInformationWidget story={data.story}/>
        </div>

        <div className="w-1/4 overflow-hidden">
          <div className = "flex flex-wrap justify-center">
            <GeneratedStoryText story={data.story}/>
          </div>

          <div className = "flex flex-wrap justify-center">
            {/* if button click = find info */}
            <p className="text-justify">
              {data.story && "This text is very ______"}
            </p>
          </div>
          
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