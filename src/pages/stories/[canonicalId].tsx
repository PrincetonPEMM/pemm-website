import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { GeneratedStoryText } from '../../components/elements/generatedStoryText';
import { CycleHyperlink } from '../../components/elements/cycleHyperlink';
import { SummaryText } from '../../components/elements/summaryText';
import type {Paintings} from '../../components/types/paintings';
import type {Stories} from '../../components/types/stories';
import { StoryInformationWidget } from '../../components/elements/storyInformationWidget';
import { StoryTranslationAndCitation } from '../../components/elements/storyTranslationAndCitation';
import { STORY_13_TEST_DATA, STORY_13_IMAGE_TEST_DATA } from '../../data/story13';
import { TEST_DATA } from '../../data/stories';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

      var all_stories: Stories[] = [];
      if (process.env['ENVIRONMENT'] == "DEV") {
        all_stories = TEST_DATA;
      }
      else {
        const stories_dat = await axios(process.env.REACT_APP_API + 'stories/');
        if(stories_dat.data.length > 0){
          all_stories = stories_dat.data[0];
        }
      }

      return {
        props: {
          data: {
            imageUris: imageUris,
            story: story,
            all_stories: all_stories
          }
        }
      }
    } catch {
        return {
          props: {
            data: {
              imageUris: [],
              story: {},
              all_stories: {}
            }
          }
        }
    }
  }

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const StoriesDetailPage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [value, setValue] = React.useState(0);
  const handleMobileTabChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex', lg: 'flex' }
        }}>
        <div className="flex space-x-10 flex-wrap overflow-hidden ml-2">
          <div className='m-4 w-3/4'>
            <Typography variant="h3">{data.story.macomber_title}</Typography>
          </div>

          <div className="w-1/4 overflow-hidden">
            {data.imageUris && data.imageUris.length > 0 && <ImageGallery items={data.imageUris} />}
          </div>

          <div className="w-1/2 overflow-hidden">
            <GeneratedStoryText story={data.story}/>
            {data.story.total_paintings != 0 ? <SummaryText story={data.story}/> : <></>}
          </div>
          {data.story.total_paintings === 0 ? <SummaryText story={data.story}/>  : <></>}
          

          <div className="w-1/4 overflow-hidden">
            <StoryInformationWidget story={data.story}/>
          </div>
          
          <div className="w-1/2 overflow-hidden mb-2">
            <StoryTranslationAndCitation story={data.story}/>

            <div className="overflow-hidden mt-1">
              <CycleHyperlink story= {data.story}
                              all_stories = {data.all_stories}/>
            </div>
          </div>

        </div>
      </Box>

      <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none', lg: 'none' }
        }}>
        <div className="flex-col overflow-hidden">
          <div className='m-4'>
            <Typography variant="h6">{data.story.macomber_title}</Typography>
          </div>

          <div className="overflow-hidden">
            {data.imageUris && data.imageUris.length > 0 && <ImageGallery items={data.imageUris} />}
          </div>

          <Tabs value={value} onChange={handleMobileTabChange} aria-label="Story Detail Tabs">
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Information" {...a11yProps(1)} />
            <Tab label="Translation" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className="overflow-hidden m-1">
              <GeneratedStoryText story={data.story}/>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="overflow-hidden m-1">
              <StoryInformationWidget story={data.story}/>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="overflow-hidden m-1">
              <StoryTranslationAndCitation story={data.story}/>
            </div>
          </TabPanel>

        </div>
      </Box>
    </div>
  )
}

export default StoriesDetailPage
