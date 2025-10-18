// import CabinTable from "../features/cabins/CabinTable";
// import AddCabin from "../features/cabins/AddCabin";
// import CabinTableOperations from "../features/cabins/CabinTableOperations";

import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <img
          src="https://vhqjiqyiqapbmtykxuun.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
          alt=""
        />
        {/* <CabinTableOperations /> */}
      </Row>
      {/* 

      <Row>
        <CabinTable />
        <AddCabin />
      </Row> */}
    </>
  );
}

export default Cabins;
