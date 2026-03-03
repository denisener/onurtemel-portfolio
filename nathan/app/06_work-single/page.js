import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus } from "@/utility/data";

const WorkImage = ({ src, category }) => (
  <div className="col-lg-6">
    <div className="hover rounded-1 relative overflow-hidden text-light">
      <a
        href={`images/work-single/${src}.webp`}
        className="image-popup overflow-hidden d-block relative"
      >
        <img
          src={`images/work-single/${src}.webp`}
          className="img-fluid hover-scale-1-2"
          alt="image"
        />
        <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
          <div className="d-tag-s2">{category}</div>
          <div className="fw-bold text-uppercase">Uniqlo</div>
        </div>
      </a>
    </div>
  </div>
);

const ProjectDetail = ({ title, content }) => (
  <div className="col-lg-3 col-sm-2">
    <h6>{title}</h6>
    {content}
  </div>
);

const page = () => (
  <NathanLayout bodyClass="home-6 dark-scheme">
    <div className="section-dark no-bottom no-top" id="content">
      <div id="top" />
      <section className="p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Header
                menus={menus.home6}
                activePage={4}
                extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
              />
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb title="Uniqlo" subtitle="Available for Work" />

      <section className="no-top px-4">
        <div className="container-fluid">
          <div className="row g-4">
            <div className="row g-4 wow fadeInUp" data-wow-delay=".7s">
              <WorkImage src="1" category="Social Media Integration" />
              <WorkImage src="2" category="Social Media Integration" />
            </div>
          </div>
        </div>
      </section>
      <section className="no-top">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-2">
              <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Project Details
              </div>
            </div>
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="row g-4 gx-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="col-sm-6">
                      <h4>Overview</h4>
                      <p className="no-bottom">
                        Uniqlo is a well-established e-commerce retailer
                        specializing in contemporary fashion. The brand has a
                        significant presence on social media platforms like
                        Instagram, Facebook, Pinterest, and Twitter, but their
                        website's integration with these platforms was minimal,
                        resulting in missed opportunities for engagement and
                        sales.
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <h4>Objectives</h4>
                      <ul className="ul-style-2">
                        <li>Boost Website Traffic from Social Media</li>
                        <li>Enhance Customer Engagement and Interaction</li>
                        <li>
                          Increase Customer Retention and Repeat Purchases
                        </li>
                        <li>Strengthen Brand Loyalty and Advocacy</li>
                        <li>Improve SEO and Search Engine Rankings</li>
                        <li>Expand Brand Reach and Audience</li>
                      </ul>
                    </div>
                  </div>
                  <div className="spacer-double" />
                  <div
                    className="row g-4 gx-5 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <ProjectDetail
                      title="Category"
                      content="E-commerce Website"
                    />
                    <ProjectDetail
                      title="Awards"
                      content="Innovation Solution"
                    />
                    <ProjectDetail title="Client" content="Uniqlo" />
                    <ProjectDetail title="Year" content="2022" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="no-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                Client Says
              </div>
            </div>
            <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
              <h2 className="lh-1">
                Integrating social media into our website has been a
                game-changer for Uniqlo.
              </h2>
              <p>Sarah Johnson, Marketing Director, Uniqlo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </NathanLayout>
);

export default page;
