"use client";
import { About3 } from "@/components/About";
import { ContactForm1 } from "@/components/ContactForm";
import FitParentTitle from "@/components/FitParentTitle";
import { MarqueeNathan2 } from "@/components/MarqueeNathan";
import SectionWhy from "@/components/SectionWhy";
import ServiceSlider from "@/components/ServiceSlider";
import TestimonialSlider from "@/components/TestimonialSlider";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
const page = () => {
  return (
    <NathanLayout
      rootElements={rootElements.home5}
      darkMode={true}
      bodyClass="home-5 dark-scheme"
    >
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="abs z-1000 no-bg no-top no-bottom">
          <div className="text-fit-wrapper">
            <FitParentTitle title={"Raymond"} innitialFontSize={398.3} />
          </div>
          <div className="container-fluid ms-lg-2">
            <div className="row">
              <div className="col-lg-8">
                <Header menus={menus.home5} activePage={1} />
              </div>
            </div>
          </div>
        </section>
        <section className="jarallax relative pb-40">
          <img src="05_images/bg-1.jpg" className="jarallax-img" alt="image" />
          <div className="de-gradient-edge-bottom dark" />
          <div className="spacer-double" />
          <div className="spacer-double" />
          <div className="spacer-double" />
          <div className="spacer-double" />
          <div className="spacer-double" />
          <div className="container relative z-2">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="spacer-single" />
                <div className="subtitle wow fadeIn" data-wow-delay=".3s">
                  Welcome
                </div>
                <h1 className="mb-0 fs-96 wow fadeIn" data-wow-delay=".4s">
                  <span className="id-color">I'm</span>{" "}
                  <span className="text-line">Fitness</span>
                </h1>
                <div className="relative mb-4">
                  <div className="d-inline-block sm-hide">
                    <div className="w-300px wow fadeIn" data-wow-delay=".6s">
                      Together, we’ll set realistic goals, push past your
                      limits, and celebrate every achievement, big or small.
                    </div>
                  </div>
                  <h1
                    className="mb-0 fs-96 d-inline wow fadeIn"
                    data-wow-delay=".8s"
                  >
                    Trainer
                  </h1>
                </div>
                <a
                  className="btn-main text-dark wow fadeIn"
                  data-wow-delay="1s"
                  href="#"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </section>
        <ServiceSlider />
        <About3 />
        <SectionWhy />
        <section className="no-top no-bottom relative">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <img src="05_images/bg-3.jpg" className="w-100" alt="image" />
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-top dark" />
          <div className="de-gradient-edge-bottom dark" />
        </section>
        <MarqueeNathan2 />
        <section id="section-testimonial">
          <div className="container">
            <div className="row g-4 mb-2 align-items-center">
              <div className="col-lg-12">
                <h2 className="mb-4 wow fadeInLeft" data-wow-delay=".2s">
                  What <span className="id-color">They</span> Says
                </h2>
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </section>
        <section className="no-top no-bottom">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="row g-0">
                  <div className="col-3">
                    <a
                      href="05_images/gallery/1.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="05_images/gallery/1.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="05_images/gallery/2.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="05_images/gallery/2.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="05_images/gallery/3.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="05_images/gallery/3.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="05_images/gallery/4.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="05_images/gallery/4.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row g-0">
                  <div className="col-3">
                    <a
                      href="05_images/gallery/5.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="05_images/gallery/5.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="05_images/gallery/6.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="05_images/gallery/6.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="05_images/gallery/7.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="05_images/gallery/7.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="05_images/gallery/8.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="05_images/gallery/8.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-contact">
          <div className="container">
            <div className="row g-4 mb-2 align-items-center">
              <div className="col-lg-12">
                <h2 className="mb-4 wow fadeInLeft" data-wow-delay=".2s">
                  Contact <span className="id-color">Me</span>
                </h2>
                <ContactForm1 />
              </div>
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};
export default page;
