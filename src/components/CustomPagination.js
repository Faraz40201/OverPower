import React, { useState } from "react";
import { Button, Pagination, Stack, Box } from "@mui/material";

export default function CustomPagination() {
  const [activePage, setActivePage] = useState(1);

  return (
    <Box>
      <Box mt={2}>
        <Pagination
          count={10}
          size="large"
          boundaryCount={10}
          variant="outlined"
          shape="rounded"
          onChange={(event, newPage) => setActivePage(newPage)}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
              borderRadius: "6px",
              border: "1.5px solid #9B9B9B",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#F12E39",
            },

            "& .MuiInputBase-input": {
              color: "white",
            },

            "& .MuiPaginationItem-page.Mui-selected:hover": {
              backgroundColor: "#F12E39",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#9B9B9B",
              },
          }}
        />
      </Box>
    </Box>
  );
}

// const OpenPage = (props) => {
//   const { children, page, index } = props;
//   return (
//     <div hidden={page !== index}>{page === index && <Box>{children}</Box>}</div>
//   );
// };

// <OpenPage page={activePage} index={1}>
// Page 1
// </OpenPage>
