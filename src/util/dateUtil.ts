
/*
Breaks addDaysToDateString function into two functions with single responsibility
*/

/*
Adds three days to a date (used in determining arbitrary ship date)
*/
export function addThreeDaysToDate(date: Date): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 3);
  return newDate;
}

/*
Can be used to check if a string is a valid ISO date string
(We instead assume Date will not parse a string correctly if it is invalid when a Date is instantiated)
*/
export function isValidIsoDateString(dateString: string): boolean {
  return !isNaN(Date.parse(dateString));
}


