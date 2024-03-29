import type {Stories} from '../types/stories';
import React from 'react';

import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const primary = "#3D6F58";
const secondary = "#E8E4DD";
const warning = "#EDA545";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: primary,
}));

const StoriesTableComponent = (props: any) => {
    const [showStoryDetails, setShowStoryDetails] = React.useState<boolean>(true);
    const [tableDetailsButtonText, setTableDetailsButtonText] = React.useState<string>("Title View");
    const updateTableDetialsButtonText = () => {
      setShowStoryDetails(!showStoryDetails);
      if (tableDetailsButtonText === "Title View") setTableDetailsButtonText("Detail View")
      else setTableDetailsButtonText("Title View");
    };
    const updateSubstring = (event: any) => {
      props.tableFilter.filterData.substring = event.target.value;
      props.tableFilter.filterTableData();
      props.setTableDataState(props.tableFilter.getFilteredTableData());
    }
    return (
      <>
        <div className="flex">
          <TextField className="my-1 mr-auto ml-1 w-1/2" onChange={updateSubstring}
            label="Filter" color="primary" focused />
          <Button className="my-1 ml-auto mr-1" color="secondary"
            onClick={updateTableDetialsButtonText}
            sx={{
              bgcolor: primary,
              "&:hover": {
                bgcolor: warning
              }
            }}>{tableDetailsButtonText}</Button>
        </div>
        <TableContainer sx={{
          bgcolor: "secondary.main"
        }} component={Paper}>
          <Table sx={{
            maxWidth: {xs: "none", md: "100vw", lg: "100vw"},
            }} aria-label="story table">
            <TableHead>
              { !showStoryDetails &&
                <StyledTableRow>
                <TableCell align="left" colSpan={6}>
                    <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                      Title of Story
                    </Typography>
                  </TableCell>
                </StyledTableRow>
              }
              { showStoryDetails &&
                <StyledTableRow>
                  <TableCell
                    colSpan={1}
                    sx= {{
                        wordWrap: "break-word",
                        whiteSpace: 'normal',
                    }}
                    align="left">
                    <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                      ID Number
                    </Typography>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    align="left"
                    sx= {{
                        wordWrap: "break-word",
                        whiteSpace: 'normal',
                    }}>
                    <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                      Story&apos;s Century of Origin
                    </Typography>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    align="left"
                    sx= {{
                        wordWrap: "break-word",
                        whiteSpace: 'normal',
                    }}>
                    <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                      Manuscripts with Stories
                    </Typography>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    align="left"
                    sx= {{
                        wordWrap: "break-word",
                        whiteSpace: 'normal',
                    }}>
                    <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                      Paintings of Story
                    </Typography>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    align="left"
                    sx= {{
                        wordWrap: "break-word",
                        whiteSpace: 'normal',
                    }}>
                    <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                      Type of Mary Story
                    </Typography>
                  </TableCell>
                  <TableCell
                    colSpan={1}
                    align="left"
                    sx= {{
                        wordWrap: "break-word",
                        whiteSpace: 'normal',
                    }}>
                    <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                      Theme
                    </Typography>
                  </TableCell>
                </StyledTableRow>
              }
            </TableHead>
            <TableBody>
              {props.tableDataState && props.tableDataState.map((story: Stories , index: number) => (
                <>
                  <TableRow key={"title" + story.macomber_id}>
                    <TableCell
                        colSpan={6}
                        align="left"
                        sx= {{
                            wordWrap: "break-word",
                            whiteSpace: 'normal',
                          }}>
                      <Typography
                        fontWeight={"bold"}
                        className="underline text-primary hover:text-warning visited:text-warning">
                        <Link 
                          href={process.env.WEBSITE + "/stories/" + story.macomber_id}>
                          {story.macomber_title}
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                  { showStoryDetails &&
                    <TableRow
                      key={story.macomber_id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell colSpan={1} align="left" component="th" scope="row">
                        {story.macomber_id}
                      </TableCell>
                      <TableCell colSpan={1} align="left" component="th" scope="row">
                        {story.earliest_attestation}
                      </TableCell>
                      <TableCell colSpan={1} align="left" component="th" scope="row">
                        {story.total_records}
                      </TableCell>
                      <TableCell colSpan={1} align="left" component="th" scope="row">
                        {story.total_story_id_paintings}
                      </TableCell>
                      <TableCell colSpan={1} align="left" component="th" scope="row">
                        {story.type_of_story}
                      </TableCell>
                      <TableCell colSpan={1} align="left" component="th" scope="row">
                        {story.theme}
                      </TableCell>
                    </TableRow>
                  }
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}

export default StoriesTableComponent;