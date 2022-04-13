import type {Stories} from '../types/stories';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const primary = "#3D6F58";
const secondary = "#E8E4DD";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: primary,
}));

const StoriesTableComponent = (props: any) => {
    return (
      <TableContainer sx={{
        bgcolor: "secondary.main"
      }} component={Paper}>
        <Table sx={{
          maxWidth: {xs: "none", md: "100vw", lg: "100vw"},
          }} aria-label="story table">
          <TableHead>
            <StyledTableRow>
              <TableCell align="left">
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
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
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
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
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
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
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
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
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
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
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
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
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                  Theme
                </Typography>
              </TableCell>
            </StyledTableRow>
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