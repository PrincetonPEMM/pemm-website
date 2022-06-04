import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

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
  
  export const FeaturedFiltersComponent = (props: any) => {
    const textStyle = "text-xs";
    const listItemTextStyle = "m-0";
    const filterTable = (event: any) => {
      props.tableFilter.filterData[event.target.id] = event.target.checked;
      props.tableFilter.filterTableData();
      props.setTableDataState(props.tableFilter.getFilteredTableData());
    };
    return (
      <>
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
              onClick={filterTable}
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
      </>
    );
  }
  