import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
import data from "./data.json";
import "./Table.css";
import { Link } from "react-router-dom";

function Content() {
  const [searchName, setSearchName] = useState("");
  const [contacts, setContacts] = useState(data);

  //88888888888888888888888888888  PAGINATION  88888888888888888888888888888888

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  useEffect(() => {}, [startIndex]);

  const next = () => {
    if (endIndex !== 500) {
      setStartIndex(startIndex + 10);
      setEndIndex(endIndex + 10);
    }
  };
  const prev = () => {
    if (startIndex !== 0) {
      setStartIndex(startIndex - 10);
      setEndIndex(endIndex - 10);
    }
  };

  //888888888888888888888888888888888888888888888888888888888888888888888888888
  //888888888888888888888888888888  SORTING  8888888888888888888888888888888888

  const [order, setOrder] = useState("asc");
  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setContacts(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setContacts(sorted);
      setOrder("asc");
    }
  };

  const sortingage = (col) => {
    if (order === "asc") {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setContacts(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setContacts(sorted);
      setOrder("asc");
    }
  };

  //888888888888888888888888888888888888888888888888888888888888888888888888888

  return (
    <div className="home">
      <h1 className="heading">
        <img
          alt=""
          src="http://truevalueaccess.com/wp-content/uploads/2020/09/TVA-Logo_Grey-1-e1633753822711.png"
          className="logo"
        />
        <br />
        USERS
      </h1>
      <form className="searchbox">
        <input
          type="text"
          placeholder="Search by first or last name"
          onChange={(event) => {
            setSearchName(event.target.value);
          }}
        />
      </form>

      <div className="table">
        <Table className="actual__table">
          <TableHead>
            <TableRow>
              <TableCell className="first_name" onClick={() => sorting("first_name")}>
                First Name
              </TableCell>
              <TableCell className="last_name" onClick={() => sorting("last_name")}>
                Last Name
              </TableCell>
              <TableCell className="age" onClick={() => sortingage("age")}>
                Age
              </TableCell>
              {/* <TableCell
                className="company"
                onClick={() => sorting("company_name")}
              >
                Company Name
              </TableCell>
              <TableCell className="address" onClick={() => sorting("city")}>
                Address
              </TableCell> */}
              <TableCell className="email" onClick={() => sorting("email")}>
                e-mail
              </TableCell>
              <TableCell>Web</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 888888888888888888888888888888  FILTER  8888888888888888888888888888888888       */}
            {contacts
              .filter((contact) => {
                if (searchName === "") {
                  return contact;
                } else if (
                  contact.first_name
                    .toLowerCase()
                    .includes(searchName.toLowerCase()) ||
                  contact.last_name
                    .toLowerCase()
                    .includes(searchName.toLowerCase())
                ) {
                  return contact;
                }
                // 888888888888888888888888888888888888888888888888888888888888888888888888888
              })
              .slice(startIndex, endIndex)
              .map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>
                    <Link className="user__name" to={"/" + contact.id}>
                      {contact.first_name}
                    </Link>
                  </TableCell>
                  <TableCell>{contact.last_name}</TableCell>
                  <TableCell>{contact.age}</TableCell>
                  {/* <TableCell>
                    {contact.city}, {contact.state} ({contact.zip})
                  </TableCell> */}
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>
                    <a href={contact.web}>{contact.web}</a>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div className="movement__buttons">
          <button onClick={prev} className="prev">
            Prev
          </button>
          <button onClick={next} className="next">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
