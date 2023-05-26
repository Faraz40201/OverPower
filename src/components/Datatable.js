import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Stack } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CustomPagination from "./../components/CustomPagination";

const columns = [
  {
    field: "firstName",
    headerName: "Name",
    headerAlign: "left",
    width: 200,
  },
  { field: "email", headerName: "Email", headerAlign: "left", width: "300" },

  {
    field: "role",
    headerName: "Role",
    type: "number",
    headerAlign: "left",
    width: "200",
    valueGetter: (params) => (params.row.role === 1 ? "User" : "tenant"),
  },

  {
    field: "status",
    headerName: "Status",
    type: "number",
    headerAlign: "left",
    width: "250",
    valueGetter: (params) => (params.row.role === 1 ? "Enabled" : "Disabled"),
  },
];

const rows = [
  { id: 1, email: "Snow@gmail.com", firstName: "Jon", status: 1, role: 1 },
  {
    id: 2,
    email: "Lannister@gmail.com",
    firstName: "Cersei",
    status: 1,
    role: 2,
  },
  {
    id: 3,
    email: "Lannister@gmail.com",
    firstName: "Jaime",
    status: 1,
    role: 1,
  },
  { id: 4, email: "Stark@gmail.com", firstName: "Arya", status: 1, role: 1 },
  {
    id: 5,
    email: "Targaryen@gmail.com",
    firstName: "Daenerys",
    status: 1,
    role: 2,
  },
  {
    id: 6,
    email: "Melisandre@gmail.com",
    firstName: "Melisandre",
    status: 2,
    role: 1,
  },
  {
    id: 7,
    email: "Clifford@gmail.com",
    firstName: "Ferrara",
    status: 1,
    role: 1,
  },
  {
    id: 8,
    email: "Frances@gmail.com",
    firstName: "Rossini",
    status: 1,
    role: 2,
  },
  { id: 9, email: "Roxie@gmail.com", firstName: "Harvey", status: 1, role: 1 },
];

export default function DataTable() {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Box sx={{ p: "2rem 1.2rem 0rem 1.5rem", border: "none" }}>
        <Stack spacing={2.5}>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "#F12E39",
              borderRadius: "0.2rem",
              height: "2rem",
              width: "99.2%",
              pl: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            Users
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{
                border: "none",
                backgroundColor: "#F12E39",
                width: "8rem",
                "&:hover": {
                  backgroundColor: "#F12E39",
                },
              }}
            >
              Add User
            </Button>
          </Box>
        </Stack>
      </Box>
      <DataGrid
        sx={{
          color: "#9B9B9B",
          p: "2rem",

          "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
            {
              display: "none",
            },

          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus-within":
            {
              outline: "none",
              boxShadow: "none",
            },

          "& .MuiDataGrid-withBorderColor": { borderColor: "white" },

          "& .MuiTablePagination-toolbar": {
            color: "white",
          },

          "& .MuiCheckbox-root": {
            color: "#9B9B9B",
          },

          "& .MuiDataGrid-menuIcon Button": {
            display: "none",
          },
          "& .MuiDataGrid-iconButtonContainer": {
            display: "none",
          },

          "& .MuiDataGrid-cell": {
            display: "flex",
            justifyContent: "left",
          },

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#0F0F13",
            borderRadius: "1rem",
            p: "1rem 0rem",
            border: "none",
            display: "flex",
            color: "white",
          },
        }}
        rows={rows}
        checkboxSelection
        disableMultipleSelection
        columns={columns.map((column) => {
          if (column.field === "status") {
            return {
              ...column,
              renderCell: (params) => (
                <div style={{ color: params.row.role === 1 ? "green" : "red" }}>
                  {params.value}
                </div>
              ),
            };
          }
          return column;
        })}
        components={{
          Pagination: CustomPagination,
        }}
      />
    </div>
  );
}
