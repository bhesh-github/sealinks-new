import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MuiAccordion from "./MuiAccordion";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

export default function TemporaryDrawer({
  drawerState,
  setDrawerState,
  nmcLogo,
  navItems,
}) {
  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="mui-drawer"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="name-logo-wrapper">
        <img
          src={nmcLogo && nmcLogo}
          alt=""
          className="company-logo"
          onClick={() => {
            navigate("/");
            setDrawerState((prev) => ({
              ...prev,
              left: false,
            }));
          }}
        />
        <span
          className="company-name"
          onClick={() => {
            navigate("/");
            setDrawerState((prev) => ({
              ...prev,
              left: false,
            }));
          }}
        >
          NEPAL MEDIAL COLLEGE
        </span>
        <RxCross1
          className="close-icon"
          onClick={() => {
            setDrawerState((prev) => ({
              ...prev,
              left: false,
            }));
          }}
        />
      </div>
      <Divider />
      <div className="nav-list-wrapper">
        <MuiAccordion
          allBtnsList={navItems}
          setDrawerState={setDrawerState && setDrawerState}
        />
      </div>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor, idx) => (
        <React.Fragment key={anchor}>
          <Drawer
            key={idx}
            anchor={anchor}
            open={drawerState[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
