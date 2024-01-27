import marcus from "../assets/marcus.jpeg";
import jaydon from "../assets/jaydon.jpeg";
import corey from "../assets/corey.jpeg";
import cooper from "../assets/cooper.jpeg";
import phillip from "../assets/phillip.jpeg";

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

  const formattedDate: string = `${day.toString().padStart(2, "0")}/${month
    .toString()
    .padStart(2, "0")}/${year}`;

  return formattedDate;
}

export interface IORDER {
  id: number;
  image: string;
  name: string;
  email: string;
  date: string;
  amount: string;
  status: string;
}

export const ORDERS: IORDER[] = [
  {
    id: 1,
    image: marcus,
    name: "Marcus Bergson",
    email: "marcus@gmail.com",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    id: 2,
    image: jaydon,
    name: "Jaydon Vaccaro",
    email: "jaydon@gmail.com",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    id: 3,
    image: corey,
    name: "Corey Schleifer",
    email: "corey@gmail.com",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    id: 4,
    image: cooper,
    name: "Cooper Press",
    email: "cooper@gmail.com",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
  },
  {
    id: 5,
    image: phillip,
    name: "Phillip Lubin",
    email: "phillip@gmail.com",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
  },
];
