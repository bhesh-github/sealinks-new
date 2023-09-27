import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import { SlArrowRight } from "react-icons/sl";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({ allBtnsList, setDrawerState }) {
  const [selectedNavLinkDetail, setSelectedNavLinkDetail] = React.useState({
    slugNavLinkId: null,
  });
  const [selectedSubLinkDetail, setSelectedSubLinkDetail] = React.useState({
    slugSubLinkId: null,
  });

  const navigate = useNavigate();
  const navList =
    allBtnsList &&
    allBtnsList.map((item) => {
      const { id = "", title = "", navigateTo = "", subLink = "" } = item;
      const isExpanded = selectedNavLinkDetail?.slugNavLinkId === id;
      return (
        <Accordion
          // expanded={
          //   expanded === `panel${selectedDepartmentDetail?.slugSubLinkId}`
          // }
          // onChange={handleChange(
          //   `panel${selectedDepartmentDetail?.slugSubLinkId}`
          // )}
          key={id}
          expanded={isExpanded} // Set expanded prop based on isExpanded
          // onChange={handleChange(`panel${id}`)} // Use the id for handleChange
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            className={`bar-btn ${
              selectedNavLinkDetail?.slugNavLinkId === id && "active-btn"
            }`}
          >
            <Typography
              className="sidebar-sublink"
              onClick={() => {
                if (subLink) {
                  navigateTo &&
                    navigate(
                      `${navigateTo}/${subLink[0].navigateTo}/${subLink[0].id}/${subLink[0].id}`
                    );
                } else {
                  navigate(navigateTo);
                }
                setDrawerState((prev) => ({
                  ...prev,
                  left: false,
                }));
              }}
            >
              {title}
            </Typography>
            {subLink ? (
              <SlArrowRight
                className={`indent-arrow 
              ${id === selectedNavLinkDetail?.slugNavLinkId && "active-indent"}
              `}
                onClick={() => {
                  setSelectedNavLinkDetail((prev) => ({
                    ...prev,
                    slugNavLinkId: id,
                  }));
                }}
              />
            ) : (
              <SlArrowRight
                className={"indent-arrow off-indent-arrow"}
                onClick={() => {
                  setSelectedNavLinkDetail((prev) => ({
                    ...prev,
                    slugNavLinkId: id,
                  }));
                }}
              />
            )}
          </AccordionSummary>
          {subLink && (
            <AccordionDetails className="subLink-accordion-container">
              {subLink &&
                subLink.map((item) => {
                  const {
                    id = "",
                    text = "",
                    navigateTo = "",
                    childLink = "",
                  } = item;
                  const isSubLinkExpanded =
                    selectedSubLinkDetail?.slugSubLinkId === id;

                  const subLinkNavigateTo = navigateTo;
                  const subLinkId = id;
                  return (
                    <div key={id}>
                      {title === "Departments" && subLink && (
                        <Accordion
                          className="child-accordion"
                          expanded={isSubLinkExpanded} // Set expanded prop based on isExpanded
                        >
                          <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                            className={`child-link-title-wrapper ${
                              selectedSubLinkDetail?.slugSubLinkId === id &&
                              "active-child-link-title-wrapper"
                            }`}
                          >
                            <Typography
                              className="child-title"
                              onClick={() => {
                                navigate(
                                  `/departments/${navigateTo}/${id}/${subLink[0].id}`
                                );
                                setDrawerState((prev) => ({
                                  ...prev,
                                  left: false,
                                }));
                              }}
                            >
                              {text}
                            </Typography>
                            {childLink ? (
                              <SlArrowRight
                                className={`indent-arrow 
              ${id === selectedSubLinkDetail?.slugSubLinkId && "active-indent"}
              `}
                                onClick={() => {
                                  setSelectedSubLinkDetail((prev) => ({
                                    ...prev,
                                    slugSubLinkId: id,
                                  }));
                                }}
                              />
                            ) : (
                              <SlArrowRight
                                className={"indent-arrow off-indent-arrow"}
                                onClick={() => {
                                  setSelectedSubLinkDetail((prev) => ({
                                    ...prev,
                                    slugSubLinkId: id,
                                  }));
                                }}
                              />
                            )}
                          </AccordionSummary>
                          {childLink && (
                            <AccordionDetails className="child-accordion-container">
                              {childLink.map((item) => {
                                const { id = "", text = "" } = item;
                                return (
                                  <div
                                    className="child-list"
                                    key={id}
                                    onClick={() => {
                                      navigate(
                                        `/departments/${subLinkNavigateTo}/${subLinkId}/${id}`
                                      );
                                      setDrawerState((prev) => ({
                                        ...prev,
                                        left: false,
                                      }));
                                    }}
                                  >
                                    {text}
                                  </div>
                                );
                              })}
                            </AccordionDetails>
                          )}
                        </Accordion>
                      )}
                      {title === "Services" && subLink && (
                        <Accordion
                          className="child-accordion"
                          key={id}
                          expanded={isSubLinkExpanded} // Set expanded prop based on isExpanded
                        >
                          <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                            className={`child-link-title-wrapper ${
                              selectedSubLinkDetail?.slugSubLinkId === id &&
                              "active-child-link-title-wrapper"
                            }`}
                          >
                            <Typography
                              className="child-title"
                              onClick={() => {
                                navigate(
                                  `/services/${navigateTo}/${id}/${subLink[0].id}`
                                );
                                setDrawerState((prev) => ({
                                  ...prev,
                                  left: false,
                                }));
                              }}
                            >
                              {text}
                            </Typography>
                            {childLink ? (
                              <SlArrowRight
                                className={`indent-arrow 
              ${id === selectedSubLinkDetail?.slugSubLinkId && "active-indent"}
              `}
                                onClick={() => {
                                  setSelectedSubLinkDetail((prev) => ({
                                    ...prev,
                                    slugSubLinkId: id,
                                  }));
                                }}
                              />
                            ) : (
                              <SlArrowRight
                                className={"indent-arrow off-indent-arrow"}
                                onClick={() => {
                                  setSelectedSubLinkDetail((prev) => ({
                                    ...prev,
                                    slugSubLinkId: id,
                                  }));
                                }}
                              />
                            )}
                          </AccordionSummary>
                          {childLink && (
                            <AccordionDetails className="child-accordion-container">
                              {childLink.map((item) => {
                                const { id = "", text = "" } = item;
                                return (
                                  <div
                                    className="child-list"
                                    key={id}
                                    onClick={() => {
                                      navigate(
                                        `/services/${subLinkNavigateTo}/${subLinkId}/${id}`
                                      );
                                      setDrawerState((prev) => ({
                                        ...prev,
                                        left: false,
                                      }));
                                    }}
                                  >
                                    {text}
                                  </div>
                                );
                              })}
                            </AccordionDetails>
                          )}
                        </Accordion>
                      )}
                      {title === "Academics" && subLink && (
                        <Accordion
                          className="child-accordion"
                          key={id}
                          expanded={isSubLinkExpanded}
                        >
                          <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                            className={`child-link-title-wrapper ${
                              selectedSubLinkDetail?.slugSubLinkId === id &&
                              "active-child-link-title-wrapper"
                            }`}
                          >
                            <Typography
                              className="child-title"
                              onClick={() => {
                                navigate(
                                  `/academics/${navigateTo}/${id}/${subLink[0].id}`
                                );
                                setDrawerState((prev) => ({
                                  ...prev,
                                  left: false,
                                }));
                              }}
                            >
                              {text}
                            </Typography>
                            {childLink ? (
                              <SlArrowRight
                                className={`indent-arrow 
              ${id === selectedSubLinkDetail?.slugSubLinkId && "active-indent"}
              `}
                                onClick={() => {
                                  setSelectedSubLinkDetail((prev) => ({
                                    ...prev,
                                    slugSubLinkId: id,
                                  }));
                                }}
                              />
                            ) : (
                              <SlArrowRight
                                className={"indent-arrow off-indent-arrow"}
                                onClick={() => {
                                  setSelectedSubLinkDetail((prev) => ({
                                    ...prev,
                                    slugSubLinkId: id,
                                  }));
                                }}
                              />
                            )}
                          </AccordionSummary>
                          {childLink && (
                            <AccordionDetails className="child-accordion-container">
                              {childLink.map((item) => {
                                const { id = "", text = "" } = item;
                                return (
                                  <div
                                    className="child-list"
                                    key={id}
                                    onClick={() => {
                                      navigate(
                                        `/academics/${subLinkNavigateTo}/${subLinkId}/${id}`
                                      );
                                      setDrawerState((prev) => ({
                                        ...prev,
                                        left: false,
                                      }));
                                    }}
                                  >
                                    {text}
                                  </div>
                                );
                              })}
                            </AccordionDetails>
                          )}
                        </Accordion>
                      )}
                    </div>
                  );
                })}
            </AccordionDetails>
          )}
        </Accordion>
      );
    });

  return <div className="sidebar-accordion">{navList && navList}</div>;
}
