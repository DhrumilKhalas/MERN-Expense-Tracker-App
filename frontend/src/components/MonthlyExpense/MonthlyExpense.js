import React from "react";
import "./MonthlyExpense.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MonthlyExpense = ({ expense }) => {
  return (
    <>
      <Container>
        <Typography className="montlhyexpenseheading">
          <span>Monthly Expense</span>
        </Typography>
        <Card>
          <CardContent>
            {expense.map((obj) => {
              return (
                <>
                  {/* January */}
                  {obj._id === 1 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>January</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      January, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* February */}
                  {obj._id === 2 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>February</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      February, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* March */}
                  {obj._id === 3 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>March</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      March, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* April */}
                  {obj._id === 4 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>April</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      April, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* May */}
                  {obj._id === 5 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>May</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      May, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* June */}
                  {obj._id === 6 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>June</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      June, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* July */}
                  {obj._id === 7 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>July</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      July, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* August */}
                  {obj._id === 8 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>August</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      August, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* September */}
                  {obj._id === 9 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>September</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      September, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* October */}
                  {obj._id === 10 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>October</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      October, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* November */}
                  {obj._id === 11 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>November</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      November, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* December */}
                  {obj._id === 12 && (
                    <Card key={obj._id}>
                      <CardContent className="monthwisecard">
                        <Box className="memonthandexpense">
                          <Typography className="memonth">
                            <span>December</span>
                          </Typography>
                          <Typography>
                            Total:
                            <span className="metotalexpense">
                              {obj.totalExpenses}
                            </span>
                          </Typography>
                        </Box>
                        <Accordion className="meaccordian">
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"

                            // id="panel1a-header"
                          >
                            <Typography className="memoredetails">
                              More Details
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              {obj.transactions.map((t, i) => {
                                return (
                                  <Box className="memoredetailsbox" key={i}>
                                    <Box className="memoredetailsboxamount">
                                      Amount: {t.amount}
                                    </Box>
                                    <Box className="memoredetailsboxdesc">
                                      Description: {t.description}
                                    </Box>
                                    <Box className="memoredetailsboxdate">
                                      December, {t.date.slice(0, 4)}
                                    </Box>
                                    <hr />
                                  </Box>
                                );
                              })}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}
                </>
              );
            })}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default MonthlyExpense;
