import React, { useState } from "react";
import { lazy } from "react";

import img1 from "../../../images/pages/about/gallery/img1.jpg";
import img2 from "../../../images/pages/about/gallery/img2.jpg";
import img3 from "../../../images/pages/about/gallery/img3.jpg";
import img4 from "../../../images/pages/about/gallery/img4.jpg";
import img5 from "../../../images/pages/about/gallery/img5.jpg";
import img6 from "../../../images/pages/about/gallery/img6.jpg";
import GalleryCarousel from "./GalleryCarousel";
import { VscClose } from "react-icons/vsc";


const FloatingLinkBtn = lazy(() => import("../../forAll/FloatingLinkBtn"));

const RightColumn = ({
  contentContainer,
  section,
  id,
  gallery,
  handleIsSectionBar,
}) => {
  const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  const sectionName = `${section.replace("-", " ")}`;
  const [currentImageId, setCurrentImageId] = useState();

  isSliderOverlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");



  return (
    <>
      <div className="right-column">
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
        {contentContainer &&
          contentContainer.map((item) => {
            if (item.slug === section && section) {
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
        {gallery && gallery.slug === section && section && (
          <div className="gallery-containers">
            {gallery.images.map((item, idx) => (
              <div
                className="card-wrapper"
                key={idx}
                onClick={() => {
                  setIsSliderOverlay(true);
                  setCurrentImageId(idx);
                }}
              >
                <div
                  className="image-card"
                  style={{
                    backgroundImage: `url(${item})`,
                  }}
                ></div>
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
          <div className="silder-comp">
            <GalleryCarousel
              currentImageId={currentImageId}
              imagesList={gallery && gallery.images && gallery.images}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default RightColumn;
RightColumn.defaultProps = {
  contentContainer: [
    {
      id: 0,
      slug: "about-hospital",
      desc: `<div className="htmls">
    <div className="html-wrapper">
      <h3 className="heading">Establishment</h3>
      <br/>
      <div className="desc">
        Nepal Medical College Pvt. Ltd affiliated with Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">Management</h3>
      <br/>
      <div className="desc">
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Lorem
        Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">Programs</h3>
      <br/>
      <div className="desc">
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">
        Services available at the Teaching Hospital
      </h3>
      <br/>
      <ul className="desc list-desc">
        <li>24-Hour services</li>
        <li>24 Hours Emergency Services</li>
        <li>Nephrology Services: Dialysis services (24 hours)</li>
        <li>Neurosurgery (24 hours)</li>
        <li>24 Hours Pharmacy Services</li>
        <li>Cardiac Services</li>
        <li>Coronary Care Unit (CCU), Intensive Care Unit (ICU), TMT</li>
        <li>Cardiology Services, Echocardiography</li>
        <li>
          Pulmonary Function Tests (PFT), Pulmonary Care Services (Chest
          Diseases Care)
        </li>
        <li>Cath Lab</li>
        <li>Medical Services</li>
        <li>Free Dialysis Program for BipannaNagarik</li>
        <li>SICU/MICU Dialysis</li>
        <li>Medical Intensive Care Unit (MICU)</li>
        <li>Bronchoscopy</li>
        <li>Pulmonology & Sleep Medicine</li>
        <li>Neuro Physician</li>
        <li>ERCP</li>
        <li>Chemotherapy</li>
        <li>Gastroenerology</li>
        <li>Critical Care Medicine</li>
        <li>Dermatology & Venereology Services</li>
        <li>Psychiatric Services, EEG</li>
        <li>Surgical services</li>
        <li>Laparoscopic Surgery</li>
        <li>Urology Surgery</li>
        <li>Kidney Transplant</li>
        <li>Breast Oncology</li>
        <li>Neurology</li>
        <li>Pediatric Surgery</li>
        <li>Onco-surgery</li>
        <li>Gastro-surgery</li>
        <li>Pre-Anesthesia Checkup</li>
        <li>Pediatrics Services</li>
        <li>
          Neonatal Intensive Care Unit (NICU), Pediatric Intensive Care
          Unit (PICU), Immunization Services
        </li>
        <li>Paediatric Nephrology</li>
        <li>Paediatric Cardiology</li>
        <li>Gynae/Obst services</li>
        <li>
          Gynecology & Obstetrics including ANC, Delivery, PNC, Maternal &
          Child Health Clinics, PAC, Gyane-Oncology, Sub-fertility,
          Adolescence & Family Planning services, Comprehensive Abortion
          Care (CAC) Services
        </li>
        <li>Orthopedic Services</li>
        <li>Trauma</li>
        <li>Spine Surgery</li>
        <li>Physiotherapy Services</li>
        <li>Bone-Dentistry measurement services</li>
        <li>Arthroscopy/Arthroplasty</li>
        <li>ENT Services</li>
        <li>ENT surgeries</li>
        <li>Audiometric Services</li>
        <li>Ophthalmology Services</li>
        <li>Cataract surgery</li>
        <li>Orthoptics (Eye Exercises)</li>
        <li>Uveitis Specialties</li>
        <li>Dental services</li>
        <li>
          Maxillofacial prosthesis, oral surgery and all types of dental
          care including complete denture & many more
        </li>
        <li>
          Dental X-ray (Direct Digital Orhtopantomography)
          OPG/Cephalometry
        </li>
      </ul>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">Clinical Laboratory Services</h3>
      <br/>
      <div className="desc">
        Histopathology Services, Thyroid Function Tests, Para-thyroid
        hormone test, Liver functions test, Iron profile, Coagulation
        assay, Cardiac biomarkers (Fully Automated Biochemistry Analyzer
        is in use).
      </div>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">Radiology services</h3>
      <br/>
      <div className="desc">
        CT-Scan, radiology including Digital X-Ray Services, Ultrasound
        and Color Doppler, Special Tests
      </div>
    </div>
    <br/>
    <div className="html-wrapper">
      <h3 className="heading">Other services</h3>
      <br/>
      <ul className="desc list-desc">
        <li>Preventive Health Checkup Package</li>
        <li>Chronic Pain Management</li>
        <li>Directly Observed Treatment Short Course (DOTS)</li>
        <li>
          Medical Social Services Including Psychosocial Counseling & Care
        </li>
        <li>Endoscopy-Diagnostic and Therapeutic</li>
        <li>Diet Counseling, Medication Counseling Services</li>
        <li>Family Planning Services</li>
        <li>Mortuary services</li>
      </ul>
    </div>
  </div>`,
    },
    {
      id: 1,
      slug: "director-message",
      desc: `<div className="htmls">
      <div className="html-wrapper">
        <h3 className="heading">Message</h3>
        <br/>
        <div className="desc">
          Dear parents and students, I have great pleasure in thanking you
          for your wise consideration in choosing and admitting your child
          at the Nepal Medical College. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of
          Lorem Ipsum.
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled
          it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          <br />
          <br />
          <strong>Prof. Dr. RRR</strong>
          <br />
          <strong>Director</strong>
        </div>
      </div>
    </div>`,
    },
    {
      id: 2,
      slug: "mission-vision",
      desc: `<div className="htmls">
      <div className="html-wrapper">
        <h3 className="heading">Vision:</h3>
        <br/>
        <div className="desc">
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Lorem
        Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
      <br/>
      <div className="html-wrapper">
        <h3 className="heading">Mission:</h3>
        <br/>
        <div className="desc">
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised
        in the 1960s with the release of Letraset sheets containing Lorem
        Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Lorem
        Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </div>`,
    },
    {
      id: 3,
      slug: "management-team",
      desc: `<div className="htmls">
      <div className="html-wrapper">
        <h3 className="heading">JOURNAL EDITORIAL BOARD</h3>
        <br/>
        <ul className="desc">
          <li>1. Prof Dr Rupesh Mukhia (Chief Editor)</li>
          <li>2. Dr. Rosha Shrestha (Managing Editor)</li>
          <li>3. Prof. Dr Bijendra Raj Raghubanshi (Member)</li>
          <li>4. Dr. Mahipendra Tiwari (Member)</li>
          <li>5. Dr. Saurav Dahal (Member)</li>
          <li>6. Ms. Omi Bajracharya (Member)</li>
          <li>7. Prof Dr Neeti Singh (Epidemiologist)</li>
          <li>8. Mr. Prem Prasad Panta ( Statistician)</li>
        </ul>
      </div>
      <br />
      <div className="html-wrapper">
        <h3 className="heading">IRC BOARD</h3>
        <br/>
        <ul className="desc">
          <li>1. Prof Dr. Nisha Jha, Pharmacology (Chairperson)</li>
          <li>2. Prof Dr Suraj Bajracharya, Clinical Sciences (Member)</li>
          <li>
            3. Prof Dr Milesh Jung Sijapati, Clinical Sciences (Member)
          </li>
          <li>4. Prof Dr Rupesh Mukhia, Clinical Sciences (Member)</li>
          <li>
            5. Prof Dr Srijana Pandey, Behavioral & Social Sciences (Member)
          </li>
          <li>6. Dr Ajaya Kumar Dhakal, Clinical Sciences (Member)</li>
          <li>7. Dr. Gaurav Acharya, Dental Sciences (Member)</li>
          <li>8. Mr. Prem Prasad Panta, Biostatistics (Member)</li>
          <li>9. Mr. Nim Budha Chhetri, Lawyer (Member)</li>
          <li>10. Ms. Sarita Pradhan, Community (Member)</li>
          <li>
            11. Prof Dr. Neeti Singh, Public Health/Epidemiology (Member
            Secretary)
          </li>
        </ul>
        <br />
      </div>
      <div className="html-wrapper">
        <h3 className="heading">INFECTION CONTROL COMMITTEE</h3>
        <br/>
        <ul className="desc">
          <li>
            1. Prof Dr Suraj Bajracharya, Hospital Director& Orthopedic
            Surgeon (Member)
          </li>
          <li>
            2. Dr.Ruchee Manandhar, Associate Professor, Microbiologist
            (Member)
          </li>
          <li>
            3. Dr. Saurav Kumar Singh, Lecturer, Pediatrician (Member)
          </li>
          <li>4. Ms. Bidhya Basnet, Assistant Matron, Nursing (Member)</li>
          <li>5. Ms. Pabitra Dhungana, Incharge, Housekeeping (Member)</li>
          <li>
            6. Ms. Shova Neupane, Infection Control Nursing Incharge
            (Member)
          </li>
          <li>
            7. Prof Dr.Bijendra Raj Raghubanshi, Microbiologist (Member
            Secretary)
          </li>
        </ul>
        <br />
      </div>
      <div className="html-wrapper">
        <h3 className="heading">TUMOR BOARD</h3>
        <br/>
        <ul className="desc">
          <li>
            1. Professor and HOD Dr. Swoyam Prakash Pandit, Department of
            Radiology
          </li>
          <li>
            2. Associate Prof. Dr. Ashish Lakhey, Department of Pathology
          </li>
          <li>
            3. Associate Prof. Dr. Bishal Paudel, Haematology and Oncology
          </li>
          <li>
            4. Dr. Janak Raman Parajuli, Haematology and Oncology - (Member
            Secretary)
          </li>
        </ul>
      </div>
    </div>`,
    },
  ],
  gallery: {
    id: 3,
    slug: "gallery",
    images: [img1, img2, img3, img4, img5, img6],
  },
};
