import React from "react";

const DynamicTable = () => {
  const arr = [
    { name: "a", age: "21", fsub: "maths" },
    { name: "b", age: "21", fsub: "botany" },
    { name: "c", age: "20", fsub: "information technology" },
    { name: "d", age: "21", fsub: "maths" },
  ];
  const ListData = arr.map((arr) => {
    console.log("arr", arr);
    return (
      <tr>
        <td>{arr.name}</td>
        <td>{arr.age}</td>
        <td>{arr.fsub}</td>
      </tr>
    );
  });
  console.log(ListData);

  return (
    <>
      <table variant="dark" striped>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>F-sub</td>
          </tr>
          {ListData}
        </tbody>
      </table>
    </>
  );
};

export default DynamicTable;
