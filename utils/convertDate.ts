export default function (date) {
  const da = new Date(date);
  return da.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}