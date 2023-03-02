import { ECDH } from "crypto";
import React from "react";
export type PersonType = {
  firstName: string;
  lastName: string;
  fatherName: string;
  phoneNumber: string;
  id: number;
};
export type PersonFormType = {
  onSubmit: (person: PersonType) => void;
};
export default function Types() {
  return <div>Types</div>;
}
export type PersonTableProps = {
  data: PersonType[];
  onDelete: (id: number) => void;
};
