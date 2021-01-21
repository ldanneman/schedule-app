import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css"
import Calendar from "@ericz1803/react-google-calendar";

// const localizer = momentLocalizer(moment);

function SiteCalendar() {
  //   const [myEventsList, setMyEventsList] = useState([{
  //     start: moment().toDate(),
  //     end: moment()
  //       .add(1, "days")
  //       .toDate(),
  //     title: "A title"
  //   }])
  //   const [isOpen, setIsOpen] = useState(false)

  // const meeting = {
  //   start: moment().toDate(),
  //   end: moment()
  //     .add(3, "days")
  //     .toDate(),
  //   title: "Another title"
  // }
  //   const addEvent = () => {
  //     setMyEventsList([...myEventsList, meeting])
  //   }
  const API_KEY = "AIzaSyAY2nlj6KG-v9zHg_22jrGUvux5yLq6x-A";
  let calendars = [
    {calendarId: "rg4m0k607609r2jmdr97sjvjus@group.calendar.google.com"},
  ];

  return (


    // <iframe
    // title={"cal"}
    //   src={`https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=amFrZW51ZGVsc0BnbWFpbC5jb20&amp;src=cTJtbWQwNGprZGM3bjZ2amU0dm9wZjNwdW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=bmVkZnZwa2ozdm5uanM2aWFxdTJsbnIxbjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YnQ2ZGIyYm9kNWlmYzNqOTZhM2xpMTlkYnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uc2EjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=aXRjLnRlY2hfY2xhc3Nyb29tZDc2ZWMxMmVAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4tZ2IuanVkYWlzbSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aGg5aGZuNXVicXRpb2ZuNmh1c2lzZnJpbWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;color=%233F51B5&amp;color=%23EF6C00&amp;color=%238E24AA&amp;color=%23009688&amp;color=%23009688&amp;color=%230B8043&amp;color=%237986CB`}
    //   style={{border:"solid 1px #777"}}
    //   width={"800"}
    //   height={"600"}
    //   frameborder={"0"}
    //   scrolling={"no"}
    // ></iframe>

      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>

    // <>
    // <button onClick={() => addEvent()}>add event</button>
    //   <Calendar
    //     localizer={localizer}
    //     events={myEventsList}
    //     startAccessor="start"
    //     endAccessor="end"
    //     style={{ height: 500 }}
    //   />
    // </>
  );
}

export default SiteCalendar;
