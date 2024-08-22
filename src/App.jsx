import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const Wrapper = styled.div`
  background: hsla(0, 8%, 97%, 1);

  background: radial-gradient(
    circle,
    hsla(0, 8%, 97%, 1) 38%,
    hsla(244, 65%, 95%, 1) 65%,
    hsla(235, 100%, 93%, 1) 82%,
    hsla(226, 90%, 88%, 1) 100%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(0, 8%, 97%, 1) 38%,
    hsla(244, 65%, 95%, 1) 65%,
    hsla(235, 100%, 93%, 1) 82%,
    hsla(226, 90%, 88%, 1) 100%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(0, 8%, 97%, 1) 38%,
    hsla(244, 65%, 95%, 1) 65%,
    hsla(235, 100%, 93%, 1) 82%,
    hsla(226, 90%, 88%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F9F8F8", endColorstr="#EDECFB", GradientType=1 );
  width: 100vw;
  height: 100vh;
  z-index: -2;
  top: 0px;
`;

export default function App() {
  return (
    <div className="overflow-x-hidden antialiased text-black selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <Wrapper></Wrapper>
      </div>

      <div className="mx-auto container px-8">
        <Navbar />
        <Hero />
        <Recommended />
        <Services />
        <Testimonials />
        <AboutMe />
        <Contact />
        {/* <Technologies />
        <Experience /> */}
      </div>
    </div>
  );
}
