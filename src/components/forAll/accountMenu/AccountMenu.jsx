import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// react icons
import { MdPhoneEnabled } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <div className="contact-drop">
              <MdPhoneEnabled className="call-icon" />
              <MdOutlineKeyboardArrowDown className="arrow-icon" />
            </div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        className="account-menu-wrapper"
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div>
          <MenuItem className="profile-text">
            <ListItemIcon>
              <BsInfoCircleFill fontSize="small" className="icon" />
            </ListItemIcon>
            Contact Info's
          </MenuItem>
          <Divider />
        </div>

        <div className="content-wrapper">
          <div className="content-item">
            <MdPhoneEnabled fontSize="small" className="icon" />
            <div className="text">+977 015900337</div>
          </div>
          <div className="content-item">
            <MdLocationOn fontSize="small" className="icon" />
            <div className="text">Naxal-01, Nag Pokhari, Kathmandu, Nepal</div>
          </div>
          <div className="content-item">
            <IoIosMail fontSize="small" className="icon" />
            <div className="text">info@sealinksholidays.com</div>
          </div>
        </div>
      </Menu>
    </>
  );
}
