import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';


// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;



const DatePickerr = () => (
  <Space direction="vertical" size={10}>
    <RangePicker
      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </Space>
);

export default DatePickerr;