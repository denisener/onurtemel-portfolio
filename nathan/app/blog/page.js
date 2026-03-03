import BlogPost from "@/components/BlogPost";
import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { getSiteSettings } from "@/lib/api";

export const revalidate = 60;

const Pagination = () => (
  <div className="col-lg-12 pt-3 text-center">
    <div className="d-inline-block">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">
                <i className="fa fa-chevron-left" />
              </span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">
                <i className="fa fa-chevron-right" />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const Page = async () => {
  const siteSettings = await getSiteSettings();

  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <FitParentTitle title="My Blog" innitialFontSize={435} />
            <Header activePage="5" showBlog={siteSettings?.showBlog} />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                <div className="row g-4">
                  <BlogPost />
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NathanLayout>
  );
};

export default Page;
