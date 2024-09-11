import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
const CalendarEvent = () => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  return (
    <>

      <div className="border border-red-200">
        <p>Start Date</p>
        <DateTimePicker className="border border-yellow-200" onChange={setStart} value={start} />
        <p>End Date</p>
        <DateTimePicker onChange={setEnd} value={end} />
      </div>
    </>
  );
};

export default CalendarEvent;
