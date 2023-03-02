import React from "react";
import PersonForm from "./PersonForm";
import { PersonType } from "./Types";
import PersonTable from "./PersonTable";

export default function Form() {
  const [persons, setPersons] = React.useState<PersonType[]>([]);
  const addPerson = (person: PersonType) => {
    // setPersons([...persons,person])
    setPersons((prev) => [...prev, person]);
  };
  const deletePerson = (id: number) => {
    const remove = persons.filter((f) => f.id !== id);
    setPersons(remove);
  };
  return (
    <div>
      <PersonForm onSubmit={addPerson} />
      <PersonTable data={persons} onDelete={deletePerson} />
    </div>
  );
}
