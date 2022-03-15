import type { NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next'
import React from 'react';
import type {Stories} from '../../components/types/stories';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios(process.env.REACT_APP_API + 'stories/');
    const stories: Stories[] = await res.data;
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
  return (
    <div>
      <TableContainer sx={{
        bgcolor: "secondary.main"
      }} component={Paper}>
        <Table sx={{
          marginLeft: {xs: "0", md: "1em", lg: "3em"},
          maxWidth: {xs: "none", md: "95vw", lg: "95vw"},
          }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell  align="left"></TableCell>
              <TableCell align="left">Macomber ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.stories.map((story: Stories) => (
              <TableRow
                key={story.macomber_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" sx= {{
                  maxWidth: {xs: "15rem", md: "5rem", lg: "5rem"},
                  wordWrap: "break-word",
                  whiteSpace: 'normal',
                }}>{story.macomber_title}</TableCell>
                <TableCell align="left" component="th" scope="row">
                  {story.macomber_id}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default StoriesPage