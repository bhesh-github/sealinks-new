import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

export default function PositionedSnackbar({
  alertMessage,
  snackBarState,
  setSnackBarState,
}) {
  const { vertical, horizontal, open } = snackBarState;

  const handleClose = () => {
    setSnackBarState((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={alertMessage && alertMessage.successMessage}
        key={vertical + horizontal}
        style={{ width: "max-content" }}
      />
    </Box>
  );
}
