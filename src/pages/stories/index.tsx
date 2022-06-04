import type { NextPage, GetStaticProps, InferGetStaticPropsType} from 'next'
import React from 'react';

import type {Stories} from '../../components/types/stories';
import { TableFilter } from '../../utils/table_filter';
import { TEST_DATA } from '../../data/stories';
import AdvancedSearchComponent from '../../components/elements/advancedSearchComponent';
import StoriesTableComponent from '../../components/elements/storiesTableComponent';

import axios from 'axios';
import { Menu } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const tableFilter: TableFilter = new TableFilter([]);

export const getStaticProps: GetStaticProps = async (context) => {
  var stories: Stories[] = [];
  try {
    if (process.env['ENVIRONMENT'] == "DEV") {
      stories = TEST_DATA;
    } else {
      const res = await axios(process.env.REACT_APP_API + 'stories/');
      stories = await res.data;
    }
    return {
      props: {
        data: {
          stories: JSON.stringify(stories)
        }
      }
    }
  } catch {
      return {
        props: {
          data: {
            stories: JSON.stringify([])
          }
        }
      }
  }
}

const StoriesPage: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showAdvancedSearch, setShowAdvancedSearch] = React.useState<boolean>(true);
  const handleShowAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };
  const stories = JSON.parse(data.stories);
  const [tableDataState, setTableDataState] = React.useState<Stories[]>(stories);
  tableFilter.setData(stories);

  return (
    <div className='flex'>
      { showAdvancedSearch && 
        <AdvancedSearchComponent
          handleShowAdvancedSearch={handleShowAdvancedSearch}
          tableDataState={tableDataState}
          setTableDataState={setTableDataState}
          tableData={stories}
          tableFilter={tableFilter} />
      }
      <div className='p-0 m-0 w-full h-full'>
        { !showAdvancedSearch &&
        <IconButton className='block m-1' onClick={handleShowAdvancedSearch}>
          <Menu/>
        </IconButton>
        }
        <StoriesTableComponent tableDataState={tableDataState} />
      </div>
    </div>
  )
}

export default StoriesPage