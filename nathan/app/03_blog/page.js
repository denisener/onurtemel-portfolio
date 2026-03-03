import BlogPost from "@/components/BlogPost";
import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";

const Page = () => {
  const blogPosts = [
    {
      image: "1.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Hair and Makeup Tips for Every Occasion",
    },
    {
      image: "2.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Behind the Scenes with a Hair and Makeup Artist",
    },
    {
      image: "3.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Creating Timeless Looks with Hair and Makeup",
    },
    {
      image: "4.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Day to Night Hair and Makeup Transformations",
    },
    {
      image: "5.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "The Ultimate Hair and Makeup Artist Toolkit",
    },
    {
      image: "6.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Innovative Hair and Makeup Looks to Try",
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
                title="My Blog"
                innitialFontSize={474.3}
                subtitle={"I'm Selena"}
                subtitleClasses="abs abs-middle end-0 bg-color-1 text-white p-3 fs-40 text-uppercase xs-hide wow fadeIn animated"
              />
            </div>
            <Header menus={menus.home3} activePage="5" />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                <div className="row g-4">
                  <BlogPost
                    singleUrl="03_blog-single"
                    color="color-1"
                    dark={false}
                    blogPosts={blogPosts}
                    imgBaseUrl="03_images/blog/"
                  />
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
