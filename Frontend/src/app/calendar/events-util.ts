import { EventInput } from "@fullcalendar/angular";

const d = new Date();
const day = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: "event1",
    title: "All Day Event",
    start: new Date(year, month, 1, 0, 0),
    end: new Date(year, month, 1, 23, 59),
    className: "fc-event-success",
    groupId: "work",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
  },
  {
    id: "event2",
    title: "Break",
    start: new Date(year, month, day + 28, 16, 0),
    end: new Date(year, month, day + 29, 20, 0),
    allDay: false,
    className: "fc-event-primary",
    groupId: "important",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. ",
  },
  {
    id: "event3",
    title: "Shopping",
    start: new Date(year, month, day + 4, 12, 0),
    end: new Date(year, month, day + 4, 20, 0),
    allDay: false,
    className: "fc-event-warning",
    groupId: "personal",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. ",
  },
  {
    id: "event4",
    title: "Meeting",
    start: new Date(year, month, day + 14, 10, 30),
    end: new Date(year, month, day + 16, 20, 0),
    allDay: false,
    className: "fc-event-success",
    groupId: "work",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
  },
  {
    id: "event5",
    title: "Lunch",
    start: new Date(year, month, day, 11, 0),
    end: new Date(year, month, day, 14, 0),
    allDay: false,
    className: "fc-event-primary",
    groupId: "important",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
  },
  {
    id: "event6",
    title: "Meeting",
    start: new Date(year, month, day + 2, 12, 30),
    end: new Date(year, month, day + 2, 14, 30),
    allDay: false,
    className: "fc-event-success",
    groupId: "work",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
  },
  {
    id: "event7",
    title: "Birthday Party",
    start: new Date(year, month, day + 17, 19, 0),
    end: new Date(year, month, day + 17, 19, 30),
    allDay: false,
    className: "fc-event-warning",
    groupId: "personal",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
  },
  {
    id: "event8",
    title: "Go to Delhi",
    start: new Date(year, month, day + -5, 10, 0),
    end: new Date(year, month, day + -4, 10, 30),
    allDay: false,
    className: "fc-event-danger",
    groupId: "travel",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
  },
  {
    id: "event9",
    title: "Get To Gather",
    start: new Date(year, month, day + 6, 10, 0),
    end: new Date(year, month, day + 7, 10, 30),
    allDay: false,
    className: "fc-event-info",
    groupId: "friends",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
  },
  {
    id: "event10",
    title: "Collage Party",
    start: new Date(year, month, day + 20, 10, 0),
    end: new Date(year, month, day + 20, 10, 30),
    allDay: false,
    className: "fc-event-info",
    groupId: "friends",
    details:
      "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
  },
];
