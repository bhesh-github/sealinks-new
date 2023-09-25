import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const ScrollToTop = lazy(() => import("./components/forAll/ScrollToTop"));

const Header = lazy(() => import("./components/main/header/Header"));
const Footer = lazy(() => import("./components/main/Footer"));
const FallbackIndicator = lazy(() =>
import("./components/forAll/fallbackIndicator/FallbackIndicator")
);
const NotFoundPage = lazy(() =>
  import("./components/pages/notfoundPage/NotFoundPage")
);

const Home = lazy(() => import("./components/pages/home/Home"));
const Departments = lazy(() =>
  import("./components/pages/departments/Department")
);
const DoctorAppointment = lazy(() =>
  import("./components/pages/departments/doctorAppointment/DoctorAppointment")
);
const Services = lazy(() => import("./components/pages/services/Services"));
const Activities = lazy(() =>
  import("./components/pages/activities/Activities")
);
const ActivityContentPage = lazy(() =>
  import(
    "./components/pages/activities/activityContentPage/ActivityContentPage"
  )
);
const Research = lazy(() => import("./components/pages/research/Research"));
const Academics = lazy(() => import("./components/pages/academics/Academics"));

const NewsAndNotice = lazy(() =>
  import("./components/pages/newsAndNotice/NewsAndNotice")
);

const AboutUs = lazy(() => import("./components/pages/about/AboutUs"));
const Career = lazy(() => import("./components/pages/career/Career"));
const CareerDetail = lazy(() =>
  import("./components/pages/career/careerDetail/CareerDetail")
);
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const VideoPage = lazy(() =>
  import("./components/pages/videosPage/VideosPage")
);


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback=<FallbackIndicator />>
          <ScrollToTop />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route
                path="/departments/:slugDepartment/:slugSubLinkId/:slugChildId"
                element={<Departments />}
              />
              <Route
                path="/doctor-appointment/:name"
                element={<DoctorAppointment />}
              />
              <Route
                path="/services/:slugSubLink/:slugSubLinkId/:slugChildId"
                element={<Services />}
              />
              <Route path="/activities" element={<Activities />} />
              <Route
                path="/activity-content"
                element={<ActivityContentPage />}
              />

              <Route path="/research" element={<Research />} />
              <Route
                path="/academics/:slugSubLink/:slugSubLinkId/:slugChildId"
                element={<Academics />}
              />
              <Route path="/news-and-notice" element={<NewsAndNotice />} />

              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/career" element={<Career />} />
              <Route path="/career/detail" element={<CareerDetail />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
