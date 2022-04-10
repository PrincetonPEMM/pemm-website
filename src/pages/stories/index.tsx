import type { NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next'
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  var stories: Stories[] = [];
  try {
    if (process.env.WEBSITE === "http://localhost:300") {
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

const StoriesPage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [showAdvancedSearch, setShowAdvancedSearch] = React.useState<boolean>(true);
  const handleShowAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };
  const [tableDataState, setTableDataState] = React.useState<Stories[]>(data.stories);
  tableFilter.setData(data.stories);

  return (
    <div className='flex'>
      { showAdvancedSearch && 
        <AdvancedSearchComponent
          handleShowAdvancedSearch={handleShowAdvancedSearch}
          tableDataState={tableDataState}
          setTableDataState={setTableDataState}
          tableData={data.stories}
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