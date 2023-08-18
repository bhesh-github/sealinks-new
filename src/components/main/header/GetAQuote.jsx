import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// -----------------------------------------------------------------------------------
import TextField from "@mui/material/TextField";
import DoneIcon from "@mui/icons-material/Done";
import TextArea from "./getAQuote/TextArea";

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   ------------------------------------
  const servicesList = [
    "Select Services *",
    "Web Hosting",
    "Software Development",
    "IT Training",
    "Search Engine Optimization (SEO)",
    "Graphics Design",
    "Social Media Optimization (SMO)",
    "Social Media Marketing (SMM)",
    "Search Engine Marketing (SEM)",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="get-a-quote-comp">
      <div className="button-wrapper" onClick={handleClickOpen}>
        <Button className="get-a-quote">Get A Quote</Button>
        <DoneIcon className="tick-icon" />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="dialog"
      >
        <div className="outer-deco">
          <DialogTitle id="responsive-dialog-title">
            {"Post Your Requirements"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div className="form-wrapper">
                <form
                  onSubmit={handleSubmit}
                  id="quote-form"
                  className="form"
                  style={{
                    height: "max-content",
                    minWidth: "500px",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1em",
                  }}
                >
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Name"
                    className="text-field"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Email"
                    className="text-field"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Contact No."
                    className="text-field"
                  />
                  <div className="custom-select" style={{ width: "100%" }}>
                    <select
                      className="select-btn"
                      style={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: "transparent",
                        border: "1px solid silver",
                        borderRadius: "4px",
                        padding: "0 10px",
                      }}
                    >
                      {servicesList.map((item, idx) => (
                        <option value={idx} key={idx}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <TextArea />
                </form>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions className="action-wrapper">
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
            <Button
              id="submit"
              type="submit"
              form="quote-form"
              onClick={handleClose}
              autoFocus
            >
              Submit
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
