import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TableCategoryProduct = () => {
  return (
    <div>
      <div className="p-5 mx-5 my-3">
        <h2 style={{ color: "white" }} className="mb-3">
          List Category
        </h2>
        <Table bordered hover style={{ color: "white" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Category Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mouse</td>
              <td>
                <Button style={{ width: "150px" }} variant="success">
                  Edit
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Keyboard</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Clothes</td>
              <td>Clothes</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableCategoryProduct;
