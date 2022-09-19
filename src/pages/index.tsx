import type { NextPage } from 'next';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {ImageTextComponent} from '../components/elements/imageTextComponent';
import {FeaturedContentComponent} from '../components/elements/featuredContentComponent';
import { Accordion } from '@mui/material';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
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


const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(0),
  '& .MuiAccordionSummary-content' : {
    margin: '0 !important'
  }
}));
    

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: 0,
  margin: 0
}));
  

const Home: NextPage = () => {
  const [accordionState, setAccordionState] = useState(STORY_DATA);
  const [expanded, setExpanded] = useState(false);
  const handleStoryClick = () => {
    if (accordionState !== STORY_DATA || !expanded) {
      setAccordionState(STORY_DATA);
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }
  const handleManuscriptsClick = () => {
    if (accordionState !== MANUSCRIPTS_DATA || !expanded) {
      setAccordionState(MANUSCRIPTS_DATA);
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }
  const handlePaintingsClick = () => {
    if (accordionState !== PAINTINGS_DATA || !expanded) {
      setAccordionState(PAINTINGS_DATA);
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }
  return (
    <div className="block">
      <Box sx={{ 
            flexGrow: 1, 
            alignContent: 'center',
            display: { xs: 'none', md: 'block', lg: 'block'},
        }}>
      <Accordion expanded={expanded}>
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
      </Box>

      <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none', lg: 'none' },
            flexDirection: 'column',
            alignContent: 'center',
            marginRight: 'auto',
            marginLeft: 'auto'
        }}>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='flex'>
            <ImageTextComponent 
              imageUrl={STORY_IMAGE}
              title={STORY_TITLE}
              description={STORY_DESCRIPTION}
              link={STORY_LINK}
              accordionHandler={handleStoryClick}/>
          </AccordionSummary>
          <AccordionDetails>
            <FeaturedContentComponent 
              imageUrl={STORY_DATA[0]}
              title={STORY_DATA[1]}
              description={STORY_DATA[2]}
              link={STORY_DATA[3]}
              backgroundColor = {STORY_DATA[4]}
              content = {STORY_DATA[5]}/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='flex'>
            <ImageTextComponent 
              imageUrl={MANUSCRIPTS_IMAGE}
              title={MANUSCRIPTS_TITLE}
              description={MANUSCRIPTS_DESCRIPTION}
              link={MANUSCRIPTS_LINK}
              accordionHandler={handleManuscriptsClick}/>
          </AccordionSummary>
          <AccordionDetails>
            <FeaturedContentComponent 
              imageUrl={MANUSCRIPTS_DATA[0]}
              title={MANUSCRIPTS_DATA[1]}
              description={MANUSCRIPTS_DATA[2]}
              link={MANUSCRIPTS_DATA[3]}
              backgroundColor = {MANUSCRIPTS_DATA[4]}
              content = {MANUSCRIPTS_DATA[5]}/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            className='flex'>
            <ImageTextComponent 
              imageUrl={PAINTINGS_IMAGE}
              title={PAINTINGS_TITLE}
              description={PAINTINGS_DESCRIPTION}
              link={PAINTINGS_LINK}
              accordionHandler={handlePaintingsClick}/>
          </AccordionSummary>
          <AccordionDetails>
            <FeaturedContentComponent 
              imageUrl={PAINTINGS_DATA[0]}
              title={PAINTINGS_DATA[1]}
              description={PAINTINGS_DATA[2]}
              link={PAINTINGS_DATA[3]}
              backgroundColor = {PAINTINGS_DATA[4]}
              content = {PAINTINGS_DATA[5]}/>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  )
}

export default Home
