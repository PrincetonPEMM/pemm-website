import * as React from 'react';

import { Slider } from '@mui/material';
import { theme } from '../../styles/theme';

const SliderRangeMap : {[key: string]: any} = {
    "centuryRange": (value : number): number => (value * 7) + 1300,
    "manuscriptsWithStoryRange": (value : number): number => (value * 3.5) | 0,
    "paintingsOfStoryRange":  (value : number): number => (value / 2.5) | 0,
  };
  
  export const StorySlider = (props: any) => {
    const [value, setValue] = React.useState<number[]>([0, 100]);
    const [sliderColor, setSliderColor] = React.useState<string>(theme.palette.secondary.main);
    const handleChange = (event: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
      if (value[0] !== 0 || value[1] !== 100) {
        setSliderColor(theme.palette.warning.main);
      } else {
        setSliderColor(theme.palette.secondary.main)
      }
      props.tableFilter.filterData[props.filterKey] = value;
      props.tableFilter.filterTableData();
      props.setTableDataState(props.tableFilter.getFilteredTableData());
    };
    function valueLabelFormat(value: number) {
      let mappedValue: number = SliderRangeMap[props.filterKey](value)
      return mappedValue;
    }
    return (
      <div className='mx-5'>
        <Slider
          getAriaLabel={() => 'Paintings of Story Range'}
          valueLabelFormat={valueLabelFormat}
          valueLabelDisplay="auto"
          value={value}
          sx = {{
            color: sliderColor
          }}
          onChange={handleChange}
        />
      </div>
    );
  }
  