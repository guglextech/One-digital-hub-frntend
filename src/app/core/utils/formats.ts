/**
 * Formats a Date object or string into a custom format.
 *
 * @param date Date object or string, or null/undefined for 'N/A'
 * @returns A string in the format 'DDth MMMM YYYY, HH:MM AM/PM'
 */
export function formatDateToCustomFormat(date: Date | string | null | undefined): string {
  // Check for null, undefined, or empty string
  if (!date) return 'N/A';

  // Convert string to Date if necessary
  const validDate = date instanceof Date ? date : new Date(date);

  // Ensure the date is valid
  if (isNaN(validDate.getTime())) return 'N/A';

  const day = validDate.getDate();
  const month = validDate.toLocaleString('default', { month: 'long' });
  const year = validDate.getFullYear();

  const suffix = day % 10 === 1 && day !== 11 ? 'st' :
    day % 10 === 2 && day !== 12 ? 'nd' :
      day % 10 === 3 && day !== 13 ? 'rd' : 'th';

  const hours = validDate.getHours();
  const minutes = validDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${day}${suffix} ${month} ${year}, ${formattedHours}:${formattedMinutes} ${ampm}`;
}






/**
 * Formats a datetime-local string value into a custom format string.
 *
 * @param datetimeLocalValue A datetime-local string value, e.g. '2022-01-01T08:00'
 * @returns A string in the format 'YYYY-MM-DD HH:MM AM/PM'
 */
export function formatDateTimeWithAMPM(datetimeLocalValue: string): string {
  const date = new Date(datetimeLocalValue);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${year}-${month}-${day} ${formattedHours}:${minutes} ${ampm}`;
}




/**
 * Formats a string of correct numbers into a human-readable format.
 *
 * @param correctNumbers A string of correct numbers, or null/undefined for 'Not Declared'
 * @returns A string in the format 'X-X-X', where X is a digit. If the input is null/undefined or empty, returns 'Not Declared'.
 */
export function formatCorrectNumbers(correctNumbers: string | null | undefined): string {
  if (!correctNumbers || correctNumbers.trim() === '') {
    return 'Not Declared';
  }
  return correctNumbers.split('').join('-');
}




/**
 * Converts a given string to title case.
 *
 * @param text The input string to be converted to title case.
 * @returns The converted string in title case, where the first letter of each word is capitalized.
 *          Returns an empty string if the input is falsy.
 */

export function toTitleCase(text: string): string {
  if (!text) return "";
  return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}


/**
 * Formats an array of draw references into a format suitable for displaying as chips.
 *
 * If the input array is null, undefined, or empty, returns an empty array.
 *
 * @param draws An array of draw references, or null/undefined/empty for an empty array.
 * @returns An array of strings, where each element is a draw reference.
 */
export function formatDrawsAsChips(draws: string[]): string[] {
  return draws || [];
}




/**
 * Generates and triggers a download of a CSV file from the provided data.
 *
 * @param data An array of objects representing the data to be exported.
 * @param headers An array of strings representing the CSV headers.
 * @param filename The desired filename for the downloaded CSV file.
 */

export function downloadCSV(data: any[], headers: string[], filename: string): void {
  const csvHeaders = headers.join(",");
  const rows = data.map(row => 
    headers.map(header => `"${row[header] || ""}"`).join(",")
  ).join("\n");

  const csvContent = `data:text/csv;charset=utf-8,${csvHeaders}\n${rows}`;
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
