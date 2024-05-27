import moment from "moment";
export default function (date) {
  return moment(date, "DD-MM-YYYY").toDate() < moment().toDate();
}
