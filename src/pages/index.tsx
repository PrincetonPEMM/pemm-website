import type { NextPage } from 'next';
import Box from '@mui/material/Box';

import {ImageTextComponent} from '../components/elements/imageTextComponent';
import {FeaturedContentComponent} from '../components/elements/featuredContentComponent';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useState } from 'react';

const STORY_IMAGE = "/stories.jpeg";
const STORY_TITLE = "Stories";
const STORY_DESCRIPTION = "Stories about the Virgin Mary in Ethiopia, Eritrea, and Egypt are vivid, profound, and sometimes historically valuable. The staff of PEMM has selected three stories that best represent the genre (from among the 506 translations of 753 stories in the PEMM database). One is about a girl's education (from Egypt), one is about kindness to animals (from Ethiopia), and one is about a speaking icon (from Ethiopia)";
const STORY_LINK="/stories";
const STORY_BACKGROUND_COLOR = "#eba81a"; // FIX COLOR
const STORY_CONTENT = [
  {'title' : 'Healed Daughter', 'id': '111', 'illustration': '/stories.jpeg'},
  {'title' : 'Thirsty Dog', 'id': '236', 'illustration': '/stories.jpeg'},
  {'title': 'Ethiopian King', 'id': '319', 'illustration': '/stories.jpeg'},
] // CAN EACH HAVE ITS OWN ASSOCIATED BACKGROUND IMAGE????
// WHERE TO FIND STORY ILLUSTRATION

const PAINTINGS_IMAGE = "/paintings.jpeg";
const PAINTINGS_TITLE = "Paintings";
const PAINTINGS_DESCRIPTION = ""; // FILL IN
const PAINTINGS_LINK="/paintings";
const PAINTINGS_BACKGROUND_COLOR = ""; // FILL IN
const PAINTINGS_CONTENT = [
  {'title' : 'Healed Daughter', 'id': '111', 'illustration': '/stories.jpeg'},
  {'title' : 'Thirsty Dog', 'id': '236', 'illustration': '/stories.jpeg'},
  {'title': 'Ethiopian King', 'id': '319', 'illustration': '/stories.jpeg'},
]; // FILL IN

const MANUSCRIPTS_IMAGE = "/manuscripts.jpeg";
const MANUSCRIPTS_TITLE = "Manuscripts";
const MANUSCRIPTS_DESCRIPTION = ""; // FILL IN
const MANUSCRIPTS_LINK="/manuscripts";
const MANUSCRIPTS_BACKGROUND_COLOR = ""; // FILL IN
const MANUSCRIPTS_CONTENT = [
  {'title' : 'Healed Daughter', 'id': '111', 'illustration': '/stories.jpeg'},
  {'title' : 'Thirsty Dog', 'id': '236', 'illustration': '/stories.jpeg'},
  {'title': 'Ethiopian King', 'id': '319', 'illustration': '/stories.jpeg'},
]; // FILL IN

const STORY_DATA = [
  STORY_IMAGE, STORY_TITLE, STORY_DESCRIPTION, STORY_LINK,STORY_BACKGROUND_COLOR, STORY_CONTENT];
const MANUSCRIPTS_DATA = [
  MANUSCRIPTS_IMAGE, MANUSCRIPTS_TITLE, MANUSCRIPTS_DESCRIPTION, MANUSCRIPTS_LINK, MANUSCRIPTS_BACKGROUND_COLOR, MANUSCRIPTS_CONTENT];
const PAINTINGS_DATA = [
  PAINTINGS_IMAGE, PAINTINGS_TITLE, PAINTINGS_DESCRIPTION, PAINTINGS_LINK, PAINTINGS_BACKGROUND_COLOR, PAINTINGS_CONTENT];

