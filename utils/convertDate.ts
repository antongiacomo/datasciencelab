import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
// import customParseFormat from 'dayjs/plugin/customParseFormat' // ES 2015

dayjs.extend(customParseFormat);

export default function (date) {
  return dayjs(date, "DD-MM-YYYY").format("DD MMMM YYYY");
}