import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { HiOutlineLink } from "react-icons/hi";

const FloatingLinkBtn = ({ handleIsSectionBar }) => {
//   const [isVisible, setIsVisible] = useState(true);
  //   const debounceTimeout = useRef(null);

  //   const handleScroll = () => {
  // setIsVisible(false);
  // if (debounceTimeout.current) {
  //   clearTimeout(debounceTimeout.current);
  // }
  // debounceTimeout.current = setTimeout(() => {
  //   setIsVisible(true);
  // }, 500);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  return (
    <Box
      sx={{ "& > :not(style)": { m: 1 } }}
      className="floating-link-btn"
      id="floating_link_btn"
    //   style={{ display: !isVisible ? "none" : "" }}
    >
      <Fab
        aria-label="add"
        className="link-icon-wrapper"
        onClick={() => {
          handleIsSectionBar && handleIsSectionBar();
        }}
      >
        <HiOutlineLink className="link-icon" />
      </Fab>
    </Box>
  );
};

export default FloatingLinkBtn;
