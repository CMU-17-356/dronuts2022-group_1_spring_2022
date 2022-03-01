/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../components/AddressForm';
import TimeEstimate from '../components/TimeEstimate';
import PaymentForm from '../components/PaymentForm';
import Review from '../components/Review';
import Header from "../components/Header";
import "./Order.css";
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const { cart, address } = location.state;

  // console.log(cart);
  // console.log(address);
 
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Dronuts
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const steps = ['Shipping address', 'Time Estimate', 'Payment details', 'Review your order'];
  
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <TimeEstimate />;
      case 2:
        return <PaymentForm />;
      case 3:
        return <Review />;
      default:
        throw new Error('Unknown step');
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

      const data = {'customerId': 100*(Math.random()),
      'items': cart,
      'address': '5000 Forbes Ave'};

      try {
        const sendData = axios.post('/order', data).then((res) => (res.json()));
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
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
                    Your order number is #2001539. We have emailed your order
                    confirmation, and your order should arrive to 5000 Forbes Ave, 
                    Pittsburgh, PA 15213, USA in 15-20 minutes.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={activeStep === steps.length - 1 ? handleNext : handleSubmit}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
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
