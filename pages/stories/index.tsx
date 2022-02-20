import type { NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next'
import React from 'react';
import type {Stories} from '../../components/types/stories';
import axios from 'axios';
import StoryHighlightsComponent from '../../components/elements/storyHighlightsComponent';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios(process.env.REACT_APP_API + 'stories/');
    const stories: Stories[] = await res.data;
    return {
      props: {
        data: {
          stories: stories
        }
      }
    }
  } catch {
      return {
        props: {
          data: {
            stories: []
          }
        }
      }
  }
}

const StoriesPage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1>
        Stories
      </h1>
      <div className="flex space-x-10 flex-wrap overflow-hidden">
          {data.stories && data.stories.map(function(story: Stories, i: any){
            return (
              <div key={i}>
                <StoryHighlightsComponent story={story}/>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default StoriesPage