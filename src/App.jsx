import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Education,
  Experience,
  Collaborations,
  Achievements,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import LazyMount from "./components/LazyMount";
import { testimonials } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Collaborations />
        <Tech />
        <Works />
        <Achievements />
        {testimonials.length > 0 && <Feedbacks />}
        <div className='relative z-0'>
          <Contact />
          <LazyMount rootMargin='600px'>
            <StarsCanvas />
          </LazyMount>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
