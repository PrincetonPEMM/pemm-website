import type { NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next'
import React, {useState} from 'react';
import type {Stories} from '../../components/types/stories';
import axios from 'axios';

import { Menu, MenuOpen } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const TEST_DATA = [
  {
    "macomber_id": "1",
    "macomber_title": "Title 1",
  },
  {
    "macomber_id": "2",
    "macomber_title": "Title 2",
  },
  {
    "macomber_id": "3",
    "macomber_title": "Title 3",
  },
  {
    "macomber_id": "4",
    "macomber_title": "Title 4",
  },
  {
    "macomber_id": "5",
    "macomber_title": "Title 5",
  },
  {
    "macomber_id": "6",
    "macomber_title": "Title 6",
  },
  {
    "macomber_id": "7",
    "macomber_title": "Title 7",
  },
  {
    "macomber_id": "8",
    "macomber_title": "Title 8",
  },
  {
    "macomber_id": "9",
    "macomber_title": "Title 9",
  },
  {
    "macomber_id": "10",
    "macomber_title": "Title 10",
  },
  {
    "macomber_id": "11",
    "macomber_title": "Title 1",
  },
  {
    "macomber_id": "12",
    "macomber_title": "Title 2",
  },
  {
    "macomber_id": "13",
    "macomber_title": "Title 3",
  },
  {
    "macomber_id": "14",
    "macomber_title": "Title 4",
  },
  {
    "macomber_id": "15",
    "macomber_title": "Title 5",
  },
  {
    "macomber_id": "16",
    "macomber_title": "Title 6",
  },
  {
    "macomber_id": "17",
    "macomber_title": "Title 7",
  },
  {
    "macomber_id": "18",
    "macomber_title": "Title 8",
  },
  {
    "macomber_id": "19",
    "macomber_title": "Title 9",
  },
  {
    "macomber_id": "20",
    "macomber_title": "Title 10",
  },
  {
    "macomber_id": "21",
    "macomber_title": "Title 1",
  },
  {
    "macomber_id": "22",
    "macomber_title": "Title 2",
  },
  {
    "macomber_id": "23",
    "macomber_title": "Title 3",
  },
  {
    "macomber_id": "24",
    "macomber_title": "Title 4",
  },
  {
    "macomber_id": "25",
    "macomber_title": "Title 5",
  },
  {
    "macomber_id": "26",
    "macomber_title": "Title 6",
  },
  {
    "macomber_id": "27",
    "macomber_title": "Title 7",
  },
  {
    "macomber_id": "28",
    "macomber_title": "Title 8",
  },
  {
    "macomber_id": "29",
    "macomber_title": "Title 9",
  },
  {
    "macomber_id": "30",
    "macomber_title": "Title 10",
  },
  {
    "macomber_id": "31",
    "macomber_title": "Title 1",
  },
  {
    "macomber_id": "32",
    "macomber_title": "Title 2",
  },
  {
    "macomber_id": "33",
    "macomber_title": "Title 3",
  },
  {
    "macomber_id": "34",
    "macomber_title": "Title 4",
  },
  {
    "macomber_id": "35",
    "macomber_title": "Title 5",
  },
  {
    "macomber_id": "36",
    "macomber_title": "Title 6",
  },
  {
    "macomber_id": "37",
    "macomber_title": "Title 7",
  },
  {
    "macomber_id": "38",
    "macomber_title": "Title 8",
  },
  {
    "macomber_id": "39",
    "macomber_title": "Title 9",
  },
  {
    "macomber_id": "40",
    "macomber_title": "Title 10",
  },
  {
    "macomber_id": "41",
    "macomber_title": "Title 1",
  },
  {
    "macomber_id": "42",
    "macomber_title": "Title 2",
  },
  {
    "macomber_id": "43",
    "macomber_title": "Title 3",
  },
  {
    "macomber_id": "44",
    "macomber_title": "Title 4",
  },
  {
    "macomber_id": "45",
    "macomber_title": "Title 5",
  },
  {
    "macomber_id": "46",
    "macomber_title": "Title 6",
  },
  {
    "macomber_id": "47",
    "macomber_title": "Title 7",
  },
  {
    "macomber_id": "48",
    "macomber_title": "Title 8",
  },
  {
    "macomber_id": "49",
    "macomber_title": "Title 9",
  },
  {
    "macomber_id": "50",
    "macomber_title": "Title 10",
  },
  {
    "macomber_id": "51",
    "macomber_title": "Title 1",
  },
  {
    "macomber_id": "52",
    "macomber_title": "Title 2",
  },
  {
    "macomber_id": "53",
    "macomber_title": "Title 3",
  },
  {
    "macomber_id": "54",
    "macomber_title": "Title 4",
  },
  {
    "macomber_id": "55",
    "macomber_title": "Title 5",
  },
  {
    "macomber_id": "56",
    "macomber_title": "Title 6",
  },
  {
    "macomber_id": "57",
    "macomber_title": "Title 7",
  },
  {
    "macomber_id": "58",
    "macomber_title": "Title 8",
  },
  {
    "macomber_id": "59",
    "macomber_title": "Title 9",
  },
  {
    "macomber_id": "60",
    "macomber_title": "Title 10",
  }
];

export const getServerSideProps: GetServerSideProps = async (context) => {
  var stories: Stories[] = [];
  try {
    if (process.env.WEBSITE === "http://localhost:3000") {
      stories = TEST_DATA;
    } else {
      const res = await axios(process.env.REACT_APP_API + 'stories/');
      stories = await res.data;
    }
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

type StoryTheme = {
  withPaintings: boolean;
  mostIllustrated: boolean;
  withEnglishTranslation: boolean;
  ethiopianStories: boolean;
  miracleOfMaryStories: boolean;
  lifeOfMaryStories: boolean;
  earliestStories: boolean;
  recentStories: boolean;
  popularStories: boolean;
  uniqueStories: boolean;
}

class TableData {
  storyTheme: StoryTheme;
  readonly data: Stories[] = [];
  filteredData: Stories[] = [];

  constructor( data: Stories[]){
    this.storyTheme = {
      withPaintings: false,
      mostIllustrated: false,
      withEnglishTranslation: false,
      ethiopianStories: false,
      miracleOfMaryStories: false,
      lifeOfMaryStories: false,
      earliestStories: false,
      recentStories: false,
      popularStories: false,
      uniqueStories: false
    }
    this.data = data;
    this.filteredData = this.data;
  }

  updateStoryTheme(newStoryTheme: StoryTheme){
    console.log("Updating story theme");
    this.storyTheme = newStoryTheme;
    this.filteredData = this.filteredData.filter(story => story.macomber_id === "1");
  }

  getFilteredData = () : Stories[] => this.filteredData;

}

const AdvancedSearchComponent = (props: any) => {
  const textStyle = "text-sm";
  const listItemTextStyle = "m-0";
  const primary = "#3D6F58";
  const secondary = "#E8E4DD";
  var storyTheme: StoryTheme = props.tableData.storyTheme;
  return (
    <Card
      //TODO: Update hardcoded primary color
      style={{backgroundColor: primary}}
        sx = {{
          width: "20%",
          height: "150vh",
          margin: "1em"
        }}>
          <Box>
            <IconButton className='block m-1' onClick={props.handleShowAdvancedSearch}>
              <MenuOpen color="secondary"/>
            </IconButton>

            <Box>
              <Typography color="secondary" className='m-2' variant="h6">Story Theme</Typography>
              <List>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    onClick={props.tableData.updateStoryTheme(storyTheme)}
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle} >With paintings only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>With english translation only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>Ethiopian stories only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Miracle of Mary stories only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Earliest stories only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Recent stories only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Popular stories only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Rare stories only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>With english translation only </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography color="secondary" className='m-2' variant="h6">Story's Century of Origin</Typography>
              <List>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle} >1300s </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>1400s </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>1500s </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>1600s </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>1700s </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>1800s </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>1900s </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography color="secondary" className='m-2' variant="h6">Story's Place of Origin</Typography>
              <List>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle} >Africa </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>Egypt </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>Ethiopia </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Europe </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>France </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Spain </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Levant </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Unknown </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography color="secondary" className='m-2' variant="h6">Number of Manuscripts with story</Typography>
              <List>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle} >More than 299 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>200 to 299 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>100 to 199 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>50 to 99 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>10 to 49 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>5 to 9 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>2 to 4 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Only one </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography color="secondary" className='m-2' variant="h6">Number of paintings of Story</Typography>
              <List>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle} >More than 19 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>2 to 19 </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>Only one </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>No Paintings </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>

            <Box>
              <Typography color="secondary" className='m-2' variant="h6">Languages of Story</Typography>
              <List>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle} >Gəˁəz </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>Arabic </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>Amharic </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary" className={listItemTextStyle}>
                      <Typography color="secondary" className={textStyle}>English </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>French </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Italian </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem className="p-0">
                  <ListItemButton className="p-0"
                    sx = {{
                      height: "1.5em"
                    }}>
                    <ListItemIcon>
                      <Checkbox
                      size="small"
                      //TODO: Update hardcoded secondary color
                      sx = {{
                        color: secondary
                      }}
                      />
                    </ListItemIcon>
                    <ListItemText color="secondary">
                      <Typography color="secondary" className={textStyle}>Latin </Typography>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>

          </Box>
    </Card>
  );
}

