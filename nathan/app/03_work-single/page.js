import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
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
                title={"Elegance"}
                subtitle={"I'm Selena"}
                subtitleClasses="abs abs-middle end-0 bg-color-1 text-white p-3 fs-40 text-uppercase xs-hide wow fadeIn animated"
                innitialFontSize={409.7}
              />
            </div>
            <Header activePage="4" menus={menus.home3} />
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
                          To recreate the timeless elegance of vintage Hollywood
                          glamour, focusing on classic hair and makeup styles
                          from the 1940s and 1950s. This project aims to
                          showcase skills in period styling, while modernizing
                          the looks for contemporary appeal. Each look will
                          include both hair and makeup styling that captures the
                          essence of the era, with an emphasis on flawless
                          execution, attention to detail, and adaptability for
                          modern tastes.
                        </p>
                      </div>
                      <div className="col-sm-6">
                        <h4>Objectives</h4>
                        <ul className="ul-style-2">
                          <li>
                            <strong>Style</strong>: Soft, voluminous curls
                            styled into a polished, structured wave pattern.
                          </li>
                          <li>
                            <strong>Technique</strong>: Use of hot rollers and a
                            medium-barrel curling iron, followed by careful
                            pinning and brushing to achieve the classic wave.
                          </li>
                          <li>
                            <strong>Products Used</strong>: Setting spray, shine
                            serum, and a medium-hold hairspray for a lasting
                            finish.
                          </li>
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
                        Special Event Makeup
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Awards</h6>
                        Beauty Innovation
                      </div>
                      <div className="col-lg-3 col-sm-2">
                        <h6>Client</h6>
                        Loreal Paris
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
                            href="03_images/work-single/1.jpg"
                            className="image-popup overflow-hidden d-block relative"
                          >
                            <img
                              src="03_images/work-single/1.jpg"
                              className="img-fluid hover-scale-1-2"
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="hover relative overflow-hidden text-light">
                          <a
                            href="03_images/work-single/2.jpg"
                            className="image-popup overflow-hidden d-block relative"
                          >
                            <img
                              src="03_images/work-single/2.jpg"
                              className="img-fluid hover-scale-1-2"
                              alt="image"
                            />
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
                  "I was blown away by their talent! The makeup was exactly what
                  I wanted—glamorous but still natural—and my hair was
                  absolutely stunning. I received compliments all night! I would
                  highly recommend Selena to anyone looking for a top-notch
                  stylist."
                </h2>
                <p>Emiliy Rose Parker</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};
export default page;
