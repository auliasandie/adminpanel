import React, { useState } from "react";
import { DateRangePicker, DateRange } from "materialui-daterange-picker";
 

 
const DatePicker = (props) => {
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState({});
 
  const toggle = () => setOpen(!open);
 
  return (
    <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}
    />
  );
}
 
export default DatePicker;