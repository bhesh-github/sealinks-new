import React from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
// import MapColumn from "./MapColumn";

const ContactForm = ({
  setFormSubmitting,
  setAlertMessage,
  setSnackBarState,
  handleClick,
}) => {
  const { register, handleSubmit,reset } = useForm();

  return (
    <div className="contact-form-wrapper">
      <h4 className="form-header">Get in touch</h4>
      <div className="columns">
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
                  successMessage: "You have successfully submitted your form.",
                }));
                setFormSubmitting(false);
                setSnackBarState((prev) => ({ ...prev, open: true }));
                handleClick({ vertical: "bottom", horizontal: "center" });
                reset()
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
          <div className="textarea-wrapper">
            <label className="textarea-label">
              Are you Suffering from Any Chronic Disease?
            </label>
            <textarea
              className="textarea"
              id="w3review"
              name="w3review"
              rows="6"
              cols="50"
              {...register("description", {
                required: true,
              })}
            ></textarea>
          </div>
          <Button className="submit-btn" type="submit">
            Submit
          </Button>
        </form>
        {/* <MapColumn /> */}
      </div>
    </div>
  );
};

export default ContactForm;
