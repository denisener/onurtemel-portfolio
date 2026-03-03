import { About2 } from "@/components/About";
import { Blog2 } from "@/components/Blog";
import FitParentTitle from "@/components/FitParentTitle";
import MarqueeNathan from "@/components/MarqueeNathan";
import { Services2 } from "@/components/Services";
import { Works2 } from "@/components/Works";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
const page = () => {
  const marqueeData = [
    { id: 1, text: "Wedding Photography", stroke: false },
    { id: 2, text: "Portrait Photography", stroke: true },
    { id: 3, text: "Event Photography", stroke: false },
    { id: 4, text: "Commercial Photography", stroke: true },
    { id: 5, text: "Lifestyle Photography", stroke: false },
    { id: 6, text: "Custom Photography", stroke: true },
  ];
  return (
    <NathanLayout
      bodyClass="home-4 dark-scheme"
      rootElements={rootElements.home4}
    >
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top no-bottom">
          <div className="text-fit-wrapper position-relative">
            <FitParentTitle
              title={"Brandon"}
              innitialFontSize={405.3}
              subtitle={"Photography"}
              subtitleClasses="abs abs-middle end-0 bg-white text-black p-3 me-4 fs-40 text-uppercase xs-hide wow fadeIn animated"
            />
          </div>

          <div className="container-fluid ms-lg-2">
            <div className="row">
              <div className="col-lg-8">
                <Header activePage="home" menus={menus.home4} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-12">
                <h1 className="wow fadeInUp">
                  Crafting visual narratives that preserve the beauty and
                  emotion of your most cherished moments.
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top no-bottom relative overflow-hidden">
          <div className="container-fluid">
            <div className="row g-0">
              <div className="col-lg-12">
                <img
                  src="04_images/photo-1.jpg"
                  className="w-100 wow fadeIn"
                  alt="image"
                />
                <div className="abs-centered">
                  <div className="w-300px border-bottom-1-white wow fadeInLeftBig" />
                </div>
                <div className="abs-centered">
                  <div className="h-300px border-right-1-white wow fadeInDownBig" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <About2 />
        <section className="no-top no-bottom relative">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="04_images/photo-2.jpg"
                  className="w-100"
                  alt="image"
                />
                <div className="abs-centered">
                  <div className="w-300px border-bottom-1-white wow fadeInLeftBig" />
                </div>
                <div className="abs-centered">
                  <div className="h-300px border-right-1-white wow fadeInDownBig" />
                </div>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-top dark" />
          <div className="de-gradient-edge-bottom dark" />
        </section>
        <Services2 />
        <MarqueeNathan marqueeData={marqueeData} />
        <Works2 />
        <Blog2 />
      </div>
    </NathanLayout>
  );
};
export default page;
