import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
import Link from "next/link";

const works = [
  { title: "Adidas", image: "1.webp", tag: "E-COMMERCE WEBSITE", year: "2024" },
  { title: "WWF", image: "2.webp", tag: "CUSTOM WEBSITE DESIGN", year: "2023" },
  {
    title: "Honda",
    image: "3.webp",
    tag: "FRONT-END DEVELOPMENT",
    year: "2022",
  },
  {
    title: "Uniqlo",
    image: "4.webp",
    tag: "Social Media Integration",
    year: "2021",
  },
  {
    title: "Playstation",
    image: "5.webp",
    tag: "Website Optimization",
    year: "2020",
  },
  {
    title: "Wilson",
    image: "6.webp",
    tag: "Landing Page Design",
    year: "2019",
  },
];

const WorkItem = ({ title, image, tag, year }) => (
  <div className="col-lg-4">
    <div className="hover relative overflow-hidden text-light">
      <Link href="/work-single" className="overflow-hidden d-block relative">
        <h2 className="fs-40 abs-centered z-index-1 hover-op-0">{title}</h2>
        <img
          src={`images/works/${image}`}
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
      rootElements={rootElements.home2}
      bodyClass="light"
      darkMode={false}
    >
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="My Works" innitialFontSize={363} />
            <Header menus={menus.home2} activePage="4" />
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
