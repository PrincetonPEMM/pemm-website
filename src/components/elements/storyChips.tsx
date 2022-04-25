import * as React from 'react';

import { Chip } from '@mui/material';

const placeOfOriginMap = {
    "Africa": 0,
    "Egypt": 1,
    "Ethiopia": 2,
    "Europe": 3,
    "France": 4,
    "Spain": 5,
    "Levant": 6,
    "Unknown": 7,
  };
  const languagesOfStoryMap = {
    "Geez": 0,
    "Arabic": 1,
    "Amharic": 2,
    "English": 3,
    "France": 4,
    "French": 5,
    "Italian": 6,
    "Latin": 7,
  };
  
  const chipTypeMap = {
    "origin": placeOfOriginMap,
    "languages": languagesOfStoryMap,
  };
  
  export const StoryChips = (props: any) => {
    const [chipColors, setChipColors] = React.useState<string[]>(
      Array.from(new Array(Object.keys(chipTypeMap[props.chipType]).length), () => "secondary" )
    );
    const chips: string[] = Object.keys(chipTypeMap[props.chipType]);
  
    const filterTable = (event: any) => {
      const selectedChipText = event.target.innerHTML;
      props.tableFilter.filterData[props.chipType + selectedChipText] = !props.tableFilter.filterData[props.chipType + selectedChipText];
      props.tableFilter.filterTableData();
      props.setTableDataState(props.tableFilter.getFilteredTableData());
      let selectedChipState = props.tableFilter.filterData[props.chipType + selectedChipText];
      if (selectedChipState && chipColors[chipTypeMap[props.chipType][selectedChipText]] === "secondary") {
        let chipStateCopy : string[] = [...chipColors];
        chipStateCopy[chipTypeMap[props.chipType][selectedChipText]] = "warning";
        setChipColors(chipStateCopy);
      } else if (!selectedChipState && chipColors[chipTypeMap[props.chipType][selectedChipText]] === "warning") {
        let chipStateCopy : string[] = [...chipColors];
        chipStateCopy[chipTypeMap[props.chipType][selectedChipText]] = "secondary";
        setChipColors(chipStateCopy);
      }
    };

    return (
      <>
      {
        chips && 
        chips.map((origin: string, index: number) => {
          return (<Chip size="small"
                label={origin}
                onClick={filterTable}
                color={chipColors[index]}
                className="m-1" />);
        })
      }
      </>
    );
  };
