import moment from "moment";

export default function minutesDiff(arr) {
  return arr
    .map((ele) => {
      return Math.abs(
        moment(new Date(ele.start_time)).diff(new Date(ele.end_time), "minutes")
      );
    })
    .reduce((a, b) => a + b, 0);
}
