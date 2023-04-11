import type { Manuscripts } from '../types/manuscripts';
import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const primary = "#3D6F58";
const secondary = "#E8E4DD";
const warning = "#EDA545";

// canonical_story_id | macomber_title | confidence_score | location_in_ms | miracle_number | incipit | no_of_paintings_per_story_instance

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: primary,
}));

const ManuscriptCatalogedMiracleRecords = (props: any) => {
  const manuscript = props.manuscript;
  return (
    <>
      <TableContainer sx={{
        bgcolor: "secondary.main"
      }} component={Paper}>
        <Table sx={{
          maxWidth: { xs: "none", md: "100vw", lg: "100vw" },
        }} aria-label="story table">
          <TableHead>
            <StyledTableRow>
              <TableCell
                colSpan={1}
                sx={{
                  wordWrap: "break-word",
                  whiteSpace: 'normal',
                }}
                align="left">
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                  ID
                </Typography>
              </TableCell>
              <TableCell
                colSpan={1}
                align="left"
                sx={{
                  wordWrap: "break-word",
                  whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                  Story Title
                </Typography>
              </TableCell>
              <TableCell
                colSpan={1}
                align="left"
                sx={{
                  wordWrap: "break-word",
                  whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                  ID Certainty
                </Typography>
              </TableCell>
              <TableCell
                colSpan={1}
                align="left"
                sx={{
                  wordWrap: "break-word",
                  whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                  Location in MS
                </Typography>
              </TableCell>
              <TableCell
                colSpan={1}
                align="left"
                sx={{
                  wordWrap: "break-word",
                  whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                  Number in MS
                </Typography>
              </TableCell>
              <TableCell
                colSpan={1}
                align="left"
                sx={{
                  wordWrap: "break-word",
                  whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                  Incipit
                </Typography>
              </TableCell>
              <TableCell
                colSpan={1}
                align="left"
                sx={{
                  wordWrap: "break-word",
                  whiteSpace: 'normal',
                }}>
                <Typography fontWeight={"bold"} variant="subtitle2" color={secondary}>
                  Paintings
                </Typography>
              </TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {manuscript.story_instances && manuscript.story_instances.map((row: any) => (
              <TableRow key={row.story_instance_id}>
                <TableCell
                  sx={{
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                  }}
                  align="left">
                  <Link href={"/stories/" + row.canonical_story_id}>
                    <a>{row.story_instance_id}</a>
                  </Link>
                </TableCell>
                <TableCell
                  sx={{
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                  }}
                  align="left">
                  {row.macomber_title}
                </TableCell>
                <TableCell
                  sx={{
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                  }}
                  align="left">
                  {row.confidence_score}
                </TableCell>
                <TableCell
                  sx={{
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                  }}
                  align="left">
                  {row.location_in_ms}
                </TableCell>
                <TableCell
                  sx={{
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                  }}
                  align="left">
                  {row.miracle_number}
                </TableCell>
                <TableCell
                  sx={{
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                  }}
                  align="left">
                  {row.incipit}
                </TableCell>
                <TableCell
                  sx={{
                    wordWrap: "break-word",
                    whiteSpace: 'normal',
                  }}
                  align="left">
                  {row.no_of_paintings_per_story_instance}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ManuscriptCatalogedMiracleRecords;