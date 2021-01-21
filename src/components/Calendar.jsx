import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function SiteCalendar() {
	const [myEventsList, setMyEventsList] = useState([
		{
			start: moment().toDate(),
			end: moment().add(1, "days").toDate(),
			title: "A title",
		},
	]);
	const [isOpen, setIsOpen] = useState(false);

	const meeting = {
		start: moment().toDate(),
		end: moment().add(3, "days").toDate(),
		title: "Another title",
	};

	const addEvent = () => {
		setMyEventsList([...myEventsList, meeting]);
	};

	return (
		<div className="container calendar">
			<button className="btn btn-info" onClick={() => addEvent()}>
				Add Event
			</button>
			<Calendar
				localizer={localizer}
				events={myEventsList}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500 }}
			/>
		</div>
	);
}

export default SiteCalendar;
