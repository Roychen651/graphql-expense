export function formatDate(timestamp) {
  const date = new Date(parseInt(timestamp));
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return date.toLocaleDateString("en-GB", options); // en-GB uses day/month/year
}
