import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
const page = () => {
  const services = [
    {
      title: "Bridal Makeup",
      description:
        "Tailored to make you look stunning on your big day, with long-lasting products and a flawless finish.",
    },
    {
      title: "Special Event Makeup",
      description:
        "Perfect for proms, galas, or any special occasion where you want to shine.",
    },
    {
      title: "Photoshoot Makeup",
      description:
        "High-definition makeup designed to look impeccable under camera lights, suitable for editorial, fashion, and personal photoshoots.",
    },
    {
      title: "Hair Extensions",
      description:
        "Temporary extensions for added length or volume, perfect for special events or photo shoots.",
    },
    {
      title: "Creative Hair Styling",
      description:
        "Unique and artistic styles for fashion shows, editorial shoots, and themed events.",
    },
    {
      title: "On-Location Services",
      description:
        "Available for weddings, events, and photoshoots, bringing professional hair and makeup to your doorstep.",
    },
  ];
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
                title="What I Do"
                innitialFontSize={393.1}
                subtitle={"I'm Selena"}
                subtitleClasses="abs abs-middle end-0 bg-color-1 text-white p-3 fs-40 text-uppercase xs-hide wow fadeIn animated"
              />
            </div>
            <Header menus={menus.home3} activePage="3" />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="row g-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="col-lg-6 col-sm-6 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div className="relative">
                        <h4 className="color-1">{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};
export default page;
