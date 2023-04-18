import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Box from '@mui/material/Box';
import type { Manuscripts } from '../../components/types/manuscripts';
import { MANUSCRIPT_1_TEST_DATA } from '../../data/manuscript1';
import { GeneratedManuscriptText } from '../../components/elements/generatedManuscriptText';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { manuscriptId } = context.query;
  try {
    var manuscript: Manuscripts = {};
    if (process.env['ENVIRONMENT'] == "DEV") {
      manuscript = MANUSCRIPT_1_TEST_DATA;
    } else {
      const res = await axios(process.env.REACT_APP_API + 'manuscripts/' + manuscriptId);
      if (res.data.length > 0) {
        manuscript = res.data[0];
      }
    }

    return {
      props: {
        data: {
          manuscript: manuscript
        }
      }
    }
  } catch {
    return {
      props: {
        data: {
          manuscript: {}
        }
      }
    }
  }
}

const ManuscriptDetailPage: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Box sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex', lg: 'flex' }
      }}>
        <div className="flex space-x-10 flex-wrap ml-2">
          <div className='m-4 w-3/4'>
            <Typography variant="h3">{data.manuscript.manuscript_full_name}</Typography>
          </div>
          <div className="w-1/2 flex flex-col">
            <GeneratedManuscriptText manuscript={data.manuscript} />
          </div>
        </div>
      </Box>

      <Box sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none', lg: 'none' }
      }}>
        <div className='m-4'>
          <Typography variant="h6">{data.manuscript.manuscript_name}</Typography>
        </div>

        <div className="w-1/2 flex flex-col">
          <GeneratedManuscriptText manuscript={data.manuscript} />
        </div>
      </Box>
    </div>
  )
}

export default ManuscriptDetailPage
