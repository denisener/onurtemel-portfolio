import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
const page = () => {
  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title={"UNIQLO"} innitialFontSize={498.2} />
            <Header activePage="works" />
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
                          website’s integration with these platforms was
                          minimal, resulting in missed opportunities for
                          engagement and sales.
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
                      <div className="col-lg-3 col-sm-2">
                        <h6>Category</h6>
                        E-commerce Website
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Awards</h6>
                        Innovation Solution
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Client</h6>
                        Uniqlo
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Year</h6>
                        2022
                      </div>
                    </div>
                    <div className="spacer-double" />
                    <div className="row g-4 wow fadeInUp" data-wow-delay=".7s">
                      <div className="col-lg-6">
                        <div className="hover relative overflow-hidden text-light">
                          <a
                            href="images/work-single/1.webp"
                            className="image-popup overflow-hidden d-block relative"
                          >
                            <img
                              src="images/work-single/1.webp"
                              className="img-fluid hover-scale-1-2"
                              alt="image"
                            />
                            <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
                              <div className="d-tag-s2">
                                Social Media Integration
                              </div>
                              <div className="fw-bold text-uppercase">
                                Uniqlo
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="hover relative overflow-hidden text-light">
                          <a
                            href="images/work-single/2.webp"
                            className="image-popup overflow-hidden d-block relative"
                          >
                            <img
                              src="images/work-single/2.webp"
                              className="img-fluid hover-scale-1-2"
                              alt="image"
                            />
                            <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
                              <div className="d-tag-s2">
                                Social Media Integration
                              </div>
                              <div className="fw-bold text-uppercase">
                                Uniqlo
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
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
};
export default page;
