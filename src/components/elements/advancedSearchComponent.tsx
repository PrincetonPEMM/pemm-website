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
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const primary = "#3D6F58";
const secondary = "#E8E4DD";
const warning = "#EDA545";

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  backgroundColor: secondary,

}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: warning,
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
});

const AdvancedSearchComponent = (props: any) => {
    const textStyle = "text-xs";
    const listItemTextStyle = "m-0";
    const filterTable = (event: any) => {
      props.tableFilter.filterData[event.target.id] = event.target.checked;
      props.tableFilter.filterTableData();
      props.setTableDataState(props.tableFilter.getFilteredTableData());
    };
    return (
      <Card
        //TODO: Update hardcoded primary color
          sx = {{
            width: "20%",
            height: "150vh",
            margin: "1em",
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
                <List className="p-0">
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
                        checkedIcon={<BpCheckedIcon />}
                        icon={<BpIcon />}
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
                          checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}/>
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
                          checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}/>
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
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                <Typography color="secondary" className='ml-2' variant="h6">Story&apos;s Century of Origin</Typography>
                <List className="p-0">
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        size="small"
                        id="originCentury13s"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle} >1300s </Typography>
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
                        id="originCentury14s"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>1400s </Typography>
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
                        id="originCentury15s"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>1500s </Typography>
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
                        id="originCentury16s"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>1600s </Typography>
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
                        id="originCentury17s"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>1700s </Typography>
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
                        id="originCentury18s"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>1800s </Typography>
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
                        id="originCentury19s"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                <Typography color="secondary" className='ml-2' variant="h6">Story&apos;s Place of Origin</Typography>
                <List className="p-0">
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        size="small"
                        id="originAfrica"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle} >Africa </Typography>
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
                        id="originEgypt"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>Egypt </Typography>
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
                        id="originEthiopia"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>Ethiopia </Typography>
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
                        id="originEurope"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Europe </Typography>
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
                        id="originFrance"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>France </Typography>
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
                        id="originSpain"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Spain </Typography>
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
                        id="originLevant"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Levant </Typography>
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
                        id="originUnknown"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                <Typography color="secondary" className='ml-2' variant="h6">Number of Manuscripts with story</Typography>
                <List className="p-0">
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        size="small"
                        id="manuscriptsMax"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle} >More than 299 </Typography>
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
                        id="manuscripts200To299"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>200 to 299 </Typography>
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
                        id="manuscripts100To199"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>100 to 199 </Typography>
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
                        id="manuscripts50To99"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>50 to 99 </Typography>
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
                        id="manuscripts10To49"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>10 to 49 </Typography>
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
                        id="manuscripts5To9"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>5 to 9 </Typography>
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
                        id="manuscripts2To4"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>2 to 4 </Typography>
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
                        id="manuscripts1"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                <Typography color="secondary" className='ml-2' variant="h6">Number of paintings of Story</Typography>
                <List className="p-0">
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        size="small"
                        id="paintingsMax"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle} >More than 19 </Typography>
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
                        id="paintings2To19"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>2 to 19 </Typography>
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
                        id="paintings1"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>Only one </Typography>
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
                        id="paintings0"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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
                <Typography color="secondary" className='ml-2' variant="h6">Languages of Story</Typography>
                <List className="p-0">
                  <ListItem className="p-0">
                    <ListItemButton className="p-0"
                      onClick={filterTable}
                      sx = {{
                        height: "1.5em"
                      }}>
                      <ListItemIcon>
                        <Checkbox
                        size="small"
                        id="languagesGeez"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle} >Gəˁəz </Typography>
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
                        id="languagesArabic"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>Arabic </Typography>
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
                        id="languagesAmharic"
                        size="small"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>Amharic </Typography>
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
                        id="languagesEnglish"
                        size="small"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary" className={listItemTextStyle}>
                        <Typography color="secondary" className={textStyle}>English </Typography>
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
                        id="languagesFrench"
                        size="small"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>French </Typography>
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
                        id="languagesItalian"
                        size="small"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
                        />
                      </ListItemIcon>
                      <ListItemText color="secondary">
                        <Typography color="secondary" className={textStyle}>Italian </Typography>
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
                        id="languagesLatin"
                        size="small"
                        checkedIcon={<BpCheckedIcon />}
                          icon={<BpIcon />}
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