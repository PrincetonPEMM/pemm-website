import type {Manuscripts} from '../types/manuscripts';
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

const ManuscriptsTableComponent = (props: any) => {
    return (
      <>
        <TableContainer sx={{
          bgcolor: "secondary.main"
        }} component={Paper}>
          <Table sx={{
            maxWidth: {xs: "none", md: "100vw", lg: "100vw"},
            }} aria-label="story table">
            <TableHead>
                <StyledTableRow>
                  <TableCell
                    colSpan={1}
                    sx= {{
                        wordWrap: "break-word",
                        whiteSpace: 'normal',
                    }}
                    align="left">
                    <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                      Manuscript Range
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
                      Total Stories
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
                      Provenance
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
                      Total Paintings
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
                      Digital Link
                    </Typography>
                  </TableCell>
                </StyledTableRow>
            </TableHead>
            <TableBody>
              {props.tableDataState.map((manuscript: Manuscripts , index: number) => (
                <>
                  <TableRow key={"title" + manuscript.manuscript_id}>
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
                          href={process.env.WEBSITE + "/manuscripts/" + manuscript.manuscript_id}>
                          {manuscript.manuscript_full_name}
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                <TableRow
                    key={manuscript.manuscript_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell colSpan={1} align="left" component="th" scope="row">
                    {manuscript.century}
                    </TableCell>
                    <TableCell colSpan={1} align="left" component="th" scope="row">
                    {manuscript.total_stories}
                    </TableCell>
                    <TableCell colSpan={1} align="left" component="th" scope="row">
                    {manuscript.provenance}
                    </TableCell>
                    <TableCell colSpan={1} align="left" component="th" scope="row">
                    {manuscript.total_paintings}
                    </TableCell>
                    <TableCell colSpan={1} align="left" component="th" scope="row">
                    { manuscript.link_to_digital_copy &&
                        <Typography
                        className="hover:text-warning visited:text-warning">
                            <Link href={manuscript.link_to_digital_copy}>
                                Digital Copy
                            </Link>
                        </Typography>
                    }
                    </TableCell>
                </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}

export default ManuscriptsTableComponent;