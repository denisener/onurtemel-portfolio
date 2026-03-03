import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
import Link from "next/link";

const works = [
  { title: "Elegance", image: "1.jpg", tag: "Bridal Makeup", year: "2024" },
  {
    title: "Vibrant",
    image: "2.jpg",
    tag: "Special Event Makeup",
    year: "2024",
  },
  {
    title: "Glamour",
    image: "3.jpg",
    tag: "Hair Extension",
    year: "2024",
  },
  {
    title: "Euphoria",
    image: "4.jpg",
    tag: "Special Event Makeup",
    year: "2024",
  },
  {
    title: "Aurora",
    image: "5.jpg",
    tag: "Bridal Makeup",
    year: "2024",
  },
  {
    title: "Finesse",
    image: "6.jpg",
    tag: "Special Event Makeup",
    year: "2024",
  },
];

const WorkItem = ({ title, image, tag, year }) => (
  <div className="col-lg-4">
    <div className="hover relative overflow-hidden text-light">
      <Link href="/03_work-single" className="overflow-hidden d-block relative">
        <h2 className="fs-40 abs-centered z-index-1 hover-op-0">{title}</h2>
        <img
          src={`/03_images/portfolio/${image}`}
          className="img-fluid hover-scale-1-2"
          alt="image"
        />
        <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
          <div className="d-tag-s2">{tag}</div>
          <div className="fw-bold">{year}</div>
        </div>
      </Link>
    </div>
  </div>
);

const page = () => {
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
                title="My Works"
                innitialFontSize={395.2}
                subtitle={"I'm Selena"}
                subtitleClasses="abs abs-middle end-0 bg-color-1 text-white p-3 fs-40 text-uppercase xs-hide wow fadeIn animated"
              />
            </div>
            <Header activePage="4" menus={menus.home3} />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-4 wow fadeInUp" data-wow-delay=".3s">
              {works.map((work, index) => (
                <WorkItem key={index} {...work} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};

export default page;
