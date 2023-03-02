import React from "react";
import { useState } from "react";
import "../../Styles/Form.css";
import { PersonFormType, PersonTableProps } from "./Types";
export default function PersonTable(props: PersonTableProps) {
  return (
    <div className="main-tablebox">
      <div className="tablebox">
        <table>
          <thead className="table-head">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Fathername</th>
              <th>Phonenumber</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {props.data.map((item) => (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.fatherName}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <button
                    className="calc-delete"
                    onClick={() => props.onDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
