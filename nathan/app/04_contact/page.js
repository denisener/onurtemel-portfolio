import ContactForm from "@/components/ContactForm";
import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
const page = () => {
  return (
    <NathanLayout
      bodyClass="home-4 dark-scheme"
      rootElements={rootElements.home4}
    >
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <div className="text-fit-wrapper position-relative">
              <FitParentTitle
                title="Hire Me"
                innitialFontSize={513.2}
                subtitle={"Photography"}
                subtitleClasses="abs abs-middle end-0 bg-white text-black p-3 me-4 fs-40 text-uppercase xs-hide wow fadeIn animated"
              />
            </div>
            <Header activePage="6" menus={menus.home4} />
          </div>
        </section>
        <ContactForm />
      </div>
    </NathanLayout>
  );
};
export default page;
