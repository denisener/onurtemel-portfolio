"use client";
import About from "@/components/About";
import AvailableForWork from "@/components/AvailableForWork";
import Blog from "@/components/Blog";
import FitParentTitle from "@/components/FitParentTitle";
import MarqueeNathan from "@/components/MarqueeNathan";
import Services from "@/components/Services";
import Works from "@/components/Works";
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
              <FitParentTitle title={"Selena"} innitialFontSize={565.5} />
              <div
                className="abs abs-middle end-0 bg-color-1 text-white p-3 fs-40 text-uppercase xs-hide wow fadeIn"
                data-wow-delay=".5s"
              >
                Makeup Artist
              </div>
            </div>
            <Header activePage="1" menus={menus.home3} />
          </div>
          <div className="spacer-double" />
          <AvailableForWork variant="variant2" />
        </section>
        <About variant="variant2" />
        <Services variant="variant2" />
        <Works variant="variant2" />
        <MarqueeNathan textColor="dark" variant="variant2" />
        <Blog variant="variant2" tagClass="color-1" />
      </div>
    </NathanLayout>
  );
};
export default page;
