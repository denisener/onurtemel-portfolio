import { About4 } from "@/components/About";
import Breadcrumb from "@/components/Breadcrumb";
import { Works3 } from "@/components/Works";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus } from "@/utility/data";
const page = () => {
  return (
    <NathanLayout bodyClass="home-6 dark-scheme">
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <Header
                  menus={menus.home6}
                  activePage={1}
                  extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
                />
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb />
        <About4 />
        <section className="no-top px-4">
          <div className="container-fluid">
            <div className="spacer-double d-lg-none d-sm-block" />
            <div className="row justify-content-center g-4 gx-5">
              <div className="col-lg-6 text-center">
                <div className="relative">
                  <h1 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
                    A Website Designer from New York
                  </h1>
                </div>
                <p className="lead wow fadeInUp" data-wow-delay=".5s">
                  My journey into web design started with a love for both art
                  and technology, which led me to pursue a career where I could
                  blend these interests seamlessly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Works3 />
      </div>
    </NathanLayout>
  );
};
export default page;
