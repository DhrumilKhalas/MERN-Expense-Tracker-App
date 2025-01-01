import "./TransactionsList.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton } from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import dayjs from "dayjs";
import Cookies from "js-cookie";

const TransactionsList = ({
  transactions,
  fetchTransactions,
  setEditTransaction,
}) => {
  const token = Cookies.get("token");

  const remove = async (_id) => {
    if (!window.confirm("Are you sure?")) return;
    else {
      const res = await fetch(`http://localhost:5000/transaction/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        fetchTransactions();
        window.alert("Transaction Data Deleted Successfully!");
      }
    }
  };

  const formatDate = (date) => {
    return dayjs(date).format("DD MMM, YYYY");
  };

  return (
    <>
      <Container className="tlists">
        <div className="tlistheading">Transactions List</div>
        <TableContainer component={Paper} className="transactionslistmain">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.amount}
                  </TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{formatDate(row.date)}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      component="label"
                      onClick={() => {
                        setEditTransaction(row);
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <EditSharpIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      component="label"
                      onClick={() => {
                        remove(row._id);
                      }}
                    >
                      <DeleteSharpIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default TransactionsList;
