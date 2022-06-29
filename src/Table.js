import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));







export default function CustomizedTables() {


  // ! gizlenecek
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBGQ0Y0N0E5NzVDQzJCNTdEQTdFRkFGQUM2MTkxOUUyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTY0OTM2MzUsImV4cCI6MTY1NjQ5NzIzNSwiaXNzIjoiaHR0cDovL2M0ZjIuYWNzaWdodC5jb206NzcxMCIsImF1ZCI6InNjb3BlLmZ1bGxhY2Nlc3MiLCJjbGllbnRfaWQiOiJDbGllbnRJZFdpdGhGdWxsQWNjZXNzIiwic3ViIjoiUGFydG5lciMxNCIsImF1dGhfdGltZSI6MTY1NjQ5MzYzNCwiaWRwIjoibG9jYWwiLCJVc2VySUQiOiIxNCIsIlVzZXJUeXBlIjoiUGFydG5lciIsIlBhcnRuZXJJRCI6IjExIiwiQ2xpZW50SUQiOiIwIiwiREJUeXBlIjoiMCIsIlNlcnZlciI6IiIsIkRhdGFiYXNlIjoiIiwiVXNlcm5hbWUiOiIiLCJQYXNzd29yZCI6IiIsImp0aSI6IjgyNDBFMzQ1NTY4QzY3RDBBQzRFQjNBOTY5MzgzMzAxIiwiaWF0IjoxNjU2NDkzNjM1LCJzY29wZSI6WyJzY29wZS5mdWxsYWNjZXNzIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.WpdXYEtk5qknC6AG6-emT6I0HW32P7pdo0sAlo0KOrYy83E2xqZ-TKYXDFGya1mWIKzQ5WvA3wnRCOjR6HmBAUGEI_43ySorHIOHkzbD5ewuwnyo472HPdrSiDZA69dl59qTPXpCYBmxzzJGd9siw8Tqyf3dcB-PcYcNz0fDaH5Gf9AsfYMGfuffczudJA_QAo_Lfdxkj06e6j0LaeAiohHVDUvmqiEK932P_KQ3af72rMuFj66YFK5Jn7odg03gsphG5EQjld9rxhNIxURC92oYflxM-On0XgU1eT6aO4Mc3SBzJbAIxdUMrWvf-WJqAgDMIZQoiAJE9eHekHW23A";


  const [veri, setVeri] = useState();

  useEffect(() => {

     const veriler = async function fetchText() {
     const response =await fetch('http://c4f2.acsight.com:7770/api/system/sms-provider-list', {
     headers: {
           'Content-type': 'application/json',
           'Authorization': `Bearer ${token}`,
         }

       })
       const data = await response.json();
       setVeri(data)

    }
    veriler()
  }, [])
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Providers</StyledTableCell>
                <StyledTableCell align="right">id</StyledTableCell>
                <StyledTableCell align="right">providerID</StyledTableCell>
                <StyledTableCell align="right">partnerID</StyledTableCell>
                <StyledTableCell align="right">baseURL</StyledTableCell>
                <StyledTableCell align="right">fromName</StyledTableCell>
                <StyledTableCell align="right">username</StyledTableCell>
                <StyledTableCell align="right">password</StyledTableCell>
                <StyledTableCell align="right">vendorCode</StyledTableCell>
                <StyledTableCell align="right">api key</StyledTableCell>
                <StyledTableCell align="right">secretKey</StyledTableCell>
                <StyledTableCell align="right">accountSID</StyledTableCell>
                <StyledTableCell align="right">authToken</StyledTableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {veri.data.partnerProviders.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.fromName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.id}</StyledTableCell>
                  <StyledTableCell align="right">{row.providerID}</StyledTableCell>
                  <StyledTableCell align="right">{row.partnerID}</StyledTableCell>
                  <StyledTableCell align="right">{row.baseURL}</StyledTableCell>
                  <StyledTableCell align="right">{row.fromName}</StyledTableCell>
                  <StyledTableCell align="right">{row.username}</StyledTableCell>
                  <StyledTableCell align="right">{row.password}</StyledTableCell>
                  <StyledTableCell align="right">{row.vendorCode}</StyledTableCell>
                  <StyledTableCell align="right">{row.apiKey}</StyledTableCell>
                  <StyledTableCell align="right">{row.secretKey}</StyledTableCell>
                  <StyledTableCell align="right">{row.accountSID}</StyledTableCell>
                  <StyledTableCell align="right">{row.authToken}</StyledTableCell>


                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <form style={{ margin: "25px" }}>
          <label>
            id:
            <input type="text" name="name" /><br />
          </label>
          <label>
            providerID:
            <input type="text" name="name" /><br />
          </label>
          <label>
            partnerID:
            <input type="text" name="name" /><br />
          </label>
          <label>
            baseURL:
            <input type="text" name="name" maxLength={100} /><br />
          </label>
          <label>
            fromName:
            <input type="text" name="name" maxLength={100} /><br />
          </label>
          <label>
            username:
            <input type="text" name="name" /><br />
          </label>
          <label>
            password:
            <input type="text" name="name" maxLength={100} /><br />
          </label>
          <label>
            api-key:
            <input type="text" name="name" /><br />
          </label>
          <label>
            secretKey:
            <input type="text" name="name" /><br />
          </label>
          <label>
            accountSID:
            <input type="text" name="name" /><br />
          </label>
          <label>
            authToken:
            <input type="text" name="name" /><br />
          </label>



          <input type="submit" value="Submit"></input>
        </form >
      </>
    );
}