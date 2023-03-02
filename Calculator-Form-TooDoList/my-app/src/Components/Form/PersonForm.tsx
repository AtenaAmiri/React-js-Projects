import React from "react";
import { PersonFormType } from "./Types";
import { useState } from "react";
import "../../Styles/Form.css";
export default function PersonForm(props: PersonFormType) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const disable = !firstName || !lastName || !fatherName || !phoneNumber;
  const handleSubmit = () => {
    if (disable) return;
    props.onSubmit({
      id: new Date().getTime(),
      fatherName,
      lastName,
      firstName,
      phoneNumber,
    });
    setFatherName("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
  };
  return (
    <div className="main-formbox">
      <div className="formbox">
        <h2>Register Form</h2>
        <input
          type="text"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="fatherName"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
        <input
          type="text"
          placeholder="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button disabled={disable} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}
