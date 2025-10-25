import { useState } from "react";

import CreateCabinForm from "./components/CreateCabinForm";
import CabinTable from "./components/CabinTable";
import Heading from "/src/ui/Heading";
import Button from "/src/ui/Button";
import Row from "/src/ui/Row";

function Cabins() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm(show => !show)}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
