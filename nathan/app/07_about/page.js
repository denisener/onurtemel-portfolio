import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus } from "@/utility/data";

const page = () => {
  const designTools = [
    { name: "Figma", delay: ".4s" },
    { name: "Photoshop", delay: ".5s" },
    { name: "Sketch", delay: ".6s" },
    { name: "Adobe XD", delay: ".7s" },
  ];

  const experiences = [
    {
      year: "2022 – Present",
      title: "Lead Website Designer",
      company: "Tech Solutions Inc",
      delay: ".4s",
    },
    {
      year: "2018 - 2022",
      title: "Mid-Level Website Designer",
      company: "Creativo Web Agency",
      delay: ".5s",
    },
    {
      year: "2016 - 2018",
      title: "Junior Website Designer",
      company: "Rocket Web Services",
      delay: ".6s",
    },
  ];

  const codingSkills = [
    { skill: "HTML", value: "80%" },
    { skill: "CSS", value: "70%" },
    { skill: "BOOTSTRAP", value: "82%" },
    { skill: "JAVASCRIPT", value: "62%" },
    { skill: "PHP", value: "90%" },
    { skill: "REACT", value: "85%" },
  ];

  const education = [
    {
      year: "2018",
      title: "Master in Design",
      school: "New York University",
      delay: ".4s",
    },
    {
      year: "2014",
      title: "Bachelor of Arts",
      school: "University of London",
      delay: ".5s",
    },
    {
      year: "2011",
      title: "Artist of College",
      school: "University of Sydney",
      delay: ".6s",
    },
  ];

  return (
    <NathanLayout bodyClass="home-7" darkMode={false}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <Header
                  menus={menus.home7}
                  activePage={2}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb title="About Me" subtitle="Available for Work" style={2} />
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-xl-6">
                <div
                  className="relative jarallax auto-height rounded-1 overflow-hidden wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <img
                    src="images/misc/4.webp"
                    className="jarallax-img"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="relative rounded-1 overflow-hidden p-lg-5 p-4 pb-5 wow bg-color h-100 fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="align-middle">
                    <div className="subtitle">About Me</div>
                    <h2 className="pb-4">
                      Transforming your vision into a dynamic web experience
                      through meticulously crafted designs, intuitive user
                      interfaces, and robust functionality.
                    </h2>
                  </div>
                  <div className="abs bottom-0 text-dark fs-20 pb-5">
                    <div className="d-inline fw-600 me-5">
                      <i className="icofont-phone me-2" />
                      +1 255 466 100
                    </div>
                    <div className="d-inline fw-600">
                      <i className="icofont-envelope me-2" />
                      +contact@iamnathan.com
                    </div>
                  </div>
                </div>
              </div>
              {[
                { title: "Hours of Works", value: 8240, delay: ".0s" },
                { title: "Projects Done", value: 315, delay: ".2s" },
                { title: "Satisfied Customers", value: 250, delay: ".4s" },
                { title: "Awards Winning", value: 32, delay: ".6s" },
              ].map((item, index) => (
                <div key={index} className="col-md-3 col-sm-6 mb-sm-30">
                  <div
                    className="de_count bg-light py-4 rounded-1 text-center fs-15 wow fadeInRight"
                    data-wow-delay={item.delay}
                  >
                    <h3 className="fs-48 mb-1">
                      <span
                        className="timer"
                        data-to={item.value}
                        data-speed={3000}
                      >
                        <Counter end={item.value} duration={3000} />
                      </span>
                    </h3>
                    <div className="fs-15">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4 justify-content-center">
              <div className="col-xl-8">
                <div className="relative fadeInUp" data-wow-delay=".6s">
                  <div className="text-center">
                    <h2>Who I Am</h2>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <p>
                        Hi there! I'm Nathan, a web designer with a passion for
                        creating exceptional digital experiences. With over 15
                        years in the industry, I have skills in designing
                        websites that are not only visually appealing but also
                        functional and user-friendly.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <p>
                        I specialize in crafting bespoke websites using the
                        latest technologies and design trends, including HTML5,
                        CSS3, JavaScript, and popular content management systems
                        like WordPress, Joomla, and Shopify.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-single" />
            <div className="row g-4">
              {designTools.map((tool, index) => (
                <div
                  key={index}
                  className="col-md-3 rounded-1 wow fadeInRight"
                  data-wow-delay={tool.delay}
                >
                  <div className="text-center">
                    <img
                      src={`images/logo/${tool.name.toLowerCase()}.webp`}
                      className="w-80px mb-3"
                      alt="image"
                    />
                    <h4>{tool.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-xl-3">
                <div className="relative rounded-1 overflow-hidden p-lg-5 p-4 wow bg-color h-100 fadeInUp">
                  <h3 className="fs-32">Experiences</h3>
                </div>
              </div>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="col-md-3 text-center wow fadeInRight"
                  data-wow-delay={exp.delay}
                >
                  <div className="p-4 py-lg-5 py-4 bg-light h-100 rounded-1">
                    <h6>{exp.year}</h6>
                    <h3>{exp.title}</h3>
                    <p className="mb-0">{exp.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2>Coding Skills</h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4 gx-5">
                  {codingSkills.map((item, index) => (
                    <div
                      key={index}
                      className="col-md-6 wow fadeInRight"
                      data-wow-delay={index < 3 ? ".4s" : ".5s"}
                    >
                      <div className="d-skills-bar">
                        <div className="d-bar">
                          <div className="d-skill" data-value={item.value}>
                            <div className="d-info">
                              <span>{item.skill}</span>
                            </div>
                            <div className="d-progress-line">
                              <span className="d-fill-line" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-3">
                <div className="relative rounded-1 overflow-hidden p-lg-5 p-4 wow bg-color h-100 fadeInUp">
                  <h3 className="fs-32">Education</h3>
                </div>
              </div>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="col-md-3 text-center wow fadeInRight"
                  data-wow-delay={edu.delay}
                >
                  <div className="p-4 py-lg-5 py-4 bg-light h-100 rounded-1">
                    <h6>{edu.year}</h6>
                    <h3>{edu.title}</h3>
                    <p className="mb-0">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};
export default page;
