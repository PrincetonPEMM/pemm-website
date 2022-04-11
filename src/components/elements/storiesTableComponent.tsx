import type {Stories} from '../types/stories';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const StoriesTableComponent = (props: any) => {
    return (
      <TableContainer sx={{
        bgcolor: "secondary.main"
      }} component={Paper}>
        <Table sx={{
          marginLeft: {xs: "0", md: "1em", lg: "3em"},
          maxWidth: {xs: "none", md: "95vw", lg: "95vw"},
          }} aria-label="story table">
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography fontWeight={"bold"}>
                  Title of Story
                </Typography>
              </TableCell>
              <TableCell
                sx= {{
                    maxWidth: {xs: "5rem", md: "5rem", lg: "5rem"},
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                }}
                align="left">
                <Typography fontWeight={"bold"}>
                  Macomber ID
                </Typography>
              </TableCell>
              <TableCell 
                align="left"
                sx= {{
                    maxWidth: {xs: "5rem", md: "5rem", lg: "5rem"},
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"}>
                  Story&apos;s Century of Origin
                </Typography>
              </TableCell>
              <TableCell 
                align="left"
                sx= {{
                    maxWidth: {xs: "5rem", md: "5rem", lg: "5rem"},
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"}>
                  Number of Manuscripts with Stories
                </Typography>
              </TableCell>
              <TableCell 
                align="left"
                sx= {{
                    maxWidth: {xs: "5rem", md: "5rem", lg: "5rem"},
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"}>
                  Number of Paintings of Story
                </Typography>
              </TableCell>
              <TableCell 
                align="left"
                sx= {{
                    maxWidth: {xs: "5rem", md: "5rem", lg: "5rem"},
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"}>
                  Type of Mary Story
                </Typography>
              </TableCell>
              <TableCell 
                align="left"
                sx= {{
                    maxWidth: {xs: "5rem", md: "5rem", lg: "5rem"},
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"}>
                  Theme
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tableDataState && props.tableDataState.map((story: Stories) => (
              <TableRow
                key={story.macomber_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell 
                    align="left"
                    sx= {{
                        maxWidth: {xs: "15rem", md: "15rem", lg: "25rem"},
                        wordWrap: "break-word",
                        whiteSpace: 'normal',
                      }}>
                  <Typography fontWeight={"bold"}>
                    {story.macomber_title}
                  </Typography>
                  <Typography fontWeight={"bold"}>
                    {story.canonical_incipit}
                  </Typography>
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {story.macomber_id}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {story.earliest_attestation}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {story.total_records}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {story.total_paintings}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {story.non_life_miracle === true && "Miracle Story"}
                  {story.non_life_miracle === false && "Life Story"}
                </TableCell>
                <TableCell align="left" component="th" scope="row">
                  {story.theme}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default StoriesTableComponent;