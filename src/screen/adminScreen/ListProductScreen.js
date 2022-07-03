import React from "react";
import TableList from "../../components/adminListProduct/TableListProduct";
import Header from "../../components/Header";

const ListProductScreen = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default ListProductScreen;
