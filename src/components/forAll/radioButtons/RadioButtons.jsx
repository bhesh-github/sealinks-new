import React from "react";

const RadioButtons = ({
  genderType,
  btnsType,
  patientType,
  setFormInputs,
  formInputs,
}) => {
  const handlePatientTypeChange = (e) => {
    setFormInputs((prev) => ({ ...prev, patient_type: e.target.value }));
  };
  const handleGenderTypeChange = (e) => {
    setFormInputs((prev) => ({ ...prev, gender: e.target.value }));
  };
  return (
    <div className="radio-btns">
      <br />
      <div className="btns">
        {btnsType === "patientType" &&
          patientType &&
          patientType.map((item) => (
            <div className="radio-btn-wrapper" key={item.id}>
              <input
                name="patientType"
                id={`patient_type${item.id}`}
                type="radio"
                value={item.value}
                checked={
                  formInputs &&
                  formInputs.patient_type &&
                  formInputs.patient_type === item.value
                }
                onChange={handlePatientTypeChange}
                required
              />
              <label htmlFor={`patient_type${item.id}`}>{item.value}</label>
            </div>
          ))}
        {btnsType === "gender" &&
          genderType &&
          genderType.map((item) => (
            <div className="radio-btn-wrapper" key={item.id}>
              <input
                name="gender"
                id={`gender_type${item.id}`}
                type="radio"
                value={item.value}
                checked={
                  formInputs &&
                  formInputs.gender &&
                  formInputs.gender === item.value
                }
                onChange={handleGenderTypeChange}
                required
              />
              <label htmlFor={`gender_type${item.id}`}>{item.value}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RadioButtons;
