/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../components/AddressForm";
import TimeEstimate from "../components/TimeEstimate";
import PaymentForm from "../components/PaymentForm";
import Header from "../components/Header";
import Menu from "../assets/menu";
import "./Order.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  classic: boolean;
}

function App() {
  const location = useLocation();
  const { cart, address } = location.state;

  const orderSummary = cart;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const [menu, setMenu] = useState<Array<MenuItem>>([]);

  async function fetchMenu() {
    try {
      const response = await fetch(
        "https://dronuts-backend-344601.ue.r.appspot.com/donuts"
      ).then((res) => res.json());
      setMenu(response);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  function getPrice(itemId: number) {
    const item = menu.filter((item) => item.id == itemId)[0];
    return item.price;
  }

  function getName(itemId: number) {
    const item = menu.filter((item) => item.id == itemId)[0];
    return item.name;
  }

  function calculateTotal() {
    let total = 0;
    cart.map((item: CartItem) => {
      total += getPrice(item.itemId) * item.quantity;
    });
    return total;
  }

  const addresses = ["5000 Forbes Ave", "Pittsburgh", "PA", "15213", "USA"];
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: "Michael Hilton" },
    { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date", detail: "04/2024" },
  ];

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright ?? "}
        <Link color="inherit" to="/menu">
          Dronuts
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const steps = [
    "Shipping address",
    "Time Estimate",
    "Payment details",
    "Review your order",
  ];

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <TimeEstimate />;
      case 2:
        return <PaymentForm />;
      case 3:
        return (
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Order summary
            </Typography>
            <List disablePadding>
              {cart.map((item, i) => {
                if (item.quantity > 0) {
                  return (
                    <ListItem key={i} sx={{ py: 1, px: 0 }}>
                      <ListItemText primary={getName(item.itemId)} />
                      <Typography variant="body2">
                        {item.quantity} x{" "}
                        {formatter.format(getPrice(item.itemId))}
                      </Typography>
                    </ListItem>
                  );
                }
              })}
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Delivery" />
                <Typography variant="body2">{formatter.format(1.5)}</Typography>
              </ListItem>
              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {formatter.format(calculateTotal() + 1.5)}
                </Typography>
              </ListItem>
            </List>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Delivery
                </Typography>
                <Typography gutterBottom>Michael Hilton</Typography>
                <Typography gutterBottom>{addresses.join(", ")}</Typography>
              </Grid>
              <Grid item container direction="column" xs={12} sm={6}>
                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                  Payment details
                </Typography>
                <Grid container>
                  {payments.map((payment) => (
                    <React.Fragment key={payment.name}>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{payment.name}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography gutterBottom>{payment.detail}</Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      default:
        throw new Error("Unknown step");
    }
  }

  const theme = createTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    handleNext();

    const data = {
      customerId: Math.round(100 * Math.random()),
      items: cart,
      address: "5000 Forbes Ave",
    };

    console.log(JSON.stringify(data));
    console.log(activeStep);

    // ARRAY OF ITEMS NOT GETTING SAVED ON DATABASE
    try {
      console.log(JSON.stringify(data));
      const sendData = axios
        .post("https://dronuts-backend-344601.ue.r.appspot.com/order", data)
      console.log(sendData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Header />
        <div className="pageContent">
          <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                      Your order number is #53. We have emailed your order
                      confirmation, and your order should arrive to 5000 Forbes
                      Ave, Pittsburgh, PA 15213, USA in 15-20 minutes.
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {activeStep !== 0 && (
                        <Button
                          className="backwardButton"
                          onClick={handleBack}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        className="forwardButton"
                        variant="contained"
                        onClick={
                          activeStep === steps.length - 1
                            ? handleSubmit
                            : handleNext
                        }
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1
                          ? "Place order"
                          : "Next"}
                      </Button>
                    </Box>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
            <Copyright />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
