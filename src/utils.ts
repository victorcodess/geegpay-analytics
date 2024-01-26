export function getCurrentDateFormattedLong(): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentDate: Date = new Date();
  return currentDate.toLocaleDateString("en-US", options);
}



export function getCurrentDateFormattedShort(): string {
    const currentDate: Date = new Date();
    const day: number = currentDate.getDate();
    const month: number = currentDate.getMonth() + 1; // Months are zero-based
    const year: number = currentDate.getFullYear();
  
    const formattedDate: string = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
  
    return formattedDate;
  }
  