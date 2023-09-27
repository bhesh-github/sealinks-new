import React from "react";
import { lazy } from "react";

// import { VscClose } from "react-icons/vsc";
const FloatingLinkBtn = lazy(() => import("../../forAll/FloatingLinkBtn"));

const RightColumn = ({ currentContent, gallery, handleIsSectionBar }) => {
  // const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  // const sectionName = `${currentContent.replaceAll("-", " ")}`;

  // isSliderOverlay
  //   ? (document.body.style.overflowY = "hidden")
  //   : (document.body.style.overflowY = "scroll");

  return (
    <div className="contents-column">
      <div className="section-heading">
        <div className="highlight">
          {/* {sectionName && sectionName} */}
          News / Notices
        </div>
        <div className="underline-wrapper">
          <span className="dark"></span>
        </div>
      </div>
      <div className="floating-btn-row">
        <FloatingLinkBtn
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
      </div>
      <div className="htmls" style={{ width: "100%", textAlign: "justify" }}>
        <div className="html-wrapper">
          <h3 className="heading">An Antimicrobial Stewardship Team (AST)</h3>
          <br />
          <div className="desc">
            An Antimicrobial Stewardship Team (AST) plays a critical role in
            managing the use of antimicrobial agents within a healthcare
            setting, including the Intensive Care Unit (ICU). The primary goal
            of an AST is to optimize antimicrobial therapy to ensure the best
            possible patient outcomes while minimizing the development of
            antimicrobial resistance, reducing side effects, and controlling
            healthcare costs. In the ICU, where patients are often critically
            ill and susceptible to infections, the role of the AST is
            particularly important.
          </div>
        </div>
        <br />
        <div className="html-wrapper">
          <h3 className="heading">
            Here are key aspects of the Antimicrobial Stewardship Team's role in
            the ICU:
          </h3>
          <br />
          <div>
            <strong>Overall:</strong> Capacity building of Faculty Members of
            Nepal Medical College in relation to pedagogy and educational
            competencies.
          </div>
          <br />
          <ul style={{ marginLeft: "1em" }} className="desc list-desc">
            <li>
              <strong> Comprehensive Assessment:</strong> The AST collaborates
              closely with ICU healthcare providers to assess patients' clinical
              conditions and laboratory data to determine whether antimicrobial
              therapy is appropriate and effective. They review patient records,
              culture results, and diagnostic tests to guide treatment
              decisions.
            </li>
            <br />
            <li>
              <strong> Guideline Development and Implementation:</strong> The
              team is responsible for developing and implementing evidence-based
              guidelines and protocols for antimicrobial use in the ICU. These
              guidelines help standardize treatment approaches, promote best
              practices, and reduce unnecessary antibiotic use.
            </li>
            <br />
            <li>
              <strong> Education and Training: </strong>The AST educates ICU
              staff, including physicians, nurses, and pharmacists, on
              antimicrobial stewardship principles. This includes appropriate
              prescribing practices, the importance of de-escalation, and
              strategies for infection prevention.
            </li>
            <br />
            <li>
              <strong>Prospective Audit and Feedback: </strong>The team conducts
              prospective audits of antimicrobial prescriptions in the ICU. They
              review ongoing cases, provide feedback to clinicians, and make
              recommendations for adjustments to therapy when necessary. This
              process ensures that antibiotics are used judiciously and
              according to established guidelines.
            </li>
            <br />
            <li>
              <strong> De-Escalation and Streamlining:</strong> AST members work
              with ICU clinicians to assess whether the initial broad-spectrum
              antimicrobial therapy can be narrowed down or de-escalated based
              on culture results and clinical improvement. This practice helps
              reduce unnecessary exposure to powerful antibiotics.
            </li>
            <br />
            <li>
              <strong>Monitoring Resistance Patterns:</strong> The team closely
              monitors antimicrobial resistance patterns within the ICU. They
              analyze data on antibiotic susceptibility to identify trends and
              potential outbreaks, allowing for timely intervention and
              adjustments to treatment guidelines.
            </li>
            <br />
            <li>
              <strong> Antimicrobial Formulary Management:</strong> AST members
              collaborate with pharmacy services to maintain an updated
              formulary of antimicrobial agents in the ICU. They help select
              appropriate antibiotics, considering factors such as drug
              availability, cost, and local resistance patterns.
            </li>
            <br />
            <li>
              <strong>Reporting and Compliance:</strong> The team ensures
              compliance with antimicrobial stewardship programs and reports
              outcomes and performance metrics to hospital leadership. This
              helps demonstrate the program's impact on patient care and
              antimicrobial resistance rates.
            </li>
            <br />
            <li>
              <strong>Research and Innovation:</strong> Some ASTs engage in
              research activities to advance the field of antimicrobial
              stewardship, including studying new diagnostic methods, treatment
              strategies, and technologies to improve patient care.
            </li>
            <br />
            <li>
              <strong> Collaboration:</strong> Effective communication and
              collaboration among ICU healthcare providers, infectious disease
              specialists, microbiologists, and pharmacists are essential to the
              success of the AST.
            </li>
          </ul>
          <div>
            <br />
            Antimicrobial stewardship in the ICU is a dynamic process that
            requires a multidisciplinary approach, ongoing monitoring, and
            adaptation to changing clinical circumstances and resistance
            patterns. By optimizing antimicrobial use, ASTs contribute to better
            patient outcomes, reduced healthcare costs, and the preservation of
            effective antibiotics for future generations.
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default RightColumn;
// RightColumn.defaultProps = {
//   contentContainer: [
//     {
//       id: 0,
//       slug: "teacher-training",
//       desc: `<div className="htmls">
//     <div className="html-wrapper">
//       <h3 className="heading">About Training</h3>
//       <br/>
//       <div className="desc">
//       Teacher Training Workshops for the faculty members (facilitators) are held in Nepal by different Universities, medical schools, medical institutes and medical colleges from time to time.

//       Nepal Medical College, affiliated to Kathmandu University, has also been doing the same for its faculty members and this is one of such kind.

//       Nepal Medical College is running Medical, Dental and Nursing academic programs with respective faculty members. Though the programs differ from one another, the process involved in educating medical, dental and nursing students (learners) remain more or less the same.

//       In this context, the workshop intends to allow faculty members belonging to different health professions share the same forum and discuss on spectrum of academic issues to foster "HealthCare Team" spirit and "Facilitate Learning for Quality Assurance".
//       </div>
//     </div>
//     <br/>
//     <div className="html-wrapper">
//       <h3 className="heading">The Workshop</h3>
//       <br/>
//       <div className="desc">
//       Medical Education Department (MED) has a firm belief that the Workshop must be held in a non-formal working environment for allowing maximum interactions among participants and resource persons.

//       However, the workshop, as any where else, demands punctuality and regularity with full time participation which help achieve the outcome of the workshop.
//       </div>
//     </div>
//     <br/>
//     <div className="html-wrapper">
//       <h3 className="heading">
//       Workshop Objectives
//       </h3>
//       <br/>
//       <div><strong>Overall:</strong> Capacity building of Faculty Members of Nepal Medical College in relation to pedagogy and educational competencies.</div>
//       <br/>
//       <ul style='margin-left:1em;' className="desc list-desc">
//         <li>Recall History of Health Professions Education in Nepal.</li>
//         <li>Conceptualize the process of designing curriculum</li>
//         <li>List domains of learning</li>
//         <li>Write learning objectives</li>
//         <li>Describe the methods of helping learners acquire knowledge</li>
//         <li>Plan Lesson</li>
//         <li>Comprehend principles and process of adult learning</li>
//         <li>Determine how skills are acquired</li>
//         <li>
//         Comprehend how learner can be motivated to develop right kind of attitude required of medical profession
//         </li>
//         <li>Design and demonstrate microteaching</li>
//         <li>Select Audio Visual Aids and utelise for making learning effective</li>
//         <li>List roles and Responsibilities of facilitator</li>
//         <li>Comprehend the concept of Problem-Based Learning (PBL)</li>
//         <li>Determine how PBL is implemented through Small Group Learning</li>
//         <li>Demonstrate Communication Skills</li>
//         <li>Distinguish purposes of Assessments and construct Tools for Assessment of Knowledge / Skills / Attitude of learners</li>
//       </ul>
//     </div>
//     <br/>
//     <div className="html-wrapper">
//       <h3 className="heading">Workshop Outcome</h3>
//       <br/>
//       <div className="desc">
//       Facilitate learning for quality assurance
//       </div>
//     </div>
//     <br/>
//   </div>`,
//     },
//     {
//       id: 1,
//       slug: "drug-and-therapeutic-commitee",
//       desc: `<div className="htmls">
//       <div className="html-wrapper" style='text-align:center'>
//         <h3 className="heading">DRUG AND THERAPEUTIC COMMITTEE (DTC)</h3>
//         <br/> <br/>
//         <div >
//           <div>
//             <div><strong>Chairman:</strong></div>
//             Prof. Dr. Pramod Kumar Chhetri
//           </div>
//           <br/>
//           <div>
//             <div><strong>Vice Chairman:</strong></div>
//             Dr. Rajesh KishorShrestha
//           </div>
//           <br/>
//           <div>
//             <div><strong>Member Secretary:</strong></div>
//             Dr. Anup Raj Upreti (Clinical Pharmacist)
//           </div>
//           <br/>
//           <br/>
//           <br/>
//           <div><strong>Members:</strong></div>
//           <br/>
//           <div>
//              <div><strong>Prof. Dr. Ugra Narayan Pathak</strong></div>
//              Head Of Department Department of Medicine
//           </div>
//           <br/>
//           <div>
//             <div><strong>Prof. Dr. ManoharLalShrestha</strong></div>
//             Head Of Department Department of Surgery
//           </div>
//           <br/>
//           <div>
//             <div><strong>Prof. Dr. PramilaPradhan</strong></div>
//             Head Of Department Department of Obstetrics/Gynaecology
//           </div>
//           <br/>
//           <div>
//             <div><strong>Prof .Dr. Fakir Chandra Gami</strong></div>
//             Head Of Department Department of paediatrics
//           </div>
//           <br/>
//           <div>
//             <div><strong>Assoc. Prof. Dr. UrmilaBharati</strong></div>
//             Head Of DepartmentDepartment of Emergency
//           </div>
//           <br/>
//           <div>
//             <div><strong>Assoc. Prof. Dr. Satyam Rimal</strong></div>
//             Department of paediatrics/Hospital Deputy Director
//             </div>
//           <br/>
//           <div>
//             <div><strong>Dr. Deepti Shrestha</strong></div>
//             Assistant Professor Department of Pharmacology
//             </div>
//           <br/>
//           <div>
//             <div><strong>Mr. Dhurba Bahadur. BasnetChief</strong></div>
//             Admnistrator, Department of Administration
//             </div>
//           <br/>
//           <div>
//           <div><strong>Mr. Munna Prasad</strong></div>
//           Chief Finance controller Department of Finance
//             </div>
//           <br/>
//           <div><strong>Ms. Urmila Shrestha</strong></div>
//           Nursing Matron (Acting) Department of Nursing
//             </div>
//           <br/>
//           <div><strong>Mr. Hari Prasad Tripathi</strong></div>
//           Senior Administrator, Department of Administration
//             </div>
//           <br/>
//         </div>
//         <br/>
//       </div>
//     </div>`,
//     },
//     {
//       id: 2,
//       slug: "inter-medical-school-physiology-quiz-2019",
//       desc: `<div className="htmls">
//       <div className="html-wrapper">
//         <h3 className="heading">Inter Medical School Physiology Quiz 2019:</h3>
//         <br/>
//       </div>
//     </div>`,
//     },
//     {
//       id: 3,
//       slug: "satellite-program",
//       desc: `<div className="htmls">
//       <div className="html-wrapper">
//         <h3 className="heading">Satellite Program</h3>
//         <br/>
//       </div>
//       <br />
//     </div>`,
//     },
//     {
//       id: 4,
//       slug: "save-bagmati",
//       desc: `<div className="htmls">
//     <div className="html-wrapper">
//       <h3 className="heading">Save Bagmati</h3>
//       <br/>
//     </div>
//   </div>`,
//     },
//     {
//       id: 5,
//       slug: "falgun-pacchis",
//       desc: `<div className="htmls">
//       <div className="html-wrapper">
//         <h3 className="heading">Falgun Pacchis</h3>
//         <br/>
//       </div>
//     </div>`,
//     },
//   ],
// };
