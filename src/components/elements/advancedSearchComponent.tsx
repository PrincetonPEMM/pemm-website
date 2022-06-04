import { MenuOpen } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { StoryChips } from './storyChips';
import { StorySlider } from './storySlider';
import { FeaturedFiltersComponent } from './featuredFiltersComponent';

const primary = "#3D6F58";

const AdvancedSearchComponent = (props: any) => {
    return (
      <Card
        //TODO: Update hardcoded primary color
          sx = {{
            width: "20%",
            height: "fit-content",
            margin: "1em",
            paddingBottom: "1em",
            backgroundColor: primary,
            display: { xs: 'none', md: 'flex', lg: 'flex' }
          }}>
            <Box>
              <IconButton className='block m-1' onClick={props.handleShowAdvancedSearch}>
                <MenuOpen color="secondary"/>
              </IconButton>
  
              <Box>
                <Typography color="secondary" className='ml-2' variant="h6">
                    Filtered Search
                </Typography>
                <FeaturedFiltersComponent tableFilter={props.tableFilter} setTableDataState={props.setTableDataState}/>
              </Box>

              <Box>
                <Typography color="secondary" className='ml-2 mt-2' variant="body1">Story&apos;s Century of Origin</Typography>
                <StorySlider tableFilter={props.tableFilter} setTableDataState={props.setTableDataState} filterKey="centuryRange"/>
              </Box>
  
              <Box>
                <Typography color="secondary" className='ml-2 mt-2' variant="body1">Story&apos;s Place of Origin</Typography>
                <StoryChips tableFilter={props.tableFilter} setTableDataState={props.setTableDataState} chipType="origin"/>
              </Box>
  
              <Box>
                <Typography color="secondary" className='ml-2 mt-2' variant="body1">Manuscripts with Story</Typography>
                <StorySlider tableFilter={props.tableFilter} setTableDataState={props.setTableDataState} filterKey="manuscriptsWithStoryRange"/>
              </Box>
  
              <Box>
                <Typography color="secondary" className='ml-2 mt-2' variant="body1">Paintings of Story</Typography>
                <StorySlider tableFilter={props.tableFilter} setTableDataState={props.setTableDataState} filterKey="paintingsOfStoryRange"/>
              </Box>
  
              <Box>
                <Typography color="secondary" className='ml-2 mt-2' variant="body1">Languages of Story</Typography>
                <StoryChips tableFilter={props.tableFilter} setTableDataState={props.setTableDataState} chipType="languages"/>
              </Box>
  
            </Box>
      </Card>
    );
}

export default AdvancedSearchComponent;