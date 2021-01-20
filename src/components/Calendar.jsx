import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment);


function SiteCalendar() {

  const [myEventsList, setMyEventsList] = useState([{
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "A title"
  }])


  return (
    <>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </>
  );
}

export default SiteCalendar;
