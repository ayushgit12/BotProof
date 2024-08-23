import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import React from 'react'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import CaptchaTest from './components/Captcha.jsx'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Gallery />
                <Testimonials data={landingPageData.Testimonials} />
              </>
            }
          />
          <Route path="/captcha-test" element={<CaptchaTest />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;