import React from "react";
import { lazy } from "react";
const FloatingLinkBtn = lazy(() => import("../../forAll/FloatingLinkBtn"));

const ContentsColumn = ({
  selectedContentDetail,
  servicesList,
  handleIsSectionBar,
}) => {


  
  const selectedContent = `${
    selectedContentDetail &&
    selectedContentDetail.slugSubLink &&
    selectedContentDetail.slugSubLink.replaceAll("-", " ")
  }`;

  const foundContentObj =
    servicesList &&
    servicesList.find(
      (item) =>
        item.id ===
        Number(
          selectedContentDetail &&
            selectedContentDetail.slugSubLinkId &&
            selectedContentDetail.slugSubLinkId
        )
    );
  const foundContent =
    foundContentObj &&
    foundContentObj.childLink &&
    foundContentObj.childLink.find(
      (item) =>
        item.id ===
        Number(
          selectedContentDetail &&
            selectedContentDetail.slugChildId &&
            selectedContentDetail.slugChildId
        )
    );

  return (
    <div className="contents-column">
      <div className="section-heading">
        <span className="highlight">{selectedContent && selectedContent}</span>
      </div>
      <div className="floating-btn-row">
        <FloatingLinkBtn
          handleIsSectionBar={handleIsSectionBar && handleIsSectionBar}
        />
      </div>
      <div className="contents-wrapper">
        <div
          dangerouslySetInnerHTML={{
            __html: foundContent && foundContent.desc && foundContent.desc,
          }}
        />
        {/* <div className="htmls">
          <h2> Gastroenterology Services </h2>
          <br />
          <img
            src="https://bgapc.com/wp-content/uploads/2021/09/image1-1024x683.jpg"
            alt=""
            // style="width:100%"
          />
          <br />
          <br />

          <div
          // style="
          //   text-indent: 50px;
          //   line-height: 25px;
          //   text-align: justify;"
          >
            Gastroenterology is a specialized field of medicine that focuses on
            the diagnosis and treatment of disorders related to the digestive
            system. Gastroenterologists are highly trained physicians who play a
            crucial role in helping individuals maintain optimal digestive
            health.
          </div>
          <br />
          <br />
          <div>
            <h2>Key Points to Include:</h2>
            <br />
            <ol
            // style="
            // marginLeft: 1em;
            // text-align: justify"
            >
              <li>
                <strong>Comprehensive Digestive Care: </strong>{" "}
                Gastroenterologists provide comprehensive care for a wide range
                of digestive system disorders. Their expertise covers conditions
                such as gastroesophageal reflux disease (GERD), irritable bowel
                syndrome (IBS), inflammatory bowel disease (IBD), and more.
              </li>
              <br />
              <li>
                <strong>Diagnostic Expertise: </strong> Gastroenterologists are
                skilled in utilizing diagnostic procedures to identify and
                understand digestive issues. Common diagnostic tools include
                endoscopy, colonoscopy, and imaging studies.
              </li>
              <br />
              <li>
                <strong>Treatment Plans: </strong> Each patient's digestive
                health needs are unique. Gastroenterologists create personalized
                treatment plans that may include dietary recommendations,
                medication, lifestyle changes, or surgical intervention when
                necessary.
              </li>
              <br />
              <li>
                <strong>Endoscopic Procedures: </strong> Gastroenterologists are
                proficient in performing endoscopic procedures to diagnose and
                treat digestive conditions. These procedures can be used for
                biopsy, polyp removal, and the treatment of conditions like
                Barrett's esophagus.
              </li>
              <br />
              <li>
                <strong>Liver Care: </strong> Gastroenterologists often manage
                liver-related conditions such as hepatitis, cirrhosis, and fatty
                liver disease. They monitor liver function and provide guidance
                on lifestyle changes to improve liver health.
              </li>
              <br />
              <li>
                <strong>Colon Cancer Screening: </strong> Gastroenterologists
                play a vital role in colon cancer prevention by performing
                colonoscopies to detect polyps and early-stage cancer. Timely
                screening can save lives through early intervention.
              </li>
              <br />
              <li>
                <strong>Inflammatory Bowel Disease (IBD): </strong>{" "}
                Gastroenterologists specialize in the management of IBD,
                including Crohn's disease and ulcerative colitis. They work to
                control symptoms, prevent complications, and enhance the quality
                of life for patients.
              </li>
              <br />
              <li>
                <strong>Nutritional Guidance: </strong> Gastroenterologists may
                collaborate with registered dietitians to provide nutritional
                guidance tailored to the specific needs of patients with
                digestive disorders.
              </li>
              <br />
              <li>
                <strong>Motility Disorders: </strong> They diagnose and treat
                motility disorders that affect the movement and function of the
                digestive tract, such as gastroparesis or achalasia.
              </li>
              <br />
              <li>
                <strong>Minimally Invasive Surgery: </strong> In cases where
                surgery is required, gastroenterologists may work with surgeons
                to perform minimally invasive procedures, reducing recovery time
                and discomfort.
              </li>
              <br />
              <li>
                <strong>Gastrointestinal Bleeding: </strong> Gastroenterologists
                are experts in diagnosing the source of gastrointestinal
                bleeding and providing appropriate treatment, which may include
                endoscopic interventions.
              </li>
              <br />
              <li>
                <strong>Collaborative Care: </strong> They often collaborate
                with other specialists, including surgeons, radiologists, and
                oncologists, to ensure comprehensive care for patients with
                complex digestive conditions.
              </li>
              <br />
              <li>
                <strong>Patient Education: </strong> Gastroenterologists educate
                patients about their conditions, treatment options, and the
                importance of preventive measures, such as regular screenings
                and a healthy lifestyle.
              </li>{" "}
              <br />
              <li>
                <strong>Research and Innovation: </strong> The field of
                gastroenterology is continually advancing. Gastroenterologists
                are involved in research to develop new treatments and improve
                existing ones.
              </li>
            </ol>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContentsColumn;
ContentsColumn.defaultProps = {
  servicesList: [
    {
      id: 0,
      title: "Medical & Super Speciality Services",
      navigateTo: "medical-and-super-speciality-services",
      childLink: [
        {
          id: 0,
          text: "Internal Medicine",
          navigateTo: "internal-medicine",
          desc: ` <div className="htmls">
          <h2>Internal Medicine Services</h2>
          <br/>
          <img
            src='https://sa1s3optim.patientpop.com/assets/images/provider/photos/2533805.jpg'
            alt=""
            style='width:100%'
          />
          <br />
          <br />

          <div
            style='
              text-indent: 50px;
              line-height: 25px;
              text-align: justify;',
            
          >
          
            Internal Medicine is a specialized branch of medical science that
            deals with the prevention, diagnosis, and treatment of a wide range
            of adult diseases. Internists, often referred to as "doctors for
            adults," are highly trained medical professionals who possess a deep
            understanding of the complexities of the human body.
          </div>
          <br />
          <br />
          <div>
            <h2>Some of our methods are:</h2>
            <br />
            <ol
              style='
              marginLeft: 1em;
              text-align: justify;',
            >
              <li>
                <strong>Comprehensive Care: </strong> Internal Medicine
                physicians are known for their comprehensive approach to patient
                care. They focus on managing and treating a variety of medical
                conditions, from common illnesses to complex diseases.
              </li>
              <br />
              <li>
                <strong>Diagnosis and Evaluation: </strong> Internists excel in
                diagnosing conditions through a combination of patient history,
                physical examinations, and advanced diagnostic tools. They are
                skilled in identifying the underlying causes of health issues.
              </li>
              <br />
              <li>
                <strong>Chronic Disease Management: </strong> Many adults suffer
                from chronic conditions such as diabetes, hypertension, and
                heart disease. Internal Medicine specialists play a crucial role
                in managing and controlling these conditions to improve
                patients' quality of life.
              </li>
              <br />
              <li>
                <strong>Preventive Care: </strong> Internists emphasize the
                importance of preventive healthcare. They work with patients to
                create personalized wellness plans, administer vaccinations, and
                offer lifestyle guidance to reduce the risk of disease.
              </li>
              <br />
              <li>
                <strong>Collaborative Approach: </strong> Internal Medicine
                often involves collaboration with other medical specialists when
                needed. This ensures that patients receive the most
                comprehensive and coordinated care possible.
              </li>
              <br />
              <li>
                <strong>Adult Immunizations: </strong> Internal Medicine
                physicians are responsible for administering adult vaccines,
                including annual flu shots and vaccinations for preventable
                diseases.
              </li>
              <br />
              <li>
                <strong>Inpatient and Outpatient Care: </strong> Internists can
                provide care in various settings, including hospitals and
                outpatient clinics. They are equipped to manage both acute
                illnesses and chronic conditions.
              </li>
              <br />
              <li>
                <strong>Continual Medical Education: </strong> Internal Medicine
                is a dynamic field, and internists are committed to ongoing
                education and staying updated on the latest medical advancements
                and treatment options.
              </li>
              <br />
              <li>
                <strong>Geriatric Care: </strong> Internal Medicine specialists
                often care for older adults and are knowledgeable about the
                unique healthcare needs of this population, including issues
                related to aging and chronic conditions.
              </li>
              <br />
              <li>
                <strong>Patient-Centered Care: </strong> Internists prioritize
                patient well-being and focus on building strong doctor-patient
                relationships. They take the time to listen to patients'
                concerns and provide individualized treatment plans.
              </li>
            </ol>
          </div>
        </div>`,
        },
        {
          id: 1,
          text: "Psychiatry (Mental Health)",
          navigateTo: "psychiatry",
          desc: `   <div className="htmls">
          <h2>Psychiatry (Mental Health) Services </h2>
          <br />
          <img
            src="https://www.hsph.harvard.edu/ecpe/wp-content/uploads/sites/2020/2022/02/Cover-Image-for-MHF-article.png"
            alt=""
            style='max-width:100%'
          />
          <br />
          <br />

          <div
          style='
          text-indent: 50px;
          line-height: 25px;
          text-align: justify;',
          >
            Psychiatry, a critical branch of healthcare, focuses on
            understanding, diagnosing, and treating mental health disorders.
            Psychiatrists are highly trained medical professionals who
            specialize in helping individuals overcome emotional, psychological,
            and behavioral challenges.
          </div>
          <br />
          <br />
          <div>
            <h2>Key Points to Include:</h2>
            <br />
            <ol
            style='
            marginLeft: 1em;
            text-align: justify;',
            >
              <li>
                <strong>Comprehensive Mental Health Care: </strong>{" "}
                Psychiatrists offer comprehensive mental health care services,
                addressing a wide range of emotional and psychological issues.
                Their expertise covers conditions such as depression, anxiety,
                bipolar disorder, schizophrenia, and more.
              </li>
              <br />
              <li>
                <strong>Diagnosis and Assessment: </strong> Psychiatrists are
                skilled in conducting thorough assessments to diagnose mental
                health disorders accurately. They use diagnostic criteria,
                patient interviews, and psychological evaluations to formulate
                treatment plans.
              </li>
              <br />
              <li>
                <strong>Individualized Treatment: </strong> Each individual's
                mental health journey is unique. Psychiatrists develop
                personalized treatment plans tailored to the specific needs of
                their patients, which may include therapy, medication, or a
                combination of both.
              </li>
              <br />
              <li>
                <strong>Therapeutic Modalities: </strong> Psychiatrists employ
                various therapeutic modalities to help patients manage their
                mental health conditions. These can include cognitive-behavioral
                therapy (CBT), talk therapy, group therapy, and more.
              </li>
              <br />
              <li>
                <strong>Medication Management: </strong> In cases where
                medication is necessary, psychiatrists have the expertise to
                prescribe and manage psychotropic medications. They monitor
                patients closely to ensure the medication's effectiveness and
                safety.
              </li>
              <br />
              <li>
                <strong>Crisis Intervention: </strong> Psychiatrists are
                equipped to handle crisis situations, providing immediate
                support and intervention for individuals experiencing severe
                mental health crises or emergencies.
              </li>
              <br />
              <li>
                <strong>Child and Adolescent Psychiatry: </strong> Specialized
                child and adolescent psychiatrists focus on the unique mental
                health needs of young patients. They address issues like ADHD,
                autism spectrum disorders, and adolescent behavioral problems.
              </li>
              <br />
              <li>
                <strong>Addiction Psychiatry: </strong> Some psychiatrists
                specialize in addiction psychiatry, helping individuals overcome
                substance use disorders and co-occurring mental health issues.
              </li>
              <br />
              <li>
                <strong>Telepsychiatry: </strong> In an increasingly digital
                world, telepsychiatry services allow patients to access mental
                health care remotely, ensuring that individuals can receive help
                even if they cannot attend in-person appointments.
              </li>
              <br />
              <li>
                <strong>Stigma Reduction: </strong> Psychiatrists and mental
                health professionals play a crucial role in reducing the stigma
                surrounding mental health issues. They advocate for open
                conversations about mental health to promote understanding and
                empathy.
              </li>
              <br />
              <li>
                <strong>Community Support: </strong> Many mental health
                professionals work in collaboration with community organizations
                and support networks to provide holistic care for individuals
                with mental health challenges.
              </li>
              <br />
              <li>
                <strong>Research and Innovation: </strong> Psychiatry is a field
                that continually evolves. Psychiatrists are often involved in
                research and clinical trials to discover new treatments and
                interventions for mental health disorders.
              </li>
              <br />
              <li>
                <strong>Patient Education: </strong> Psychiatrists educate their
                patients and their families about mental health conditions,
                treatment options, and strategies for coping with mental health
                challenges.
              </li>
            </ol>
          </div>
        </div>`,
        },
        {
          id: 2,
          text: "Gastroenterology",
          navigateTo: "gastroenterology",
          desc: `  <div className="htmls">
          <h2> Gastroenterology Services </h2>
          <br />
          <img
            src="https://kauveryhospital.com/blog/wp-content/uploads/2021/02/dreamstime_xxl_107997601.jpg"
            alt=""
            style='width: 100%'
          />
          <br />
          <br />

          <div
          style='
          text-indent: 50px;
          line-height: 25px;
          text-align: justify;',
          >
            Gastroenterology is a specialized field of medicine that focuses on
            the diagnosis and treatment of disorders related to the digestive
            system. Gastroenterologists are highly trained physicians who play a
            crucial role in helping individuals maintain optimal digestive
            health.
          </div>
          <br />
          <br />
          <div>
            <h2>Key Points to Include:</h2>
            <br />
            <ol
            style='
            marginLeft: 1em;
            text-align: justify;',
            >
              <li>
                <strong>Comprehensive Digestive Care: </strong>{" "}
                Gastroenterologists provide comprehensive care for a wide range
                of digestive system disorders. Their expertise covers conditions
                such as gastroesophageal reflux disease (GERD), irritable bowel
                syndrome (IBS), inflammatory bowel disease (IBD), and more.
              </li>
              <br />
              <li>
                <strong>Diagnostic Expertise: </strong> Gastroenterologists are
                skilled in utilizing diagnostic procedures to identify and
                understand digestive issues. Common diagnostic tools include
                endoscopy, colonoscopy, and imaging studies.
              </li>
              <br />
              <li>
                <strong>Treatment Plans: </strong> Each patient's digestive
                health needs are unique. Gastroenterologists create personalized
                treatment plans that may include dietary recommendations,
                medication, lifestyle changes, or surgical intervention when
                necessary.
              </li>
              <br />
              <li>
                <strong>Endoscopic Procedures: </strong> Gastroenterologists are
                proficient in performing endoscopic procedures to diagnose and
                treat digestive conditions. These procedures can be used for
                biopsy, polyp removal, and the treatment of conditions like
                Barrett's esophagus.
              </li>
              <br />
              <li>
                <strong>Liver Care: </strong> Gastroenterologists often manage
                liver-related conditions such as hepatitis, cirrhosis, and fatty
                liver disease. They monitor liver function and provide guidance
                on lifestyle changes to improve liver health.
              </li>
              <br />
              <li>
                <strong>Colon Cancer Screening: </strong> Gastroenterologists
                play a vital role in colon cancer prevention by performing
                colonoscopies to detect polyps and early-stage cancer. Timely
                screening can save lives through early intervention.
              </li>
              <br />
              <li>
                <strong>Inflammatory Bowel Disease (IBD): </strong>{" "}
                Gastroenterologists specialize in the management of IBD,
                including Crohn's disease and ulcerative colitis. They work to
                control symptoms, prevent complications, and enhance the quality
                of life for patients.
              </li>
              <br />
              <li>
                <strong>Nutritional Guidance: </strong> Gastroenterologists may
                collaborate with registered dietitians to provide nutritional
                guidance tailored to the specific needs of patients with
                digestive disorders.
              </li>
              <br />
              <li>
                <strong>Motility Disorders: </strong> They diagnose and treat
                motility disorders that affect the movement and function of the
                digestive tract, such as gastroparesis or achalasia.
              </li>
              <br />
              <li>
                <strong>Minimally Invasive Surgery: </strong> In cases where
                surgery is required, gastroenterologists may work with surgeons
                to perform minimally invasive procedures, reducing recovery time
                and discomfort.
              </li>
              <br />
              <li>
                <strong>Gastrointestinal Bleeding: </strong> Gastroenterologists
                are experts in diagnosing the source of gastrointestinal
                bleeding and providing appropriate treatment, which may include
                endoscopic interventions.
              </li>
              <br />
              <li>
                <strong>Collaborative Care: </strong> They often collaborate
                with other specialists, including surgeons, radiologists, and
                oncologists, to ensure comprehensive care for patients with
                complex digestive conditions.
              </li>
              <br />
              <li>
                <strong>Patient Education: </strong> Gastroenterologists educate
                patients about their conditions, treatment options, and the
                importance of preventive measures, such as regular screenings
                and a healthy lifestyle.
              </li>{" "}
              <br />
              <li>
                <strong>Research and Innovation: </strong> The field of
                gastroenterology is continually advancing. Gastroenterologists
                are involved in research to develop new treatments and improve
                existing ones.
              </li>
            </ol>
          </div>
        </div>`,
        },
        {
          id: 3,
          text: "Paediatric & Neonatology",
          navigateTo: "paediatric-and-neonatology",
        },
        {
          id: 4,
          text: "Dermatology (Skin with Laser Service)",
          navigateTo: "dermatology",
        },
        {
          id: 5,
          text: "24 Hours Emergency",
          navigateTo: "emergency",
        },
      ],
    },
  ],
  // doctorsList: [
  //   {
  //     id: 0,
  //     name: "Prof. Dr. John Sharma",
  //     slug: "john-sharma",
  //     image_link: img0,
  //   },
  //   {
  //     id: 1,
  //     name: "Prof. Dr. Meera Chy",
  //     slug: "meera-chy",
  //     image_link: img1,
  //   },
  //   {
  //     id: 2,
  //     name: "Prof. Dr. Robin Hood",
  //     slug: "robin-hood",
  //     image_link: img2,
  //   },
  //   {
  //     id: 3,
  //     name: "Prof. Dr. Gita Patel",
  //     slug: "gita-patel",
  //     image_link: img3,
  //   },
  //   {
  //     id: 4,
  //     name: "Prof. Dr. Rakesh Subbha",
  //     slug: "rakesh-subbha",
  //     image_link: img4,
  //   },
  //   {
  //     id: 5,
  //     name: "Prof. Dr. Indira Shrestha",
  //     slug: "indira-shrestha",
  //     image_link: img5,
  //   },
  //   {
  //     id: 6,
  //     name: "Prof. Dr. John Sharma",
  //     slug: "john-sharma",
  //     image_link: img0,
  //   },
  //   {
  //     id: 7,
  //     name: "Prof. Dr. Meera Chy",
  //     slug: "meera-chy",
  //     image_link: img1,
  //   },
  //   {
  //     id: 8,
  //     name: "Prof. Dr. Robin Hood",
  //     slug: "robin-hood",
  //     image_link: img2,
  //   },
  //   {
  //     id: 9,
  //     name: "Prof. Dr. Gita Patel",
  //     slug: "gita-patel",
  //     image_link: img3,
  //   },
  //   {
  //     id: 10,
  //     name: "Prof. Dr. Rakesh Subbha",
  //     slug: "rakesh-subbha",
  //     image_link: img4,
  //   },
  //   {
  //     id: 11,
  //     name: "Prof. Dr. Indira Shrestha",
  //     slug: "indira-shrestha",
  //     image_link: img5,
  //   },
  // ],
};
