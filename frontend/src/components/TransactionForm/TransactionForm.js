import React, { useEffect, useState } from "react";
import "./TransactionForm.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Alert, Container, Stack } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";

const TransactionForm = ({ fetchTransactions, editTransaction }) => {
  const [inputs, setInputs] = useState({
    amount: 0,
    description: "",
    date: new Date(),
    category_id: "",
  });

  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const token = Cookies.get("token");

  useEffect(() => {
    if (editTransaction.amount !== undefined) {
      setInputs(editTransaction);
    }
  }, [editTransaction]);

  const inputsHandler = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const create = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.post(
        "http://localhost:5000/transaction",
        {
          amount: inputs.amount,
          description: inputs.description,
          date: inputs.date,
        },
        config
      );
      const data = await res.data;

      if (data === "Transaction Data Added Successfully!") {
        setInputs({
          amount: 0,
          description: "",
          date: new Date(),
        });
        fetchTransactions();
        window.alert("New Transaction Data Added Successfully!");
      }
      setErrMsg("");
      setIsError(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setErrMsg(err.response.data);
    }
  };

  const update = async () => {
    try {
      const config = {
        headers: {
          Content_Type: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.put(
        `http://localhost:5000/transaction/${editTransaction._id}`,
        {
          amount: inputs.amount,
          description: inputs.description,
          date: inputs.date,
        },
        config
      );
      const data = await res.data;
      if (data === "Single Transaction Updated Successfully!") {
        setInputs({
          amount: 0,
          description: "",
          date: new Date(),
        });
        fetchTransactions();
        window.alert("Transaction Data Updated Successfully!");
        window.location.reload(false);
      }
    } catch (err) {
      console.log(err);
      // setError(err)
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    editTransaction.amount === undefined ? create() : update();
  };

  const dateHandler = (newValue) => {
    setInputs({ ...inputs, date: newValue });
  };

  const handleCancle = () => {
    setInputs({
      amount: 0,
      description: "",
      date: new Date(),
      category_id: "",
    });
    window.location.reload(false);
  };

  return (
    <>
      {isError && (
        <Stack className="errorstackinlogin">
          <Alert severity="error" variant="filled" className="errortextinlogin">
            <span>{errMsg}</span>
          </Alert>
        </Stack>
      )}
      <Container className="tform">
        <div className="tformheading">Add New Transaction</div>
        <Card sx={{ minWidth: 275 }} className="transactionformmain">
          <CardContent>
            <form onSubmit={submitHandler} className="transactionformform">
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                value={inputs.amount}
                onChange={inputsHandler}
                name="amount"
                required
                autoComplete="off"
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                type="text"
                value={inputs.description}
                onChange={inputsHandler}
                name="description"
                required
                autoComplete="off"
              />
              {/* Date Picker Starts*/}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Transaction Date"
                  inputFormat="MM/DD/YYYY"
                  value={inputs.date}
                  onChange={dateHandler}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              {/* Date Picker Ends */}
              {editTransaction.amount === undefined && (
                <div className="tfsubmitbtn">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className="submitforminformbtn"
                  >
                    SUBMIT
                  </Button>
                </div>
              )}
              {editTransaction.amount !== undefined && (
                <div className="tfupdatecancelbtn">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    className="updateinf"
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleCancle}
                    size="large"
                    className="updatecancel"
                  >
                    CANCEL
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default TransactionForm;
