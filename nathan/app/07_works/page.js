import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus } from "@/utility/data";
import Link from "next/link";

const WorkCard = ({ image, title, category, year }) => (
  <div className="col-xl-4 col-md-6">
    <div className="bg-dark-2 rounded-1 overflow-hidden">
      <div className="hover relative overflow-hidden text-light">
        <Link
          href="/07_work-single"
          className="overflow-hidden d-block relative"
        >
          <img
            src={`images/works/${image}.webp`}
            className="img-fluid hover-scale-1-2"
            alt="image"
          />
        </Link>
        <div className="p-4 d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-0 lh-1-2">{title}</h3>
            <span className="fs-14">{category}</span>
          </div>
          <div className="fw-bold">{year}</div>
        </div>
      </div>
    </div>
  </div>
);

const works = [
  { image: "1", title: "Adidas", category: "E-Commerce Website", year: "2024" },
  {
    image: "2",
    title: "WWF",
    category: "Custom Website Development",
    year: "2023",
  },
  {
    image: "3",
    title: "Honda",
    category: "Front-End Development",
    year: "2022",
  },
  {
    image: "4",
    title: "Uniqlo",
    category: "Social Media Integration",
    year: "2023",
  },
  {
    image: "5",
    title: "Playstation",
    category: "Website Optimization",
    year: "2023",
  },
];

const page = () => (
  <NathanLayout bodyClass="home-7" darkMode={false}>
    <div className="section-dark no-bottom no-top" id="content">
      <div id="top" />
      <section className="p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Header
                menus={menus.home7}
                activePage={4}
                extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
              />
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb title="Works" subtitle="Available for Work" style={2} />
      <section className="no-top px-4">
        <div className="container-fluid">
          <div className="row g-4 wow fadeInRight" data-wow-delay=".5s">
            <div className="col-xl-4">
              <div className="p-lg-5 p-4 bg-color h-100 rounded-1">
                <div className="subtitle">Featured Works</div>
                <h2>
                  How I bring ideas to life through thoughtful design and
                  execution.
                </h2>
              </div>
            </div>
            {works.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>
        </div>
      </section>
    </div>
  </NathanLayout>
);

export default page;