const StoriesPage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [showAdvancedSearch, setShowAdvancedSearch] = React.useState<boolean>(true);
  const handleShowAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };
  const tableData: TableData = new TableData(data.stories);

  return (
    <div className='flex'>
      { showAdvancedSearch && 
        <AdvancedSearchComponent handleShowAdvancedSearch={handleShowAdvancedSearch} tableData={tableData} />
      }
      <div className='p-0 m-0 w-full h-full'>
        { !showAdvancedSearch &&
        <IconButton className='block m-1' onClick={handleShowAdvancedSearch}>
          <Menu/>
        </IconButton>
        }
        <TableContainer sx={{
          bgcolor: "secondary.main"
        }} component={Paper}>
          <Table sx={{
            marginLeft: {xs: "0", md: "1em", lg: "3em"},
            maxWidth: {xs: "none", md: "95vw", lg: "95vw"},
            }} aria-label="story table">
            <TableHead>
              <TableRow>
                <TableCell  align="left"></TableCell>
                <TableCell align="left">
                  <Typography fontWeight={"bold"}>
                    Macomber ID
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.getFilteredData().map((story: Stories) => (
                <TableRow
                  key={story.macomber_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left" sx= {{
                    maxWidth: {xs: "15rem", md: "5rem", lg: "5rem"},
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                  }}>
                    <Typography fontWeight={"bold"}>
                      {story.macomber_title}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" component="th" scope="row">
                    {story.macomber_id}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default StoriesPage