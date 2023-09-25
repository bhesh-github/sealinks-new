import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { lazy } from "react";
import { useParams } from "react-router-dom";
import RadioButtons from "../../../forAll/radioButtons/RadioButtons";
import DatePiker from "../../../forAll/datePicker/DatePiker";
import SnackBar from "../../../forAll/SnackBar";
import ProgressIndicator from "../../../forAll/ProgressIndicator";

// import { useEffect } from "react";
import { Button } from "@mui/material";
// import { useEffect } from "react";

const InnerBanner = lazy(() => import("../../../forAll/InnerBanner"));

const dateStr = new Date();
const year = dateStr.getFullYear();
const month = dateStr.getMonth();
const date = dateStr.getDate();
const formatedDate = `${year}-${month + 1}-${date}`;

const formInputsObj = {
  department: "",
  doctor_name: "",
  appointment_date: formatedDate,
  patient_type: "New Patient",
  patient_first_name: "",
  patient_middle_name: "",
  patient_last_name: "",
  gender: "",
  dob: formatedDate,
  address: "",
  phone: "",
  email: "",
  brief: "",
};

const DoctorAppointment = ({ selectBtnsInfo, patientType, genderType }) => {
  const [formInputs, setFormInputs] = useState(formInputsObj);
  // console.log("formInputs formInputsformInputs", formInputs);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const checkboxRef = useRef(null);
  const { name = "" } = useParams();
  const { register, handleSubmit, setValue, value } = useForm();

  // ------------------snackbar----------------------------
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "asdfads",
    failedMessage: "",
  });
  // setSnackBarState({ ...newState, open: true });
  const handleClick = (newState) => () => {
    setSnackBarState((prev) => ({ ...prev, open: true }));
  };
  // -----------------end snackbar----------------------------

  const innerBannerInfo = {
    pageName: "Doctor Appointment",
    title: `Dr. ${name.replace("-", " ")}`,
  };

  const handleTermsAndConditionsClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  };

  const fetchAppointmentPost = (rData) => {};

  return (
    <>
      {formSubmitting && (
        <div className="spinner-wrapper" >
          <ProgressIndicator className="spinner" />
        </div>
      )}
      <div className="doctor-appointment-page">
        <InnerBanner innerBannerInfo={innerBannerInfo} />
        <div className="section-wrapper">
          <form
            onSubmit={handleSubmit((data) => {
              setFormSubmitting(true);
              try {
                data.patientType = formInputs.patient_type;
                data.gender = formInputs.gender;
                data.department = selectBtnsInfo[0].value;
                data.doctor = selectBtnsInfo[1].value;
                data.appointment_date = formInputs.appointment_date;
                data.dob = formInputs.dob;
                // setValue("doctor_name", value);
                // await fetchAppointmentPost(data);
                setTimeout(() => {
                  // -----if successful-----------
                  setAlertMessage((prev) => ({
                    ...prev,
                    successMessage:
                      "You have successfully booked your appointment.",
                  }));
                  setFormSubmitting(false);
                  setSnackBarState((prev) => ({ ...prev, open: true }));
                  handleClick({ vertical: "bottom", horizontal: "center" });
                }, 2000);
                fetchAppointmentPost(data);
              } catch (error) {}
            })}
            className="appointment-form"
          >
            <h2 className="heading">Appointment Form</h2>
            <div className="doctor-infos">
              <div className="title">Doctor Info</div>
              <div className="btns-cover">
                {selectBtnsInfo &&
                  selectBtnsInfo.map((infos, idx) => {
                    const { labelName = "", btnName = "", value = "" } = infos;

                    return (
                      <div className="select-btn-wrapper" key={idx}>
                        <label
                          htmlFor="department"
                          className="select-btn-label"
                        >
                          {labelName}
                        </label>
                        <select
                          name={btnName}
                          id={btnName}
                          className="select-btn"
                        >
                          <option value={value} className="option">
                            {value}
                          </option>
                        </select>
                      </div>
                    );
                  })}
              </div>
              <div className="datepicker-cover">
                <DatePiker
                  dateType="appointment-date"
                  label_name="Your Appointment Date*"
                  formInputs={formInputs}
                  setFormInputs={setFormInputs}
                />
              </div>
            </div>
            <div className="patient-infos">
              <div className="title">Patient Info</div>
              <div className="fields-wrapper">
                <div className="new-or-old">
                  <RadioButtons
                    btnsType="patientType"
                    patientType={patientType && patientType}
                    setFormInputs={setFormInputs}
                    formInputs={formInputs}
                  />
                </div>
                <div className="triple-inputs-wrapper">
                  <div className="input-and-label">
                    <label className="field-label">First Name*</label>
                    <input
                      className="input-field"
                      {...register("first_name", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="input-and-label">
                    <label className="field-label">Middle Name</label>
                    <input
                      className="input-field"
                      {...register("middle_name")}
                    />
                  </div>
                  <div className="input-and-label">
                    <label className="field-label">Last Name*</label>
                    <input
                      className="input-field"
                      {...register("last_name", { required: true })}
                    />
                  </div>
                </div>
                <div className="gender-type">
                  <RadioButtons
                    btnsType="gender"
                    genderType={genderType && genderType}
                    setFormInputs={setFormInputs}
                    formInputs={formInputs}
                  />
                </div>
                <DatePiker
                  dateType="dob"
                  label_name="Date of Birth (AD)*"
                  formInputs={formInputs}
                  setFormInputs={setFormInputs}
                />
                <div className="triple-inputs-wrapper">
                  <div className="input-and-label">
                    <label className="field-label">Address</label>
                    <input
                      className="input-field"
                      {...register("address", { required: true })}
                    />
                  </div>
                  <div className="input-and-label">
                    <label className="field-label">Mobile No.</label>
                    <input
                      className="input-field"
                      type="number"
                      {...register("phone", { required: true })}
                    />
                  </div>
                  <div className="input-and-label">
                    <label className="field-label">Email Address</label>
                    <input className="input-field" {...register("email")} />
                  </div>
                </div>
                <div className="brief-input-wrapper">
                  <label className="field-label">
                    Are you Suffering from Any Chronic Disease?
                  </label>
                  <textarea
                    className="textarea"
                    id="w3review"
                    name="w3review"
                    rows="6"
                    cols="50"
                    {...register("description")}
                  ></textarea>
                </div>
                <div className="terms-and-conditions">
                  <input
                    type="checkbox"
                    id="terms_and_conditions"
                    name="terms-and-conditions"
                    className="checkbox"
                    // value="Car"
                    ref={checkboxRef}
                    required
                  ></input>
                  <div
                    className="text-wrapper"
                    onClick={handleTermsAndConditionsClick}
                  >
                    I Agree{" "}
                    <span className="highlight">Term and Conditions</span>
                  </div>
                </div>
                <Button className="choose-btn" type="submit">
                  Choose
                </Button>
              </div>
            </div>
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

export default DoctorAppointment;
DoctorAppointment.defaultProps = {
  selectBtnsInfo: [
    {
      id: 0,
      labelName: "Department",
      btnName: "department",
      value: "Oncology",
    },
    {
      id: 1,
      labelName: "Doctor",
      btnName: "doctor",
      value: "Prof. Dr. John Sharma",
    },
  ],
  patientType: [
    {
      id: 0,
      value: "New Patient",
    },
    {
      id: 1,
      value: "Old Patient",
    },
  ],
  genderType: [
    {
      id: 0,
      value: "Male",
    },
    {
      id: 1,
      value: "Female",
    },
    {
      id: 2,
      value: "Others",
    },
  ],
};
