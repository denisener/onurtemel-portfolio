import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus } from "@/utility/data";

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

const ServiceCard = ({ title, description }) => (
  <div className="col-lg-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
    <div className="relative p-lg-5 p-4 bg-color text-dark rounded-1 h-100">
      <div className="row">
        <div className="col-lg-6">
          <h4 className="fs-32 lh-1-2">{title}</h4>
        </div>
        <div className="col-lg-6">
          <p className="fs-20">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const page = () => {
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
                  activePage={3}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb title="Services" subtitle="Available for Work" style={2} />

        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row g-4">
                  {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
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
