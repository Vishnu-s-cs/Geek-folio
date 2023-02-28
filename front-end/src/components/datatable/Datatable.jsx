import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns,userRows } from "../../datatablesource";
import { useEffect, useState } from "react";
import axios from "../../axios";
const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [err, setErr] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    try {
      axios
        .get("/users/")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          setErr("something went wrong");
          console.log(err);
        });
    } catch (error) {
      setErr("something went wrong");
    }
  }, []);

  return (
    <div className="datatable">
      <div className="datatableTitle">Employees</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 15, 20]}
        components={{ Toolbar: GridToolbar }}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
