import React from "react";
import directorPhoto from "../../../../images/home/messageFromDirector/directorPhoto.png";
import bholaRijal from "../../../../images/home/messageFromDirector/bholaRijal.jpg";
import jahangirAnsari from "../../../../images/home/messageFromDirector/jahangirAnsari.jpg";
import sabiha from "../../../../images/home/messageFromDirector/sabiha.jpg";
import basruddinAnsari from "../../../../images/home/messageFromDirector/basruddinAnsari.jpg";

import Button from "@mui/material/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import MessageCarousel from "./MessageCarousel";

const MessageFromDirector = ({ carouselData }) => {
  const carouselCard =
    carouselData &&
    carouselData.map((item) => {
      const { id = "", image_link = "", message = "" } = item;
      return (
        <div className="message-card" key={id}>
          <div className="heading">
            <span className="highlight">Message from</span> Director
          </div>
          <div className="content-section">
            <div className="director-img-wrapper">
              <img
                src={image_link && image_link}
                alt=""
                className="director-img"
              />
            </div>
            <span
              className="messages"
              dangerouslySetInnerHTML={{
                __html: message && message,
              }}
            />
          </div>
        </div>
      );
    });
  return (
    <div className="message-from-director">
      <div className="inner">
        <MessageCarousel cardSlide={carouselCard} />
      </div>
    </div>
  );
};

export default MessageFromDirector;
MessageFromDirector.defaultProps = {
  carouselData: [
    {
      id: 0,
      image_link: basruddinAnsari,
      message:
        "<span> Nepal Medical College is a premier institute of Nepal offering undergraduate, post graduate & super specialty medical education, with a strong emphasis in the medical sciences, dental sciences, nursing sciences and allied health sciences.<br/><br/>At NMCTH, we educate young aspiring minds into complete medical professional. We nurture and groom students to make them capable of delivering despite unforeseen medical challenges of a highly competitive world. Apart from imparting knowledge, understanding, skills, and critical thinking, we enable them to become architects of the future medical profession in Nepal. We feel satisfied in providing ace medical professionals, steeped in ethical values and modern outlook, to Nepal, India and the world. <br/><br/>I am honored to step into the educational leadership of NMCTH.  As it Managing Director, I ensure to maintain the tradition of strong, insightful, and forward-thinking leadership of my predecessors.<br/>While the challenges and research opportunities in the future will be decidedly different from those faced by the College previous leaders, but the principles of dedication to outstanding high-impact science, stakeholder participation, accountability, and transparency in the decision-making process will guide my vision for the College.<br/>MD Basruddin Ansari<br/>Managing Director<br/>Nepal Medical College<br/>Attarkhel, Gokarneshowr,Kathmandu<br/>Nepal</span>",
    },
    {
      id: 1,
      image_link: sabiha,
      message:
        "<span > Nepal Medical College (NMCTH) welcomes you to the abode of immense opportunities! <br /><br />As the forefront of providing professional medical education in the country, NMCTH carries the rich legacy of 27 years of being the leading private sector medical institution in Nepal. With dedicated and skilled faculty, excellent infrastructure, library facilities, museums, laboratories and skill labs, that provide hands-on experience to the students, the institution has been attracting numerous students from India as well as from many other countries of the world. The students who have graduated from this institution have been successfully practicing medicine in USA, UK, Middle East and other European countries. <br /> <br /> Established in 1996 with the initiatives of some eminent Nepalese professionals, since then this institution has been growing gradually and now, we have MBBS, BDS, MD/MS, BSc Nursing and DM courses running successfully here. We all feel proud for what we have achieved in the past few years and what the institute continues to achieve on the daily basis. <br /><br />Teaching hospital is equipped with latest medical equipment & technologies. Its corridors are thronged by patients. The strength of NMCTH lies not in numbers, but in availability under one roof of the best team of medical and surgical experts, state-of-the-art equipment, and our capacity to rise to the occasion to meet diagnostic or public health challenges. <br /> <br /> We are committed to the teaching mission and comprehensive development of the competent physicians in this challenging and ever-changing healthcare environment. <br /> <br /> I encourage people to visit us in person. We hope that you will find something contributive to advance in your professional career within the timeframe suiting your professional commitments. NMCTH transform a student into a competent medical professional fully ‘AWAKENED AND INSPIRED ONLY TO DO BIGGER’ in furtherance of life. <br /> <br /> Dr. Sabiha Yashmine <br /> Director <br /> Nepal Medical College <br /> Attarkhel, Gokarneshowr, Kathmandu <br /> Nepal</span>",
    },
    {
      id: 2,
      image_link: jahangirAnsari,
      message:
        "<span>Welcome to Nepal Medical College , a renowned institution dedicated to excellence in medical education and patient care. As the Director, I am proud to lead a team of passionate educators, skilled practitioners, and dedicated staff who are committed to shaping the future of healthcare. <br /> <br /> Our institution stands as a beacon of knowledge, innovation, and compassion in the medical field. With a state-of-the-art hospital and a diverse range of specialized departments, we provide students with hands-on learning experiences that prepare them for the dynamic challenges of modern medicine. <br /> <br /> At Nepal Medical College Name, we believe in nurturing not only medical expertise but also strong values and ethics. Our holistic approach ensures that our graduates not only excel in their medical careers but also contribute positively to society. <br /> <br /> Whether you're a prospective student, a patient seeking top-notch care, or a collaborator in the medical community, we invite you to explore the wealth of opportunities and resources that Nepal Medical College has to offer. <br /> <br /> Thank you for choosing Nepal Medical College , where education, innovation, and healing converge. <br /><br />Warm regards, <br />Jahangir Ansari <br />Director, Nepal Medical College</span>",
    },
    {
      id: 3,
      image_link: bholaRijal,
      message:
        "<span>I welcome you to Nepal Medical College (NMC), an institution that imparts quality medical education. Our students get an overall experience that makes them doctors of high quality and integrity. NMC is committed to produce doctors who understand the needs of Nepal. <br /><br />We believe in the principles of hard work, for which there is no compromise. NMC is committed to the students, and every effort will be made to make them outstanding professionals, who may treat us someday! However, this is not possible without the commitment of the students and guardians. Sincerity and hard work is of paramount importance in being a successful, competent doctor in the future. Nepal is a multicultural country and we have students from different cultural, ethnic and socioeconomic backgrounds. Nevertheless, our institution gives every student equal opportunities to excel without any form of partiality. <br /> <br /> I wholeheartedly support the effort of our staff and faculty in the growth of the institution, and I am proud of them. Goals are achieved with the combined commitment of our staff, faculty and management. The students must also accompany us, initially following us, but then walking by our side. The students must fulfill the desires of the faculty, which will help them graduate as competent doctors. Our institution has diversified from the MBBS program, and now we have our own postgraduate (MD/MS), super-specialty (DM). With our diversification programme we have now introduced BDS and B.Sc. Nursing as alternative carrier paths for those wishing to pursue Dental Surgery and Nursing as a career. We aim to make NMC a centre of academic excellence, and I am confident our students will support us. They must not only achieve academically, but should excel in extra-curricular activities, so as to glorify their own names and that of the institution. <br /> <br />I wish all our students the best of luck and God Bless. <br /> <br /> Dr. Bhola Prasad Rijal, <br /> Chairman <br />NMC</span>",
    },
  ],
};
