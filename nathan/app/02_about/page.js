import About from "@/components/About";
import CodingSkills from "@/components/CodingSkills";
import CounterSection from "@/components/CounterSection";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import FitParentTitle from "@/components/FitParentTitle";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
const page = () => {
  return (
    <NathanLayout
      darkMode={false}
      bodyClass="light-scheme"
      rootElements={rootElements.home2}
    >
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="About Me" innitialFontSize={389.8} />
            <Header menus={menus.home2} activePage="2" />
          </div>
        </section>
        <About aboutTitle="Who I Am" />
        <Skills />
        <CodingSkills />
        <Experiences />
        <Education />
        <Testimonial />
        <section className="no-top">
          <div className="container">
            <CounterSection />
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};
export default page;
