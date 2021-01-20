import React from "react";
import Calendar from "react-calendar";
import ApiCalendar from "react-google-calendar-api";

function siteCalendar() {

  const handleItemClick = (event, name) => {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      ApiCalendar.handleSignoutClick();
    }
  };

  
  
  if (ApiCalendar.sign) {
    ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
      console.log(result.items);
    });
  }
    

  return (
    <>
      <Calendar />
      <button onClick={(e) => handleItemClick(e, "sign-in")}>sign-in</button>
      <button onClick={(e) => handleItemClick(e, "sign-out")}>sign-out</button>
    </>
  );
}

export default siteCalendar;
