```jsx
const data = [
  {
    id: 0,
    title: "All Day Event very long title",
    tz: "America/Los_Angeles",
    allDay: true,
    start: "Feb 1 2020  1:33 PM",
    end: "Feb 1 2020 1:54 PM",
  },
  {
    id: 1,
    title: "Long Event",
    tz: "Asia/Kolkata",
    start: "April 5 2020  11:11 AM",
    end: "April 6 2020 2:00 PM",
  },

  {
    id: 2,
    title: "DTS STARTS",
    tz: "America/Los_Angeles",
    start: "Mar 16 2020  5:33 PM",
    end: "Mar 16 2020 8:02 PM",
  },
];
<CalendarDetail event={data} firstdate={new Date()} />;
```
