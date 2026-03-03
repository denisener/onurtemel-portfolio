import ContactForm from "@/components/ContactForm";
import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { getSiteSettings } from "@/lib/api";

export const revalidate = 60;

const page = async () => {
  const siteSettings = await getSiteSettings();

  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="Hire Me" innitialFontSize={513.2} />
            <Header activePage="6" showBlog={siteSettings?.showBlog} />
          </div>
        </section>
        <ContactForm contactEmail={siteSettings?.contactEmail} />
      </div>
    </NathanLayout>
  );
};
export default page;
