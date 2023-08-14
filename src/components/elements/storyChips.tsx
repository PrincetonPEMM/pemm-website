import * as React from 'react';

import { Chip } from '@mui/material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { theme } from '../../styles/theme';

const placeOfOriginMap : {[key: string]: any} = {
    "Africa": 0,
    "Egypt": 1,
    "Ethiopia": 2,
    "Europe": 3,
    "France": 4,
    "Spain": 5,
    "Levant": 6,
    "Unknown": 7,
  };
  const languagesOfStoryMap : {[key: string]: any} = {
    "Geez": 0,
    "Arabic": 1,
    "Amharic": 2,
    "English": 3,
    "French": 4,
    "Italian": 5,
    "Latin": 6,
  };
  
  const chipTypeMap : {[key: string]: any} = {
    "origin": placeOfOriginMap,
    "languages": languagesOfStoryMap,
  };
  
  export const StoryChips = (props: any) => {
    const [chipColors, setChipColors] = React.useState<string[]>(
      Array.from(new Array(Object.keys(chipTypeMap[props.chipType]).length), () => theme.palette.secondary.main )
    );
    const chips: string[] = Object.keys(chipTypeMap[props.chipType]);
  
    const filterTable = (event: any) => {
      const selectedChipText = event.target.innerHTML;
      props.tableFilter.filterData[props.chipType + selectedChipText] = !props.tableFilter.filterData[props.chipType + selectedChipText];
      props.tableFilter.filterTableData();
      props.setTableDataState(props.tableFilter.getFilteredTableData());
      let selectedChipState = props.tableFilter.filterData[props.chipType + selectedChipText];
      if (selectedChipState && chipColors[chipTypeMap[props.chipType][selectedChipText]] === theme.palette.secondary.main) {
        let chipStateCopy : string[] = [...chipColors];
        chipStateCopy[chipTypeMap[props.chipType][selectedChipText]] = theme.palette.warning.main;
        setChipColors(chipStateCopy);
      } else if (!selectedChipState && chipColors[chipTypeMap[props.chipType][selectedChipText]] === theme.palette.warning.main) {
        let chipStateCopy : string[] = [...chipColors];
        chipStateCopy[chipTypeMap[props.chipType][selectedChipText]] = theme.palette.secondary.main;
        setChipColors(chipStateCopy);
      }
    };

    return (
      <>
      {
        chips && 
        chips.map((origin: string, index: number) => {
          if (['Africa', 'Europe', 'Levant'].includes(origin)) {
            return (<Chip key={index}
              size="small"
              label={origin}
              onClick={filterTable}
              icon={<GpsFixedIcon />}
              color={chipColors[index] === theme.palette.secondary.main ? "secondary" : "warning"}
              className="m-1" />);
          }
          return (<Chip key={index}
                size="small"
                label={origin}
                onClick={filterTable}
                color={chipColors[index] === theme.palette.secondary.main ? "secondary" : "warning"}
                className="m-1" />);
        })
      }
      </>
    );
  };
