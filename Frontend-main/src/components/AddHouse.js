import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./css/AddHouse.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Axios from "../config/Axios";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

import locations from './location'
import values from "./values";
import Autocomplete from '@mui/material/Autocomplete';

export const AddHouse = () => {
  const [area, setArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [predictedPrice, setPredictedPrice] = useState(0);
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [wantedPrice, setWantedPrice] = useState("");
  const cities = ["Bangalore","Chennai","Delhi","Hyderabad","Kolkata","Mumbai"];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const notify = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleClose = async(e) => {
    setOpen(false);
      if(e == 2) {
        const config = {
          headers: {
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userInfo")).token}`,
          },
        };
        console.log("Config",config);
        // alert();
        // return;
        
        const body = {
          userId: JSON.parse(localStorage.getItem("userInfo")).user._id,
          area: area,
          city: city,
          location: location,
          wantedPrice: wantedPrice,
          predictedPrice: predictedPrice
        };

        try{
          const result = await Axios.post("/house/availableHouses", body, config);
          console.log(JSON.stringify(result.data), "sUCESS...");
          setLoading(false);
          if(result.status) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "House added successfully...",
              showConfirmButton: false,
              timer: 2000,
            });
            
          }
      
        } catch(err) {
          console.log("ERROR...", err);
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Some error occurred...",
            showConfirmButton: false,
            timer: 2000,
          });
          setLoading(false);
            
        }
      } 

      setArea("");
      setCity(null);
      setLocation(null);
      setWantedPrice("");
  };

  const handleSubmit = async () => {
    if (area == "") {
      notify("Area is required...");
      return;
    }

    if(city == "" || city == null) {
      notify("City is required...");
      return;
    }

    if(location == "" || location == null) {
      notify("Location is required...");
      return;
    }


    
    if (wantedPrice == "") {
      notify("Wanted price is required...");
      return;
    }


    setLoading(true);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = {
      area: area,
      city: values[city],
      location: values[location],
      wantedPrice: wantedPrice,
      predictedPrice: predictedPrice
    };

    try {
      const result = await Axios.post("/prediction/predict", body, config);

      console.log(JSON.stringify(result.data), "sUCESS...");
      
      setPredictedPrice(result.data.price);
      handleClickOpen();
    } catch (err) {
      console.log("ERROR...");
      setLoading(false);
    }
  };

  return (
    <div className="bg1">
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
      <Paper
        variant="outlined"
        sx={{ my: { xs: 0, md: 0 }, p: { xs: 2, md: 3 } }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          sx={{ marginBottom: "20px" }}
        >
          <span className="predictiHeading">Add House</span>
        </Typography>
        <React.Fragment>
          <React.Fragment>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
                <TextField
                  required
                  name="area"
                  fullWidth
                  autoComplete="given-name"
                  id="standard-basic"
                  label="Area"
                  type="number"
                  variant="standard"
                  value={area}
                  onChange={(event) => setArea(event.target.value)}
                />
              </Grid>
              
             
              <Grid item xs={6}>
                <Autocomplete
                  value={city}
                  disablePortal
                  id="combo-box-demo"
                  options={cities}
                  fullWidth
                  onChange={(event, newValue) => {
                    setCity(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} label="City" fullWidth />}
                />
              </Grid>
              <Grid item xs={6}>
                <Autocomplete
                  value={location}
                  disablePortal
                  id="combo-box-demo"
                  options={(city!="" && city!=null)?locations[city]:[]}
                  fullWidth
                  onChange={(event, newValue) => {
                    setLocation(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} label="Location" fullWidth />}
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="Wanted Price"
                  fullWidth
                  autoComplete="given-name"
                  id="standard-basic"
                  label="Wanted Price"
                  type="number"
                  variant="standard"
                  value={wantedPrice}
                  onChange={(event) => setWantedPrice(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <Button
                    id="btn"
                    onClick={() => handleSubmit()}
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {"Add House"}
                  </Button>
                )}
              </Grid>
            </Grid>
          </React.Fragment>
        </React.Fragment>
      </Paper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Preicted price of your house is"} {predictedPrice}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to add this house in selling list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(1)}>No</Button>
          <Button onClick={() => handleClose(2)} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </Container>
    </div>

  );
};
