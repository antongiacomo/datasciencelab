import moment from "moment"; 
export default function (date) {
  return moment(date, "DD-MM-YYYY").format("DD MMMM YYYY");
}