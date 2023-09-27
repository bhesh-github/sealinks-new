import React, { useState } from "react";
import Button from "@mui/material/Button";
import { BsPlusCircle } from "react-icons/bs";
import { useForm } from "react-hook-form";

import SnackBar from "../../../forAll/SnackBar";
import ProgressIndicator from "../../../forAll/ProgressIndicator";

const JoinUsForm = ({ isSectionBar, handleIsSectionBar }) => {
  const [mobInputFileValue, setMobInputFileValue] = useState({
    coverLetter: "",
    cv: "",
  });
  console.log("------x-------x------", mobInputFileValue && mobInputFileValue);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "",
    failedMessage: "",
  });
  const handleClick = (newState) => () => {
    setSnackBarState((prev) => ({ ...prev, open: true }));
  };

  const { register, handleSubmit } = useForm();

  const handleMobInputFile = (fileType, e) => {
    const clearedPath = e.target.value.replace(/^.*\\/, "");
    fileType === "cover_letter" &&
      setMobInputFileValue((prev) => ({
        ...prev,
        coverLetter: clearedPath,
      }));
    fileType === "cv" &&
      setMobInputFileValue((prev) => ({
        ...prev,
        cv: clearedPath,
      }));
  };

  return (
    <>
      {formSubmitting && (
        <div className="spinner-wrapper">
          <ProgressIndicator className="spinner" />
        </div>
      )}
      <div
        className="form-outer"
        style={{
          display: !isSectionBar ? "none" : "",
        }}
      >
        <div
          className="mobile-join-us-form"
          style={{
            display: isSectionBar ? "block" : "none",
          }}
        >
          <h3 className="form-header">Join Us</h3>
          <form
            className="input-form"
            onSubmit={handleSubmit((data) => {
              setFormSubmitting(true);
              try {
                // data.patientType = formInputs.patient_type;
                // data.gender = formInputs.gender;
                // data.department = selectBtnsInfo[0].value;
                // data.doctor = selectBtnsInfo[1].value;
                // data.appointment_date = formInputs.appointment_date;
                // data.dob = formInputs.dob;
                // setValue("doctor_name", value);
                // await fetchAppointmentPost(data);
                setTimeout(() => {
                  // -----if successful-----------
                  setAlertMessage((prev) => ({
                    ...prev,
                    successMessage:
                      "You have successfully submitted your form.",
                  }));
                  setFormSubmitting(false);
                  setSnackBarState((prev) => ({ ...prev, open: true }));
                  handleClick({ vertical: "bottom", horizontal: "center" });
                  // ---------------------------------
                  //   setMobInputFileValue();
                  // reset();
                }, 2000);
                // fetchAppointmentPost(data);
              } catch (error) {}
            })}
          >
            <div className="input-and-label">
              <label htmlFor="" className="label">
                Your Name*
              </label>
              <input
                type="text"
                {...register("name", {
                  required: true,
                })}
                className="input-field"
              />
            </div>
            <div className="input-and-label">
              <label htmlFor="" className="label">
                Email Address*
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                type="text"
                className="input-field"
              />
            </div>
            <div className="input-and-label">
              <label htmlFor="" className="label">
                Your Phone*
              </label>
              <input
                {...register("phone", {
                  required: true,
                })}
                type="text"
                className="input-field"
              />
            </div>
            <div className="file-input-icon-wrapper">
              <div className="label">Cover Letter*</div>
              <label className="file-input-icon" htmlFor="cover_letter">
                <BsPlusCircle className="plus-icon" />
                <div className="uploaded-file-name">
                  {mobInputFileValue && mobInputFileValue.coverLetter
                    ? mobInputFileValue.coverLetter
                    : "No file selected."}
                </div>
                <input
                  {...register("cover_letter", {
                    required: true,
                  })}
                  type="file"
                  id="cover_letter"
                  className="cover-letter file-input "
                  onChange={(e) => {
                    console.log("eeeeeeeeeeeeeeeeee", e);

                    handleMobInputFile("cover_letter", e);
                  }}
                />
              </label>
            </div>
            <div className="file-input-icon-wrapper">
              <div className="label">CV*</div>
              <label className="file-input-icon" htmlFor="cv">
                <BsPlusCircle className="plus-icon" />
                <div className="uploaded-file-name">
                  {" "}
                  {mobInputFileValue && mobInputFileValue.cv
                    ? mobInputFileValue.cv
                    : "No file selected."}
                </div>
                <input
                  {...register("cv", {
                    required: true,
                  })}
                  type="file"
                  id="cv"
                  className="cv file-input"
                  onChange={(e) => {
                    console.log("eeeeeeeeeeeeeeeeee", e);
                    handleMobInputFile("cv", e);
                  }}
                />
              </label>
            </div>
            <Button className="submit-btn" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <SnackBar
        alertMessage={alertMessage}
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
    </>
  );
};

export default JoinUsForm;
