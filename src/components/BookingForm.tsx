"use client";

import { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DateReserve from "./DateReserve";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [venue, setVenue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Book Venue:\nName: ${name}\nContact: ${contact}\nVenue: ${venue}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="mx-auto mt-8 max-w-xl space-y-6"
    >
      <TextField
        name="Name-Lastname"
        label="Name-Lastname"
        variant="standard"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        name="Contact-Number"
        label="Contact-Number"
        variant="standard"
        fullWidth
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      {/* Venue select */}
      <FormControl fullWidth variant="standard">
        <InputLabel id="venue-label">Venue</InputLabel>
        <Select
          labelId="venue-label"
          id="venue"
          name="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value as string)}
          // important: ensure role="combobox" for test
          SelectDisplayProps={{ role: "combobox" }}
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
      </FormControl>

      <DateReserve />

      <div className="pt-2">
        <Button type="submit" variant="contained" name="Book Venue">
          Book Venue
        </Button>
      </div>
    </Box>
  );
}
