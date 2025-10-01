"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateReserve() {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Reserve Date"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        // v6 API: control the underlying TextField via slotProps
        slotProps={{
          textField: {
            name: "Reserve-Date",
            variant: "standard",
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
}
