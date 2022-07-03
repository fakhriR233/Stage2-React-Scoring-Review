import React from "react";
import TableList from "../../components/adminCategoryProduct/TableCategoryProduct";
import Header from "../../components/Header";

const ListCategoryScreen = () => {
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

export default ListCategoryScreen;
