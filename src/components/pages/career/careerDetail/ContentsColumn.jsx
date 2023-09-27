import React from "react";
import { lazy } from "react";
const FloatingLinkBtn = lazy(() => import("../../../forAll/FloatingLinkBtn"));
// import { VscClose } from "react-icons/vsc";

const RightColumn = ({ handleIsSectionBar }) => {
  // const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  // const sectionName = `${currentContent.replaceAll("-", " ")}`;

  // isSliderOverlay
  //   ? (document.body.style.overflowY = "hidden")
  //   : (document.body.style.overflowY = "scroll");

  return (
    <div className="contents-column">
      <div className="section-heading">
        <div className="highlight">Vacancy on Dentist</div>
        <div className="underline-wrapper">
          <span className="dark"></span>
        </div>
      </div>
      <div className="floating-btn-row">
        <FloatingLinkBtn
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
      </div>
      <div className="cards-wrapper">
        <div className="htmls" style={{ textAlign: "justify" }}>
          <div>
            NMC is a leading healthcare facility dedicated to providing
            exceptional dental care to our community. We are committed to
            delivering the highest standard of patient-centered care, and we are
            currently seeking enthusiastic and skilled dentists to join our
            team.
          </div>
          <br />
          <div>
            <h3>Qualifications:</h3>
            <ol style={{ marginLeft: "1em" }}>
              <li>
                Doctor of Dental Medicine (DMD) or Doctor of Dental Surgery
                (DDS) degree from an accredited dental school.
              </li>
              <li>Valid state dental license and current CPR certification.</li>
              <li>Strong commitment to ethical patient care and safety.</li>
              <li>Excellent communication and interpersonal skills.</li>
            </ol>
          </div>
          <br />
          <div>
            <h3>Experience:</h3>
            <ul style={{ marginLeft: "1em" }}>
              <li>
                Minimum of 2 years of clinical experience in general dentistry.
              </li>
              <li>Proficiency in diagnosing and treating dental conditions.</li>
              <li>Experience with pediatric dentistry is a plus.</li>
            </ul>
          </div>
          <br />
          <div>
            <h3>Requirements and Skills:</h3>
            <ol style={{ marginLeft: "1em" }}>
              <li>
                <strong>Clinical Excellence:</strong>Provide comprehensive
                dental care, including examinations, diagnosis, treatment
                planning, and dental procedures.
              </li>
              <li>
                <strong>Patient-Centered:</strong>Demonstrate empathy and
                compassion towards patients, ensuring a comfortable and positive
                experience.
              </li>
              <li>
                <strong>Communication:</strong>Effectively communicate treatment
                options, procedures, and aftercare to patients in a clear and
                understandable manner.
              </li>
              <li>
                <strong>Team Collaboration:</strong> Collaborate with dental
                hygienists, dental assistants, and support staff to ensure
                smooth patient flow and excellent patient care.
              </li>
              <li>
                <strong>Technology Proficiency:</strong> Utilize modern dental
                technology, such as digital radiography and electronic health
                records, to enhance patient care and record-keeping.
              </li>
              <li>
                <strong>Continuing Education:</strong>Stay updated on the latest
                advancements in dentistry through ongoing education and
                professional development.
              </li>
            </ol>
          </div>
          <br />
          <div>
            <h3>Working Hours:</h3>
            <ul style={{ marginLeft: "1em" }}>
              <li>Full-time position with flexible scheduling options.</li>
              <li>
                Availability for occasional evenings and weekends, if necessary.
              </li>
            </ul>
          </div>
          <br />
          <div>
            <h3>Benefits:</h3>
            <ul style={{ marginLeft: "1em" }}>
              <li>Competitive salary and bonus structure.</li>
              <li>Health, dental, and vision insurance coverage.</li>
              <li>Retirement savings plan.</li>
              <li>Continuing education allowance.</li>
              <li>State-of-the-art dental equipment and facilities.</li>
              <li>Supportive and collaborative work environment.</li>
            </ul>
          </div>
          <br />
          <div>
            <h3>How to Apply:</h3>
            <div>Interested candidates are invited to fill up the form.</div>
          </div>
          <br />
          <div>
            <h3>Application Deadline: October 15, 2023</h3>
            <div>
              NMC is an equal opportunity employer. We welcome applications from
              candidates of all backgrounds and experiences. Join our team of
              dedicated dental professionals and contribute to our mission of
              providing exceptional oral healthcare to our community. We look
              forward to receiving your application!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
RightColumn.defaultProps = {
  vacancyList: [
    {
      id: 0,
      position: "Dentist",
      slug: "dentist",
      numOfVacancy: 5,
      deadLine: "15 OCTOBER 2023",
    },
    {
      id: 1,
      position: "Nurse",
      slug: "nurse",
      numOfVacancy: 3,
      deadLine: "20 DECEMBER 2023",
    },
    {
      id: 2,
      position: "Dentist",
      slug: "dentist",
      numOfVacancy: 5,
      deadLine: "15 OCTOBER 2023",
    },
    {
      id: 3,
      position: "Gastroenterology",
      slug: "gastroenterology",
      numOfVacancy: 1,
      deadLine: "1 DECEMBER 2023",
    },
    {
      id: 4,
      position: "Urosurgery Department",
      slug: "urosurgery-department",
      numOfVacancy: 5,
      deadLine: "15 OCTOBER 2023",
    },
  ],
};
