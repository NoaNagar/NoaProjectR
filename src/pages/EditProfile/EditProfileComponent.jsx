import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { handleSubmit } from "./EditProfile";
import { inputsValueObj } from "./inputValueObj";

const EditProfile = () => {
  const [inputsValue, setInputsValue] = useState(inputsValueObj);
  const navigate = useNavigate();
  const [errorsState, setErrorsState] = useState(null);
  const id = useSelector((bigPie) => bigPie.authSlice.id);

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmitClick = () => {
    handleSubmit(inputsValue, setErrorsState, navigate, id);
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main", width: 60, height: 60 }}>
          <BorderColorIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit profile{" "}
        </Typography>

        <Grid sx={{ width: "60vw" }}>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
            <TextField
              sx={{ mt: 2 }}
              id="first"
              variant="outlined"
              label="First Name"
              defaultValue={inputsValue.first}
              onChange={handleInputsChange}
              required
            />
            {errorsState && errorsState.first && (
              <Alert severity="warning">{errorsState.first}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="middle"
              variant="outlined"
              label="Middle name"
              defaultValue={inputsValue.middle}
              onChange={handleInputsChange}
            />
            {errorsState && errorsState.middle && (
              <Alert severity="warning">{errorsState.middle}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="last"
              variant="outlined"
              label="Last name"
              defaultValue={inputsValue.last}
              onChange={handleInputsChange}
              required
            />
            {errorsState && errorsState.last && (
              <Alert severity="warning">{errorsState.last}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="phone"
              variant="outlined"
              label="Phone"
              defaultValue={inputsValue.phone}
              onChange={handleInputsChange}
              required
            />
            {errorsState && errorsState.phone && (
              <Alert severity="warning">{errorsState.phone}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="country"
              variant="outlined"
              label="Country"
              defaultValue={inputsValue.country}
              onChange={handleInputsChange}
              required
            />
            {errorsState && errorsState.countery && (
              <Alert severity="warning">{errorsState.countery}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="city"
              variant="outlined"
              label="City"
              defaultValue={inputsValue.city}
              onChange={handleInputsChange}
              required
            />
            {errorsState && errorsState.city && (
              <Alert severity="warning">{errorsState.city}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="state"
              variant="outlined"
              label="State"
              defaultValue={inputsValue.state}
              onChange={handleInputsChange}
            />
            {errorsState && errorsState.state && (
              <Alert severity="warning">{errorsState.state}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="street"
              variant="outlined"
              label="Street"
              defaultValue={inputsValue.street}
              onChange={handleInputsChange}
              required
            />
            {errorsState && errorsState.street && (
              <Alert severity="warning">{errorsState.street}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="houseNumber"
              variant="outlined"
              label="House number"
              defaultValue={inputsValue.houseNumber}
              onChange={handleInputsChange}
              required
            />
            {errorsState && errorsState.houseNumber && (
              <Alert severity="warning">{errorsState.houseNumber}</Alert>
            )}
            <TextField
              sx={{ mt: 2 }}
              id="zip"
              variant="outlined"
              label="Zip"
              defaultValue={inputsValue.zip}
              onChange={handleInputsChange}
            />
            {errorsState && errorsState.zip && (
              <Alert severity="warning">{errorsState.zip}</Alert>
            )}
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            onClick={handleSubmitClick}
            fullWidth
          >
            UPDATE
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default EditProfile;
