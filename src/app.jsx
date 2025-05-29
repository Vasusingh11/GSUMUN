import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CommitteesPage from './pages/CommitteesPage';
import SchedulePage from './pages/SchedulePage';
import ResourcesPage from './pages/ResourcesPage';
import RegistrationPage from './pages/RegistrationPage';
import DelegateGuide from './pages/delegateguide';
import FacultyGuide from './pages/facultyguidepage';
import RulesProcedure from './pages/rulesprocedurepage';
import RSA from './pages/rsa';
import Venue from './pages/venue';
import FAQ from './pages/faq';
import PositionPaperPage from './pages/positionpaper';
import GSUMUNAboutPage from './pages/about';
import ContactPage from './pages/contact';
import SecretariatPage from './pages/secretariat';
import AdvisoryBoardPage from './pages/advisoryboard';
import TeamPage from './pages/teampage';
// Import other pages as they're created
// import AboutPage from './pages/AboutPage';
// import SecretariatPage from './pages/SecretariatPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="committees" element={<CommitteesPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="resources/delegate" element={<DelegateGuide />} />
          <Route path="resources/faculty" element={<FacultyGuide />} />
          <Route path="resources/rules" element={<RulesProcedure />} />
          <Route path="rsa" element={<RSA />} /> 
          <Route path="venue" element={<Venue />} />
          <Route path="faqs" element={<FAQ />} />
          <Route path="resources/position-papers" element={<PositionPaperPage />} />
          <Route path="about" element={<GSUMUNAboutPage />} />
          <Route path="secretariat" element={<SecretariatPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="advisory-board" element={<AdvisoryBoardPage />} />
          <Route path="team" element={<TeamPage />} />
          {/* Add routes for other pages as they are created */}
          {/* <Route path="about" element={<AboutPage />} /> */}
          {/* <Route path="secretariat" element={<SecretariatPage />} /> */}
          {/* <Route path="advisory-board" element={<AdvisoryBoardPage />} /> */}
          {/* <Route path="contact" element={<ContactPage />} /> */}
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;