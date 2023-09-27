import React, { useState } from "react";
import { lazy } from "react";
import { VscClose } from "react-icons/vsc";
const FloatingLinkBtn = lazy(() => import("../../../forAll/FloatingLinkBtn"));

const RightColumn = ({
  contentContainer,
  currentContent,
  gallery,
  handleIsSectionBar,
}) => {
  const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  const sectionName = `${currentContent.replaceAll("-", " ")}`;

  isSliderOverlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  return (
    <>
      <div className="contents-column">
        <div className="section-heading">
          <div className="highlight">{sectionName && sectionName}</div>
          <div className="underline-wrapper">
            <span className="dark"></span>
          </div>
        </div>
        <div className="floating-btn-row">
          <FloatingLinkBtn
            handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
          />
        </div>
        <div className="contents-section-wrapper">
          {contentContainer &&
            contentContainer.map((item) => {
              if (item.slug === currentContent && currentContent) {
                return (
                  <div
                    key={item.id}
                    className="content-container"
                    dangerouslySetInnerHTML={{
                      __html: item.desc,
                    }}
                  />
                );
              } else {
                return "";
              }
            })}
          {gallery && gallery.slug === currentContent && (
            <div className="gallery-container">
              {gallery &&
                gallery.images &&
                gallery.images.map((item, idx) => (
                  <div
                    className="card-wrapper"
                    key={idx}
                    onClick={() => {
                      setIsSliderOverlay(true);
                    }}
                  >
                    <div
                      className="card-image"
                      style={{ backgroundImage: `url(${item})` }}
                    >
                      {/* <img src={item} /> */}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        {isSliderOverlay && (
          <div className="overlay-outer">
            <div
              className="slider-overlay"
              onClick={() => {
                setIsSliderOverlay(false);
              }}
            >
              <div className="btn-wrapper">
                <VscClose
                  className="close-btn"
                  onClick={() => {
                    setIsSliderOverlay(false);
                  }}
                />
              </div>
            </div>
            <div className="silder-comp"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default RightColumn;
RightColumn.defaultProps = {
  contentContainer: [
    {
      id: 0,
      slug: "teacher-training",
      desc: `<div className="htmls" style='text-align:justify;'>
    <div className="html-wrapper">
      <h3 className="heading">About Training</h3>
      <br/>
      <div className="desc">
      Teacher Training Workshops for the faculty members (facilitators) are held in Nepal by different Universities, medical schools, medical institutes and medical colleges from time to time.

      Nepal Medical College, affiliated to Kathmandu University, has also been doing the same for its faculty members and this is one of such kind.
      
      Nepal Medical College is running Medical, Dental and Nursing academic programs with respective faculty members. Though the programs differ from one another, the process involved in educating medical, dental and nursing students (learners) remain more or less the same.
      
      In this context, the workshop intends to allow faculty members belonging to different health professions share the same forum and discuss on spectrum of academic issues to foster "HealthCare Team" spirit and "Facilitate Learning for Quality Assurance".
      </div>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">The Workshop</h3>
      <br/>
      <div className="desc">
      Medical Education Department (MED) has a firm belief that the Workshop must be held in a non-formal working environment for allowing maximum interactions among participants and resource persons.

      However, the workshop, as any where else, demands punctuality and regularity with full time participation which help achieve the outcome of the workshop.
      </div>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">
      Workshop Objectives
      </h3>
      <br/>
      <div><strong>Overall:</strong> Capacity building of Faculty Members of Nepal Medical College in relation to pedagogy and educational competencies.</div>
      <br/>
      <ul style='margin-left:1em;' className="desc list-desc">
        <li>Recall History of Health Professions Education in Nepal.</li>
        <li>Conceptualize the process of designing curriculum</li>
        <li>List domains of learning</li>
        <li>Write learning objectives</li>
        <li>Describe the methods of helping learners acquire knowledge</li>
        <li>Plan Lesson</li>
        <li>Comprehend principles and process of adult learning</li>
        <li>Determine how skills are acquired</li>
        <li>
        Comprehend how learner can be motivated to develop right kind of attitude required of medical profession
        </li>
        <li>Design and demonstrate microteaching</li>
        <li>Select Audio Visual Aids and utelise for making learning effective</li>
        <li>List roles and Responsibilities of facilitator</li>
        <li>Comprehend the concept of Problem-Based Learning (PBL)</li>
        <li>Determine how PBL is implemented through Small Group Learning</li>
        <li>Demonstrate Communication Skills</li>
        <li>Distinguish purposes of Assessments and construct Tools for Assessment of Knowledge / Skills / Attitude of learners</li>
      </ul>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">Workshop Outcome</h3>
      <br/>
      <div className="desc">
      Facilitate learning for quality assurance
      </div>
    </div>
    <br/>
  </div>`,
    },
    {
      id: 1,
      slug: "drug-and-therapeutic-commitee",
      desc: `<div className="htmls">
      <div className="html-wrapper" style='text-align:center'>
        <h3 className="heading">DRUG AND THERAPEUTIC COMMITTEE (DTC)</h3>
        <br/> <br/>
        <div >
          <div>
            <div><strong>Chairman:</strong></div>
            Prof. Dr. Pramod Kumar Chhetri
          </div>
          <br/>
          <div>
            <div><strong>Vice Chairman:</strong></div>
            Dr. Rajesh KishorShrestha
          </div>
          <br/>
          <div>
            <div><strong>Member Secretary:</strong></div>
            Dr. Anup Raj Upreti (Clinical Pharmacist)
          </div>
          <br/>
          <br/>
          <br/>
          <div><strong>Members:</strong></div>
          <br/>
          <div>
             <div><strong>Prof. Dr. Ugra Narayan Pathak</strong></div>
             Head Of Department Department of Medicine
          </div>
          <br/>
          <div>
            <div><strong>Prof. Dr. ManoharLalShrestha</strong></div>
            Head Of Department Department of Surgery
          </div>
          <br/>
          <div>
            <div><strong>Prof. Dr. PramilaPradhan</strong></div>
            Head Of Department Department of Obstetrics/Gynaecology
          </div>
          <br/>
          <div>
            <div><strong>Prof .Dr. Fakir Chandra Gami</strong></div>
            Head Of Department Department of paediatrics
          </div>
          <br/>
          <div>
            <div><strong>Assoc. Prof. Dr. UrmilaBharati</strong></div>
            Head Of DepartmentDepartment of Emergency
          </div>
          <br/>
          <div>
            <div><strong>Assoc. Prof. Dr. Satyam Rimal</strong></div>
            Department of paediatrics/Hospital Deputy Director
            </div>
          <br/>
          <div>
            <div><strong>Dr. Deepti Shrestha</strong></div>
            Assistant Professor Department of Pharmacology
            </div>
          <br/>
          <div>
            <div><strong>Mr. Dhurba Bahadur. BasnetChief</strong></div>
            Admnistrator, Department of Administration
            </div>
          <br/>
          <div>
          <div><strong>Mr. Munna Prasad</strong></div>
          Chief Finance controller Department of Finance
            </div>
          <br/>
          <div><strong>Ms. Urmila Shrestha</strong></div>
          Nursing Matron (Acting) Department of Nursing
            </div>
          <br/>
          <div><strong>Mr. Hari Prasad Tripathi</strong></div>
          Senior Administrator, Department of Administration
            </div>
          <br/>
        </div>
        <br/>
      </div>
    </div>`,
    },
    {
      id: 2,
      slug: "inter-medical-school-physiology-quiz-2019",
      desc: `<div className="htmls">
      <div className="html-wrapper">
        <h3 className="heading">Inter Medical School Physiology Quiz 2019:</h3>
        <br/>
      </div>
    </div>`,
    },
    {
      id: 3,
      slug: "satellite-program",
      desc: `<div className="htmls">
      <div className="html-wrapper">
        <h3 className="heading">Satellite Program</h3>
        <br/>
      </div>
      <br />
    </div>`,
    },
    {
      id: 4,
      slug: "save-bagmati",
      desc: `<div className="htmls">
    <div className="html-wrapper">
      <h3 className="heading">Save Bagmati</h3>
      <br/>
    </div>
  </div>`,
    },
    {
      id: 5,
      slug: "falgun-pacchis",
      desc: `<div className="htmls">
      <div className="html-wrapper">
        <h3 className="heading">Falgun Pacchis</h3>
        <br/>
      </div>
    </div>`,
    },
  ],
};
