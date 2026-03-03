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
      bodyClass="light-scheme"
      rootElements={rootElements.home2}
      darkMode={false}
    >
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title={"NATHAN"} />
            <Header menus={menus.home2} activePage="1" />
          </div>
          <div className="spacer-double" />
          <AvailableForWork />
        </section>
        <About />
        <Services />
        <Works textColor="dark-text" />
        <MarqueeNathan textColor="dark" />
        <Blog tagClass="id-color" />
      </div>
    </NathanLayout>
  );
};
export default page;