const Home: NextPage = () => {
  const [accordionState, setAccordionState] = useState(STORY_DATA);
  const handleStoryClick = () => {
    setAccordionState(STORY_DATA);
  }
  const handleManuscriptsClick = () => {
    setAccordionState(MANUSCRIPTS_DATA);
  }
  const handlePaintingsClick = () => {
    setAccordionState(PAINTINGS_DATA);
  }
  return (
    <div className="block">
      <Box sx={{ 
            flexGrow: 1, 
            alignContent: 'center'
        }}>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='flex'>
          <ImageTextComponent
            imageUrl={STORY_IMAGE}
            title={STORY_TITLE}
            // description={STORY_DESCRIPTION}
            link={STORY_LINK}
            accordionHandler={handleStoryClick}/>
          <ImageTextComponent 
            imageUrl={MANUSCRIPTS_IMAGE}
            title={MANUSCRIPTS_TITLE}
            // description={MANUSCRIPTS_DESCRIPTION}
            link={MANUSCRIPTS_LINK}
            accordionHandler={handleManuscriptsClick}/>
          <ImageTextComponent 
            imageUrl={PAINTINGS_IMAGE}
            title={PAINTINGS_TITLE}
            // description={PAINTINGS_DESCRIPTION}
            link={PAINTINGS_LINK}
            accordionHandler={handlePaintingsClick}/>
        </AccordionSummary>
        <AccordionDetails>
          <FeaturedContentComponent 
            imageUrl={accordionState[0]}
            title={accordionState[1]}
            description={accordionState[2]}
            link={accordionState[3]}
            backgroundColor = {accordionState[4]}
            content = {accordionState[5]}/>
        </AccordionDetails>
      </Accordion>

      {/* <Accordion
        sx= {{
          width: 1/3
        }}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ImageTextComponent 
                imageUrl={MANUSCRIPTS_IMAGE}
                title={MANUSCRIPTS_TITLE}
                // description={MANUSCRIPTS_DESCRIPTION}
                link={MANUSCRIPTS_LINK}/>
            </AccordionSummary>
            <AccordionDetails>
              <FeaturedContentComponent 
                imageUrl={STORY_IMAGE}
                title={STORY_TITLE}
                description={STORY_DESCRIPTION}
                link={STORY_LINK}
                backgroundColor = {STORY_BACKGROUND_COLOR}
                content = {STORY_CONTENT}/>
            </AccordionDetails>
      </Accordion> */}
      {/* <Accordion
        sx= {{
          width: 1/3
        }}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ImageTextComponent 
                imageUrl={PAINTINGS_IMAGE}
                title={PAINTINGS_TITLE}
                // description={PAINTINGS_DESCRIPTION}
                link={PAINTINGS_LINK}/>
            </AccordionSummary>
            <AccordionDetails>
              <FeaturedContentComponent 
                imageUrl={STORY_IMAGE}
                title={STORY_TITLE}
                description={STORY_DESCRIPTION}
                link={STORY_LINK}
                backgroundColor = {STORY_BACKGROUND_COLOR}
                content = {STORY_CONTENT}/>
            </AccordionDetails>
      </Accordion> */}
      </Box>

      <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none', lg: 'none' },
            flexDirection: 'column',
            alignContent: 'center',
            marginRight: 'auto',
            marginLeft: 'auto'
        }}>
        <ImageTextComponent 
          imageUrl={STORY_IMAGE}
          title={STORY_TITLE}
          description={STORY_DESCRIPTION}
          link={STORY_LINK}/>
        <ImageTextComponent 
          imageUrl={MANUSCRIPTS_IMAGE}
          title={MANUSCRIPTS_TITLE}
          description={MANUSCRIPTS_DESCRIPTION}
          link={MANUSCRIPTS_LINK}/>
        <ImageTextComponent 
          imageUrl={PAINTINGS_IMAGE}
          title={PAINTINGS_TITLE}
          description={PAINTINGS_DESCRIPTION}
          link={PAINTINGS_LINK}/>
      </Box>
    </div>
  )
}

export default Home
