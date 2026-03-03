import About from "@/components/About";
import CodingSkills from "@/components/CodingSkills";
import CounterSection from "@/components/CounterSection";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import FitParentTitle from "@/components/FitParentTitle";
import Testimonial from "@/components/Testimonial";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
const page = () => {
  const skillsData = [
    { name: "Bridal Makeup", value: "85%" },
    { name: "Photoshoot Makeup", value: "70%" },
    { name: "Special Event Makeup", value: "82%" },
    { name: "Hair Extensions", value: "62%" },
    { name: "Creative Hair Styling", value: "90%" },
    { name: "Eyelash Extensions", value: "85%" },
  ];
  const educationData = [
    {
      year: "2018",
      degree: "Masterclass in Bridal Makeup",
      school: "Pat McGrath Labs",
    },
    {
      year: "2014",
      degree: "Bachelor of Arts in Fine Arts",
      school: "University of California",
    },
    {
      year: "2011",
      degree: "Certificate in Advanced Special Effects Makeup",
      school: "Cinema Makeup School",
    },
  ];
  const experiencesData = [
    {
      period: "2022 – Present",
      title: "Lead Makeup Artist",
      company: "Bella Beauty Studio",
    },
    {
      period: "2018 - 2022",
      title: "Senior Makeup Artist",
      company: "Lovely Productions",
    },
    {
      period: "2016 - 2018",
      title: "Makeup Artist Assistant",
      company: "Glamour Artistry",
    },
  ];
  return (
    <NathanLayout
      bodyClass="home-3"
      rootElements={rootElements.home3}
      darkMode={false}
    >
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <div className="relative">
              <FitParentTitle
                title="About Me"
                innitialFontSize={389.8}
                subtitle={"I'm Selena"}
                subtitleClasses="abs abs-middle end-0 bg-color-1 text-white p-3 fs-40 text-uppercase xs-hide wow fadeIn animated"
              />
            </div>
            <Header activePage="2" menus={menus.home3} />
          </div>
        </section>
        <About aboutTitle="Who I Am" variant="variant2" />
        <CodingSkills skills={skillsData} />
        <Experiences variant={2} experiencesData={experiencesData} />
        <Education educationData={educationData} variant={2} />
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
