import "./App.css";
import React from "react";
import { TableColumnProps } from "./components/Table.component";
import { TableComponent as Table } from "./components/Table.component";
import { get } from "lodash/fp";

const explore: { fields: string[] } = {
  fields: [
    "_id",
    "name",
    "address.street",
    "address.town",
    "address.postode",
    "dob",
    "score",
    "pets",
    "verified",
    "url",
    "salary",
    "description",
  ],
};

const columns: TableColumnProps[] = explore.fields.map((field) => ({
  name: field,
  cell: get(field),
  selector: get(field),
}));

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/data", { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.length);
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="content">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
