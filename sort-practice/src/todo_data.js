import { useState } from "react";

const detailsdum = [
  { id: 1, name: 'John Doe', age: 25, dob: '1996-01-01' },
  { id: 2, name: 'Jane Smith', age: 30, dob: '1991-05-15' },
  { id: 3, name: 'Michael Johnson', age: 35, dob: '1986-09-30' },
  { id: 4, name: 'Emily Davis', age: 28, dob: '1993-03-10' },
  { id: 5, name: 'David Wilson', age: 32, dob: '1989-07-20' },
  { id: 6, name: 'Sarah Brown', age: 27, dob: '1994-11-25' },
  { id: 7, name: 'Daniel Taylor', age: 31, dob: '1990-04-05' },
  { id: 8, name: 'Olivia Anderson', age: 29, dob: '1992-08-12' },
  { id: 9, name: 'Matthew Martinez', age: 33, dob: '1988-12-08' },
  { id: 10, name: 'Sophia Thomas', age: 26, dob: '1995-02-18' }
];


export const useDetails = () => {
  const [details , setDetails] = useState(detailsdum);
  return details;
}

