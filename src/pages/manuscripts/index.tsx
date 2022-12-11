import type { NextPage, GetStaticProps, InferGetStaticPropsType} from 'next'
import type {Manuscripts} from '../../components/types/manuscripts';
import { TEST_DATA } from '../../data/manuscripts';
import ManuscriptsTableComponent from '../../components/elements/manuscriptsTableComponent';

import axios from 'axios';


export const getStaticProps: GetStaticProps = async (context) => {
  var manuscripts: Manuscripts[] = [];
  try {
    if (process.env['ENVIRONMENT'] == "DEV") {
      manuscripts = TEST_DATA;
    } else {
      const res = await axios(process.env.REACT_APP_API + 'manuscripts/');
      manuscripts = await res.data;
    }
    return {
      props: {
        data: {
          manuscripts: JSON.stringify(manuscripts)
        }
      }
    }
  } catch {
      return {
        props: {
          data: {
            manuscripts: JSON.stringify([])
          }
        }
      }
  }
}

const ManuscriptsPage: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const manuscripts: Manuscripts[] = JSON.parse(data.manuscripts);
  return (
    <div>
      <ManuscriptsTableComponent
        tableDataState={manuscripts}/>
    </div>
  )
}

export default ManuscriptsPage
