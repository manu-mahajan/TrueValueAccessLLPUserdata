import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import "./User.css";

function User(props) {
  const { id } = props.match.params;
  const num = parseInt(id);
  const name = data.slice(num - 1, num).map((contact) => {
    return `${contact.first_name} ${contact.last_name}, ${contact.age}`;
  });
  const email = data.slice(num - 1, num).map((contact) => {
    return `${contact.email}`;
  });
  const company_name = data.slice(num - 1, num).map((contact) => {
    return `${contact.company_name}`;
  });
  const address = data.slice(num - 1, num).map((contact) => {
    return `${contact.city}, ${contact.state}(${contact.zip})`;
  });
  const website = data.slice(num - 1, num).map((contact) => {
    return `${contact.web}`;
  });

  return (
    <div>
      <Link to="/">
        <button className="back__button">BACK</button>
      </Link>
      <div className="details">
        <div className="card">
          <img
            alt=""
            src={`https://avatars.dicebear.com/api/open-peeps/${name}.svg`}
          />
          <h1>{name}</h1>
          <p>
            email : <strong>{email}</strong>
          </p>
          <p>
            Company : <strong>{company_name}</strong>
          </p>
          <p>
            Address : <strong>{address}</strong>
          </p>
          <p>
            Website : <strong>{website}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default User;
