import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DataTables from "../../components/DataTables/DataTables";

const UsersCatalog = () => {
  const [category, setCategory] = useState("/users");
  const [modal, setModal] = useState({
    blog: false,
    login: false,
    updateConfirm: false,
    edit: false,
    confirm: false,
  });

  return (
    <div className="home-cnt">
      <Sidebar category={category} setCategory={setCategory} />

      <div>
        <Navbar modal={modal} setModal={setModal} />
        <DataTables category={category} modal={modal} setModal={setModal} />
      </div>
    </div>
  );
};

export default UsersCatalog;