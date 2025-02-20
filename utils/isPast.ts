import moment from "moment"; 
export default function (article) {

  return moment(`${article.time} ${article.date}`, "HH:mm DD-MM-YYYY").isBefore(moment().subtract(1,'h')) ;
}
