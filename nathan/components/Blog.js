import Link from "next/link";

const Blog = ({ tagClass = "text-white", posts: cmsPosts }) => {
  const blogPosts = cmsPosts && cmsPosts.length > 0
    ? cmsPosts.map((p, i) => ({
        id: p._id || i + 1,
        image: p.coverImage || `images/blog/${i + 1}.webp`,
        category: p.category || "Tips & Tricks",
        date: p.publishedAt
          ? new Date(p.publishedAt).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "18 Mar 2024",
        title: p.title,
        link: p.slug?.current ? `/blog/${p.slug.current}` : "blog-single",
      }))
    : [
    {
      id: 1,
      image: "images/blog/1.webp",
      category: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Mastering Modern Web Design: Trends and Techniques for 2024",
      link: "blog-single",
    },
    {
      id: 2,
      image: "images/blog/2.webp",
      category: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "The Future of Web Development: Emerging Technologies to Watch",
      link: "blog-single",
    },
    {
      id: 3,
      image: "images/blog/3.webp",
      category: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Optimizing Website Performance: Strategies for Faster Load Times",
      link: "blog-single",
    },
    {
      id: 4,
      image: "images/blog/4.webp",
      category: "Tips & Tricks",
      date: "18 Mar 2024",
      title:
        "Responsive Design Best Practices: Ensuring a Seamless Mobile Experience",
      link: "blog-single",
    },
    {
      id: 5,
      image: "images/blog/5.webp",
      category: "Tips & Tricks",
      date: "18 Mar 2024",
      title:
        "Web Design Mistakes to Avoid: Common Pitfalls and How to Fix Them",
      link: "blog-single",
    },
    {
      id: 6,
      image: "images/blog/6.webp",
      category: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Creating Accessible Websites: Why Inclusive Design Matters",
      link: "blog-single",
    },
  ];
  return (
    <section className="no-top">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-2">
            <div className="subtitle ms-3 wow fadeInUp" data-wow-delay=".3s">
              From the Blog
            </div>
          </div>
          <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
            <div className="row g-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="col-lg-6">
                  <div className="relative">
                    <div className="row g-4 align-items-center">
                      <div className="col-sm-3">
                        <div className="post-image">
                          <img alt="image" src={post.image} className="lazy" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <div className="mb-2">
                          <div className="d-inline fs-14 fw-bold me-3">
                            <i className={`icofont-tag ${tagClass} me-2`} />
                            {post.category}
                          </div>
                          <div className="d-inline fs-14 fw-600">
                            <i
                              className={`icofont-ui-calendar ${tagClass} me-2`}
                            />
                            {post.date}
                          </div>
                        </div>
                        <h4>
                          <Link href={post.link}>{post.title}</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;

export const Blog2 = () => {
  const blogPosts = [
    {
      title: "Mastering Modern Web Design: Trends and Techniques for 2024",
      date: "18 Mar 2024",
    },
    {
      title: "The Art of User Experience: Designing Websites That Delight",
      date: "18 Mar 2024",
    },
    {
      title:
        "Responsive Design Best Practices: Making Your Website Mobile-Friendly",
      date: "18 Mar 2024",
    },
    {
      title: "Typography in Web Design: Choosing Fonts That Make an Impact",
      date: "18 Mar 2024",
    },
    {
      title:
        "Web Design Mistakes to Avoid: Common Pitfalls and How to Fix Them",
      date: "18 Mar 2024",
    },
    {
      title: "Creating Accessible Websites: Why Inclusive Design Matters",
      date: "18 Mar 2024",
    },
  ];

  return (
    <section id="section-blog" className="no-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="subtitle wow fadeInUp">Brandon Photography</div>
            <div className="d-flex justify-content-between">
              <h2 className="wow fadeInUp">Blog</h2>
              <h2 className="op-4">05</h2>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row g-4">
              {blogPosts.map((post, index) => (
                <div key={index} className="col-lg-6 wow fadeInUp">
                  <div className="relative">
                    <div className="row g-4 align-items-center">
                      <div className="col-sm-12">
                        <div className="mb-2">
                          <div className="d-inline fs-14 fw-bold me-3">
                            <i className="icofont-tag text-white me-2" />
                            Tips &amp; Tricks
                          </div>
                          <div className="d-inline fs-14 fw-600">
                            <i className="icofont-ui-calendar text-white me-2" />
                            {post.date}
                          </div>
                        </div>
                        <h4>
                          <Link className="text-light" href="04_blog-single">
                            {post.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
