import React from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
// import LandingPageCoklat from './pages/LandingPageCoklat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        {/* <Route path="/landing_page_pmb" exact element={<LandingPage />} /> */}
        {/* <Route path="/landing_page_pmb" exact element={<LandingPageCoklat />} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
        {/* <Route path="*" element={<Navigate replace to="/landing_page_pmb" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

