import moment from "moment";
export default function (date) {
  const da = moment(date, "DD-MM-YYYY").toDate();
  return da.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}