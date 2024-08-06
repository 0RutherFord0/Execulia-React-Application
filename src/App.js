import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Landing";
import BlogClassic from "./pages/blog-classic";
import BlogDetails from "./pages/blog-details";
import BlogGrid3Columns from "./pages/blog-grid-3columns";
import BlogGridSidebar from "./pages/blog-grid-sidebar";
import HomeCreativeAgency from "./pages/home-creative-agency.js";
import HomeDigitalAgency from "./pages/home-digital-agency.js";
import HomeMain from "./pages/home-main.js";
import HomeModernStudio from "./pages/home-modern-studio.js";
import HomePersonal from "./pages/home-personal.js";
import Page404 from "./pages/page-404.js";
import PageAbout from "./pages/page-about.js";
import PageContact from "./pages/page-contact.js";
import PageFAQ from "./pages/page-FAQ.js";
import PageServices from "./pages/page-services.js";
import PageServicesDetails from "./pages/page-services-details.js";
import PageTeam from "./pages/page-team.js";
import PageTeamDetails from "./pages/page-team-details.js";
import PortfolioCreative from "./pages/portfolio-creative.js";
import PortfolioCreativeCarousel from "./pages/portfolio-creative-carousel.js";
import PortfolioGallery from "./pages/portfolio-gallery.js";
import PortfolioGrid from "./pages/portfolio-grid.js";
import PortfolioMasonry from "./pages/portfolio-masonry.js";
import ProjectDetails from "./pages/project-details.js";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';

// gsap.registerPlugin(ScrollTrigger);
// gsap.config({ trialWarn: false });
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/blog-classic" element={<BlogClassic />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-grid-3column" element={<BlogGrid3Columns />} />
        <Route path="/blog-grid-sidebar" element={<BlogGridSidebar />} />
        <Route path="/home-creative-agency" element={<HomeCreativeAgency />} />
        <Route path="/home-digital-agency" element={<HomeDigitalAgency />} />
        <Route path="/home-main" element={<HomeMain />} />
        <Route path="/home-modern-studio" element={<HomeModernStudio />} />
        <Route path="/home-personal" element={<HomePersonal />} />
        <Route path="/page-404" element={<Page404 />} />
        <Route path="/page-about" element={<PageAbout />} />
        <Route path="/page-contact" element={<PageContact />} />
        <Route path="/page-FAQ" element={<PageFAQ />} />
        <Route
          path="/page-services-details"
          element={<PageServicesDetails />}
        />
        <Route path="/page-services" element={<PageServices />} />
        <Route path="/page-team" element={<PageTeam />} />
        <Route path="/page-team-details" element={<PageTeamDetails />} />
        <Route path="/portfolio-creative" element={<PortfolioCreative />} />
        <Route
          path="/portfolio-creative-carousel"
          element={<PortfolioCreativeCarousel />}
        />
        <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/portfolio-grid" element={<PortfolioGrid />} />
        <Route path="/portfolio-masonry" element={<PortfolioMasonry />} />
        <Route path="/project-details" element={<ProjectDetails />} />

        {/*        
        {/*
         */}
      </Routes>
    </Router>
  );
}

export default App;
