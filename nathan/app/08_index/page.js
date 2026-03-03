import { About5 } from "@/components/About";
import FitParentTitle from "@/components/FitParentTitle";
import { MarqueeNathan3 } from "@/components/MarqueeNathan";
import ServiceSlider2 from "@/components/ServiceSlider2";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import NathanLayout from "@/layouts/NathanLayout";

const page = () => {
  return (
    <NathanLayout bodyClass="home-8 dark-scheme" darkMode={true}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="text-light jarallax relative pt-0">
          <div className="text-fit-wrapper">
            <FitParentTitle title="Romano" />
          </div>
          <MarqueeNathan3 />
          <img src="08_images/bg-1.jpg" className="jarallax-img" alt="image" />
          <div className="de-gradient-edge-bottom dark" />
          <div className="container relative z-2">
            <div className="row g-4">
              <div className="col-lg-12 relative">
                {/* menu begin */}
                <div
                  className="v-menu sm-hide abs z-2 abs-middle end-0 wow text-white text-end"
                  data-wow-delay=".3s"
                >
                  <ul>
                    <li>
                      <a href="#top">Home</a>
                    </li>
                    <li>
                      <a href="#section-about">About Me</a>
                    </li>
                    <li>
                      <a href="#section-services">Services</a>
                    </li>
                    <li>
                      <a href="#section-why">Why Choose Me</a>
                    </li>
                    <li>
                      <a href="#section-testimonial">Testimonials</a>
                    </li>
                    <li>
                      <a href="#section-contact">Contact</a>
                    </li>
                  </ul>
                </div>
                {/* menu end */}
                <div className="spacer-single" />
                <div className="subtitle wow fadeIn" data-wow-delay=".3s">
                  Welcome
                </div>
                <h1
                  className="mb-0 fs-84 fs-xs-60 wow fadeIn"
                  data-wow-delay=".4s"
                >
                  I'm <span className="text-line">Master</span>
                </h1>
                <div className="relative mb-4">
                  <div className="d-inline-block sm-hide">
                    <div className="w-300px wow fadeIn" data-wow-delay=".6s">
                      Discover culinary perfection, where every dish is crafted
                      with passion, precision, and bold flavors.
                    </div>
                  </div>
                  <h1
                    className="mb-0 fs-84 fs-xs-60 d-inline wow fadeIn"
                    data-wow-delay=".8s"
                  >
                    <span>Chef</span>
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
          <img
            src="08_images/1.webp"
            className="h-100 pt-5 abs abs-center bottom-0"
            alt="image"
          />
        </section>
        <About5 />
        <ServiceSlider2 />
        <section id="section-why" className="no-bottom">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <h2 className="wow fadeInLeft">
                  Why
                  <br />
                  <span className="text-line">Choose</span>
                  <br />
                  Me?
                </h2>
              </div>
              <div className="col-lg-8">
                <div className="row g-4">
                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="relative">
                      <i className="w-60px bg-color fa fa-check text-dark fs-48 rounded-1 p-2 abs start-0" />
                      <div className="ms-80">
                        <h4>Passion for Perfection</h4>
                        <p>
                          Eery dish is crafted with love, precision, and
                          creativity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="relative">
                      <i className="w-60px bg-color fa fa-check text-dark fs-48 rounded-1 p-2 abs start-0" />
                      <div className="ms-80">
                        <h4>Personalized Menus</h4>
                        <p>
                          Tailored to fit your tastes, preferences, and dietary
                          needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="relative">
                      <i className="w-60px bg-color fa fa-check text-dark fs-48 rounded-1 p-2 abs start-0" />
                      <div className="ms-80">
                        <h4>Unmatched Experience</h4>
                        <p>
                          Ensuring flavor and presentation are always top-notch.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="relative">
                      <i className="w-60px bg-color fa fa-check text-dark fs-48 rounded-1 p-2 abs start-0" />
                      <div className="ms-80">
                        <h4>Premium Ingredients</h4>
                        <p>
                          Only the freshest, highest-quality ingredients are
                          used in every meal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="relative">
                      <i className="w-60px bg-color fa fa-check text-dark fs-48 rounded-1 p-2 abs start-0" />
                      <div className="ms-80">
                        <h4>Attention to Detail</h4>
                        <p>
                          Every detail is considered to provide a seamless,
                          luxurious experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow fadeInUp">
                    <div className="relative">
                      <i className="w-60px bg-color fa fa-check text-dark fs-48 rounded-1 p-2 abs start-0" />
                      <div className="ms-80">
                        <h4>Commitment to Excellence</h4>
                        <p>
                          Delivering a superior culinary journey ensures you
                          enjoy every moment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top no-bottom relative">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <img src="08_images/bg-2.jpg" className="w-100" alt="image" />
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-top dark" />
          <div className="de-gradient-edge-bottom dark" />
        </section>
        <TestimonialSlider2 />
        <section className="no-top no-bottom">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="row g-0">
                  <div className="col-3">
                    <a
                      href="08_images/gallery/1.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="08_images/gallery/1.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="08_images/gallery/2.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="08_images/gallery/2.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="08_images/gallery/3.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="08_images/gallery/3.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="08_images/gallery/4.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="08_images/gallery/4.jpg"
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
                      href="08_images/gallery/5.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="08_images/gallery/5.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="08_images/gallery/6.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="08_images/gallery/6.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="08_images/gallery/7.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="08_images/gallery/7.jpg"
                        className="w-100 hover-scale-1-1"
                        alt="image"
                      />
                    </a>
                  </div>
                  <div className="col-3">
                    <a
                      href="08_images/gallery/8.jpg"
                      className="image-popup-fit-width d-block hover relative overflow-hidden text-light"
                    >
                      <img
                        src="08_images/gallery/8.jpg"
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
            <div className="row g-4 mb-2">
              <div className="col-lg-4">
                <h2 className="mb-4 wow fadeInLeft" data-wow-delay=".2s">
                  Contact
                  <br />
                  <span className="text-line">Me</span>
                </h2>
              </div>
              <div className="col-lg-8">
                <form
                  name="contactForm"
                  id="contact_form"
                  className="position-relative z1000 wow fadeInRight"
                  method="post"
                  action="#"
                >
                  <div className="row gx-4">
                    <div className="col-lg-6 col-md-6 mb10">
                      <div className="field-set">
                        <span className="d-label fw-bold">Name</span>
                        <input
                          type="text"
                          name="Name"
                          id="name"
                          className="form-control no-border"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="field-set">
                        <span className="d-label fw-bold">Email</span>
                        <input
                          type="text"
                          name="Email"
                          id="email"
                          className="form-control no-border"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="field-set">
                        <span className="d-label fw-bold">Phone</span>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="form-control no-border"
                          placeholder="Your Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="field-set mb20">
                        <span className="d-label fw-bold">Message</span>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control no-border"
                          placeholder="Your Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
                  />
                  <div id="submit" className="mt20">
                    <input
                      type="submit"
                      id="send_message"
                      defaultValue="Send Message"
                      className="btn-main btn-line"
                    />
                  </div>
                  <div id="success_message" className="success">
                    Your message has been sent successfully. Refresh this page
                    if you want to send more messages.
                  </div>
                  <div id="error_message" className="error">
                    Sorry there was an error sending your form.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};
export default page;
