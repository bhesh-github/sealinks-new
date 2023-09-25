// import React from "react";
// import Button from "@mui/material/Button";
// import { TfiGallery } from "react-icons/tfi";

// const SectionsButton = ({
//   allBtnsList,
//   selectedDepartment,
//   setSelectedDepartment,
// }) => {
//   const btnsIconList = {
//     gallery: <TfiGallery className="btn-icon" />,
//   };

//   return (
//     <>
//       <div className="bar-btns-wrapper">
//         {allBtnsList &&
//           allBtnsList.map((item) => {
//             const { id, text = "", slug = "", iconType = "" } = item;
//             return (
//               <div key={id} className="btn-and-underline">
//                 <Button
//                   className={`bar-btn ${
//                     selectedDepartment &&
//                     selectedDepartment.slug &&
//                     selectedDepartment.slug === slug &&
//                     "active-btn"
//                   }`}
//                   onClick={() => {
//                     setSelectedDepartment &&
//                       setSelectedDepartment((prev) => ({
//                         ...prev,
//                         id: Number(id && id),
//                         slug: slug,
//                       }));
//                   }}
//                 >
//                   {btnsIconList[iconType]}
//                   <span className={`btn-text`}>{text}</span>
//                 </Button>
//                 <div
//                   style={{
//                     borderBottom: "1px solid black",
//                     height: "1px",
//                     width: "95%",
//                   }}
//                 ></div>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// };

// export default SectionsButton;
