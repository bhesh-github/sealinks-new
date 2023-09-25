import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const dateStr = new Date();
const year = dateStr.getFullYear();
const month = dateStr.getMonth();
const date = dateStr.getDate();

export default function ResponsiveDatePickers({
  label_name,
  formInputs,
  setFormInputs,
  dateType,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {dateType === "appointment-date" && (
        <div className="datepiker">
          <label>{label_name}</label>
          <DatePicker
            defaultValue={dayjs(`${year}-${month + 1}-${date}`)}
            onChange={(selectedDate) => {
              const sYear = selectedDate.$y;
              const sMonth = selectedDate.$M;
              const sDate = selectedDate.$D;
              setFormInputs((prev) => ({
                ...prev,
                appointment_date: `${sYear}-${sMonth + 1}-${sDate}`,
              }));
            }}
          />
        </div>
      )}
      {dateType === "dob" && (
        <div className="datepiker">
          <label>{label_name}</label>
          <DatePicker
            defaultValue={dayjs(`${year}-${month + 1}-${date}`)}
            onChange={(selectedDate) => {
              const sYear = selectedDate.$y;
              const sMonth = selectedDate.$M;
              const sDate = selectedDate.$D;
              setFormInputs((prev) => ({
                ...prev,
                dob: `${sYear}-${sMonth + 1}-${sDate}`,
              }));
            }}
          />
        </div>
      )}
    </LocalizationProvider>
  );
}
