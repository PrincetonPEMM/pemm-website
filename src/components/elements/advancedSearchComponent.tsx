import { MenuOpen } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const AdvancedSearchComponent = (props: any) => {
    const textStyle = "text-sm";
    const listItemTextStyle = "m-0";
    const primary = "#3D6F58";
    const secondary = "#E8E4DD";
    const filterTable = (event: any) => {
      props.tableFilter.filterData[event.target.id] = event.target.checked;
      props.tableFilter.filterTableData();
      props.setTableDataState(props.tableFilter.getFilteredTableData());
    };
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
                <Typography color="secondary" className='m-2' variant="h6">
                    Story Theme
                  </Typography>
                <List>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        size="small"
                        id="withPaintings"
                        //TODO: Update hardcoded secondary color
                        sx = {{
                          color: secondary
                        }}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle} >With Paintings </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                          id="mostIllustrated"
                          size="small"
                          //TODO: Update hardcoded secondary color
                          sx = {{
                            color: secondary
                          }}/>
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>Most Illustrated </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                          size="small"
                          id="withEnglishTranslation"
                          //TODO: Update hardcoded secondary color
                          sx = {{
                            color: secondary
                          }}/>
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>With English translation </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        size="small"
                        id="ethiopianStories"
                        //TODO: Update hardcoded secondary color
                        sx = {{
                          color: secondary
                        }}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>Ethiopian Stories </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        size="small"
                        id="miracleOfMaryStories"
                        //TODO: Update hardcoded secondary color
                        sx = {{
                          color: secondary
                        }}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Miracle of Mary Stories </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        id="lifeOfMaryStories"
                        size="small"
                        //TODO: Update hardcoded secondary color
                        sx = {{
                          color: secondary
                        }}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Life of Mary Stories </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable }
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        id="earliestStories"
                        size="small"
                        //TODO: Update hardcoded secondary color
                        sx = {{
                          color: secondary
                        }}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Earliest Stories </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        id="recentStories"
                        size="small"
                        //TODO: Update hardcoded secondary color
                        sx = {{
                          color: secondary
                        }}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Recent Stories </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        id="popularStories"
                        size="small"
                        //TODO: Update hardcoded secondary color
                        sx = {{
                          color: secondary
                        }}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Popular Stories </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        id="uniqueStories"
                        size="small"
                        //TODO: Update hardcoded secondary color
                        sx = {{
                          color: secondary
                        }}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Rare Stories </Typography>
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

export default AdvancedSearchComponent;