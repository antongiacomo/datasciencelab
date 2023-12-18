import moment from "moment";
export default function (date) {
  return moment(date, "MM-DD-YYYY").toDate() < moment().toDate();
}
