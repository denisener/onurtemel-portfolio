import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
const page = () => {
  const services = [
    {
      title: "Custom Website Design",
      description:
        "Tailored websites to match your brand's unique identity and goals.",
    },
    {
      title: "E-commerce Website",
      description:
        "Creating user-friendly online stores with secure payment gateways.",
    },
    {
      title: "Landing Page Design",
      description:
        "High-conversion landing pages for specific marketing campaigns.",
    },
    {
      title: "Front-end Development",
      description:
        "Implementing designs with clean and efficient code using HTML, CSS, JS.",
    },
    {
      title: "Back-end Development",
      description:
        "Building robust back-end systems using technologies like PHP and databases.",
    },
    {
      title: "Content Management System",
      description:
        "Integrating and customizing CMS platforms for easy content management.",
    },
    {
      title: "Website Optimization",
      description:
        "Enhancing website performance, speed, and search engine optimisation.",
    },
    {
      title: "Website Audits",
      description:
        "Conducting audits to identify areas for improvement in design and performance.",
    },
    {
      title: "Content Strategy & Creation",
      description:
        "Developing effective content strategies and providing copywriting services.",
    },
    {
      title: "Social Media Integration",
      description: "Integrating social media platforms to enhance engagement.",
    },
  ];
  return (
    <NathanLayout
      rootElements={rootElements.home2}
      darkMode={false}
      bodyClass="light"
    >
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="What I Do" innitialFontSize={393.1} />
            <Header menus={menus.home2} activePage="3" />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="row g-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-sm-6 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="relative">
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};
export default page;
