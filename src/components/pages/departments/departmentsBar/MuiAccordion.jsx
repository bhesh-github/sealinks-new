import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import { ReactComponent as Dermatology } from "../../../../images/home/clinicalExcellenceImages/dermatology.svg";
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

export default function CustomizedAccordions({
  accordionFor,
  allBtnsList,
  selectedDepartmentDetail,
  setSelectedDepartmentDetail,
  handleIsSectionBar,
}) {
  // const [expanded, setExpanded] = React.useState(
  //   `panel${selectedDepartmentDetail?.slugSubLinkId}`
  // );

  const handleChange = (panel) => (event, newExpanded) => {
    // setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      {accordionFor === "desktop" ? (
        <div className="mui-accordion">
          {allBtnsList &&
            allBtnsList.map((item) => {
              const {
                id = "",
                text = "",
                navigateTo = "",
                childLink = "",
              } = item;
              const isExpanded = selectedDepartmentDetail?.slugSubLinkId === id;
              const sublinkId = id;

              const subLinkNavigateTo = navigateTo;
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
                  onChange={handleChange(`panel${id}`)} // Use the id for handleChange
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                    className={`bar-btn ${
                      selectedDepartmentDetail?.slugSubLinkId === id &&
                      "active-btn"
                    }`}
                    onClick={() => {
                      setSelectedDepartmentDetail((prev) => ({
                        ...prev,
                        slugDepartment: navigateTo,
                        slugSubLinkId: Number(id),
                        slugChildId: Number(childLink[0]?.id),
                      }));
                    }}
                  >
                    {childLink ? (
                      <SlArrowRight
                        className={`indent-arrow ${
                          id === selectedDepartmentDetail?.slugSubLinkId &&
                          "active-indent"
                        }`}
                      />
                    ) : (
                      <SlArrowRight
                        className={"indent-arrow off-indent-arrow"}
                      />
                    )}
                    <Dermatology className="btn-icon" />
                    <Typography>{text}</Typography>
                  </AccordionSummary>
                  {childLink && (
                    <AccordionDetails className="accordion-container">
                      {childLink &&
                        childLink.map((item) => {
                          const { id = "", text = "" } = item;

                          return (
                            <div
                              className={`child-link ${
                                selectedDepartmentDetail?.slugChildId === id &&
                                "active-childlink"
                              }`}
                              key={id}
                              onClick={() => {
                                setSelectedDepartmentDetail((prev) => ({
                                  ...prev,
                                  slugDepartment:
                                    subLinkNavigateTo && subLinkNavigateTo,
                                  slugSubLinkId: Number(sublinkId && sublinkId),
                                  slugChildId: Number(id),
                                }));
                              }}
                            >
                              -{">"} {text}
                            </div>
                          );
                        })}
                    </AccordionDetails>
                  )}
                </Accordion>
              );
            })}
        </div>
      ) : (
        <div className="mui-accordion">
          {allBtnsList &&
            allBtnsList.map((item) => {
              const {
                id = "",
                text = "",
                navigateTo = "",
                childLink = "",
              } = item;
              const isExpanded = selectedDepartmentDetail?.slugSubLinkId === id;
              const sublinkId = id;

              const subLinkNavigateTo = navigateTo;
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
                  onChange={handleChange(`panel${id}`)} // Use the id for handleChange
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                    className={`bar-btn ${
                      selectedDepartmentDetail?.slugSubLinkId === id &&
                      "active-btn"
                    }`}
                    onClick={() => {
                      setSelectedDepartmentDetail((prev) => ({
                        ...prev,
                        slugDepartment: navigateTo,
                        slugSubLinkId: Number(id),
                        slugChildId: Number(childLink[0]?.id),
                      }));
                      !childLink && handleIsSectionBar();
                    }}
                  >
                    {childLink ? (
                      <SlArrowRight
                        className={`indent-arrow ${
                          id === selectedDepartmentDetail?.slugSubLinkId &&
                          "active-indent"
                        }`}
                      />
                    ) : (
                      <SlArrowRight
                        className={"indent-arrow off-indent-arrow"}
                      />
                    )}
                    <Dermatology className="btn-icon" />
                    <Typography>{text}</Typography>
                  </AccordionSummary>
                  {childLink && (
                    <AccordionDetails className="accordion-container">
                      {childLink &&
                        childLink.map((item) => {
                          const { id = "", text = "" } = item;

                          return (
                            <div
                              className={`child-link ${
                                selectedDepartmentDetail?.slugChildId === id &&
                                "active-childlink"
                              }`}
                              key={id}
                              onClick={() => {
                                setSelectedDepartmentDetail((prev) => ({
                                  ...prev,
                                  slugDepartment:
                                    subLinkNavigateTo && subLinkNavigateTo,
                                  slugSubLinkId: Number(sublinkId && sublinkId),
                                  slugChildId: Number(id),
                                }));
                                handleIsSectionBar();
                              }}
                            >
                              -{">"} {text}
                            </div>
                          );
                        })}
                    </AccordionDetails>
                  )}
                </Accordion>
              );
            })}
        </div>
      )}
    </>
  );
}
