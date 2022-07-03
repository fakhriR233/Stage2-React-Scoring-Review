import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TableListProduct = () => {
  return (
    <div>
      <div className="p-4 mx-5 my-3">
        <h2 style={{ color: "white" }} className="mb-3">
          List Category
        </h2>
        <Table variant="dark" bordered hover style={{ color: "white" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Product Desc</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Photo</td>
              <td>Mouse</td>
              <td>Lorem Ipsu Dolor sit amet</td>
              <td>500.000</td>
              <td>600</td>
              <td className="d-flex">
                <div>
                  <Button style={{ width: "80px" }} variant="success">
                    Edit
                  </Button>
                </div>
                <div className="ms-2">
                  <Button style={{ width: "80px" }} variant="danger">
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Photo</td>
              <td>Mouse</td>
              <td>Lorem Ipsu Dolor sit amet</td>
              <td>500.000</td>
              <td>600</td>
              <td>
                <Button style={{ width: "80px" }} variant="success">
                  Edit
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Photo</td>
              <td>Mouse</td>
              <td>Lorem Ipsu Dolor sit amet</td>
              <td>500.000</td>
              <td>600</td>
              <td>
                <Button style={{ width: "80px" }} variant="success">
                  Edit
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableListProduct;
