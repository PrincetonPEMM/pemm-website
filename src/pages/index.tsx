import type { NextPage } from 'next';
import Box from '@mui/material/Box';

import {ImageTextComponent} from '../components/elements/imageTextComponent';
import {FeaturedContentComponent} from '../components/elements/featuredContentComponent';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
const PAINTINGS_CONTENT = []; // FILL IN

const MANUSCRIPTS_IMAGE = "/manuscripts.jpeg";
const MANUSCRIPTS_TITLE = "Manuscripts";
const MANUSCRIPTS_DESCRIPTION = ""; // FILL IN
const MANUSCRIPTS_LINK="/manuscripts";
const MANUSCRIPTS_BACKGROUND_COLOR = ""; // FILL IN
const MANUSCRIPTS_CONTENT = []; // FILL IN

const Home: NextPage = () => {
  return (
    <div className="block">
      <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex', lg: 'flex' },
            alignContent: 'center'
        }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx = {{
                width: 600,
                height: 1000,
              }}
            >
              <ImageTextComponent 
              imageUrl={STORY_IMAGE}
              title={STORY_TITLE}
              // description={STORY_DESCRIPTION}
              link={STORY_LINK}/>
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
      </Accordion>

      <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx = {{
                width: 600,
                height: 1000,
              }}
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
      </Accordion>
      <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx = {{
                width: 600,
                height: 1000,
              }}
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
