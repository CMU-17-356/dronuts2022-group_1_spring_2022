import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Button} from "@mui/material";

export default function NewDonutForm() {
  const [id, setId] = React.useState(-1);
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(-1.0);
  const [stock, setStock] = React.useState(-1);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Post New Shop Item
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="itemId"
            label="Item ID"
            fullWidth
            variant="standard"
            type="number"
            onChange={(event) => {
              setId(parseInt(event.target.value));
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="itemName"
            label="Item Name"
            fullWidth
            variant="standard"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="price"
            label="Item Price"
            fullWidth
            variant="standard"
            type="number"
            onChange={(event) => {
              setPrice(parseFloat(event.target.value));
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="stock"
            label="Item Stock"
            fullWidth
            variant="standard"
            type="number"
            onChange={(event) => {
              setStock(parseInt(event.target.value));
            }}
          />
        </Grid>
        {
          id > 0 && name != '' && price > 0.0 && stock > 0 && (
            <Grid item xs={12}>
              <Button variant="contained">Post Item</Button>
            </Grid>
          )
        }
        
      </Grid>
    </React.Fragment>
  );
}