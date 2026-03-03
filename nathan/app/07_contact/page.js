import Breadcrumb from "@/components/Breadcrumb";
import { ContactForm1 } from "@/components/ContactForm";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus } from "@/utility/data";
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
                  activePage={6}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb title="Contact" subtitle="Available for Work" style={2} />
        <section className="no-top px-4">
          <div className="container-fluid">
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
