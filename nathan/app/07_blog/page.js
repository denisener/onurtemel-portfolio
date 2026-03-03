import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus } from "@/utility/data";
import Link from "next/link";

const BlogPost = ({ image, date, title, excerpt }) => (
  <div className="col-lg-6">
    <div className="rounded-1 bg-color text-dark overflow-hidden">
      <div className="row g-0">
        <div className="col-sm-6">
          <div
            className="auto-height relative"
            data-bgimage={`url(images/blog/${image}.webp)`}
            style={{
              background: `url('/images/blog/${image}.webp') 0% 0% / cover no-repeat`,
            }}
          >
            <div className="abs start-0 top-0 bg-dark text-white p-3 pb-2 m-3 text-center fw-600 rounded-1">
              <div className="fs-36 mb-0">{date.day}</div>
              <span>{date.month}</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 relative">
          <div className="p-30 pb-60">
            <h4 className="fs-28 lh-1-2">
              <Link className="text-dark" href="/07_blog-single">
                {title}
              </Link>
            </h4>
            <p className="mb-0">{excerpt}</p>
            <div className="abs bottom-0 pb-20">
              <div className="d-inline fs-14 fw-600 me-3">
                <i className="icofont-chat me-2" />
                10 Comments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const blogPosts = [
  {
    image: "1",
    date: { day: 20, month: "Jun" },
    title: "The Latest Innovations: Top Gadgets to Watch in 2024",
    excerpt:
      "This month has been bustling with exciting developments in the world of gadgets. From groundbreaking new devices to innovative...",
  },
  {
    image: "2",
    date: { day: 20, month: "Jun" },
    title: "Breakthroughs in Tech: Must-Have Gadgets of the Year",
    excerpt:
      "This month has been bustling with exciting developments in the world of gadgets. From groundbreaking new devices to innovative...",
  },
  {
    image: "3",
    date: { day: 20, month: "Jun" },
    title: "Gadget Roundup: New Releases and Upcoming Trends",
    excerpt:
      "This month has been bustling with exciting developments in the world of gadgets. From groundbreaking new devices to innovative...",
  },
  {
    image: "4",
    date: { day: 20, month: "Jun" },
    title: "Tech Talk: The Future of Smart Devices Unveiled",
    excerpt:
      "This month has been bustling with exciting developments in the world of gadgets. From groundbreaking new devices to innovative...",
  },
  {
    image: "5",
    date: { day: 20, month: "Jun" },
    title: "Gadget Gurus: Expert Reviews and First Impressions",
    excerpt:
      "This month has been bustling with exciting developments in the world of gadgets. From groundbreaking new devices to innovative...",
  },
  {
    image: "6",
    date: { day: 20, month: "Jun" },
    title: "Smart Living: How New Gadgets Are Shaping Our Lives",
    excerpt:
      "This month has been bustling with exciting developments in the world of gadgets. From groundbreaking new devices to innovative...",
  },
];

const page = () => (
  <NathanLayout bodyClass="home-7" darkMode={false}>
    <div className="section-dark no-bottom no-top" id="content">
      <div id="top" />
      <section className="p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Header
                menus={menus.home7}
                activePage={5}
                extraClass="text-center pt-3 text-uppercase fs-14 fw-bold"
              />
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb title="My Blog" subtitle="Available for Work" style={2} />
      <section className="no-top px-4">
        <div className="container-fluid">
          <div className="row g-4">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
            <div className="col-lg-12 pt-4 text-center">
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
                    <li className="page-item active " aria-current="page">
                      <a className="page-link text-dark" href="#">
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
          </div>
        </div>
      </section>
    </div>
  </NathanLayout>
);

export default page;
