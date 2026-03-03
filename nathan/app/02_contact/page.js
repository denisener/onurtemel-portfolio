import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
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
            <FitParentTitle title="Hire Me" innitialFontSize={513.2} />
            <Header menus={menus.home2} activePage="6" />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-4 gx-5">
              <div
                className="col-lg-8 offset-lg-2 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p>
                  Whether you have a question, a suggestion, or just want to say
                  hello, this is the place to do it. Please fill out the form
                  below with your details and message, and we'll get back to you
                  as soon as possible.
                </p>
                <form
                  name="contactForm"
                  id="contact_form"
                  className="position-relative z1000"
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
