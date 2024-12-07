import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SalesTable = () => {
  const rows = [
    {
      name: "Thailand rice",
      location: "118 Ogbotobo Road, Southern Ijaw, Bayelsa",
      date: "12.09.2024 - 12.53 PM",
      productId: "#10030",
      amount: "NGN 300,000",
      status: "Delivered",
    },
    {
      name: "A carton of Milo",
      location: "6 Main Market Road, Dikwa, Borno",
      date: "12.09.2024 - 12.53 PM",
      productId: "#11152",
      amount: "NGN 500,000",
      status: "Delivered",
    },
    {
      name: "Kings vegetable oil",
      location: "191 Sumaila-Rano Road, Sumaila, Kano",
      date: "12.09.2024 - 12.53 PM",
      productId: "#31200",
      amount: "NGN 1,000,000",
      status: "Rejected",
    },
    {
      name: "A carton of Milo",
      location: "6 Main Market Road, Dikwa, Borno",
      date: "12.09.2024 - 12.53 PM",
      productId: "#11152",
      amount: "NGN 500,000",
      status: "Delivered",
    },
    {
      name: "50 Kg Dangote Cement",
      location: "94 Azagba Road, Ogwashi-Uku, Delta",
      date: "12.09.2024 - 12.53 PM",
      productId: "#21452",
      amount: "NGN 800,000",
      status: "Pending",
    },
    {
      name: "Gino paste",
      location: "151 Okposi-Uburu Road, Okposi, Ebonyi",
      date: "12.09.2024 - 12.53 PM",
      productId: "#10030",
      amount: "NGN 300,000",
      status: "Delivered",
    },
    {
      name: "50 Kg Dangote Cement",
      location: "94 Azagba Road, Ogwashi-Uku, Delta",
      date: "12.09.2024 - 12.53 PM",
      productId: "#21452",
      amount: "NGN 800,000",
      status: "Pending",
    },
    {
      name: "A carton of Milo",
      location: "6 Main Market Road, Dikwa, Borno",
      date: "12.09.2024 - 12.53 PM",
      productId: "#11152",
      amount: "NGN 500,000",
      status: "Delivered",
    },
    {
      name: "A carton of Milo",
      location: "6 Main Market Road, Dikwa, Borno",
      date: "12.09.2024 - 12.53 PM",
      productId: "#11152",
      amount: "NGN 500,000",
      status: "Delivered",
    },
    {
      name: "Kings vegetable oil",
      location: "191 Sumaila-Rano Road, Sumaila, Kano",
      date: "12.09.2024 - 12.53 PM",
      productId: "#31200",
      amount: "NGN 1,000,000",
      status: "Rejected",
    },
    {
      name: "Kings vegetable oil",
      location: "191 Sumaila-Rano Road, Sumaila, Kano",
      date: "12.09.2024 - 12.53 PM",
      productId: "#31200",
      amount: "NGN 1,000,000",
      status: "Rejected",
    },
    {
      name: "50 Kg Dangote Cement",
      location: "94 Azagba Road, Ogwashi-Uku, Delta",
      date: "12.09.2024 - 12.53 PM",
      productId: "#21452",
      amount: "NGN 800,000",
      status: "Pending",
    },
    {
      name: "50 Kg Dangote Cement",
      location: "94 Azagba Road, Ogwashi-Uku, Delta",
      date: "12.09.2024 - 12.53 PM",
      productId: "#21452",
      amount: "NGN 800,000",
      status: "Pending",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Date - Time</TableHead>
            <TableHead>Product ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.productId}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalesTable;
