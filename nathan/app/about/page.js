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
import { getSiteSettings } from "@/lib/api";

export const revalidate = 60;

const page = async () => {
  const siteSettings = await getSiteSettings();

  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="About Me" innitialFontSize={389.8} />
            <Header activePage="2" showBlog={siteSettings?.showBlog} />
          </div>
        </section>
        <About aboutTitle="Who I Am" />
        <Skills />
        <CodingSkills />
        <Experiences />
        <Education />
        {siteSettings?.showTestimonials !== false && <Testimonial />}
        {siteSettings?.showStats !== false && (
          <section className="no-top">
            <div className="container">
              <CounterSection />
            </div>
          </section>
        )}
      </div>
    </NathanLayout>
  );
};
export default page;
