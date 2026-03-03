import Link from "next/link";
import { Fragment } from "react";

const BlogPost = ({
  dark = true,
  color = "color",
  singleUrl = "blog-single",
  blogPosts = [
    {
      image: "1.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Mastering Modern Web Design: Trends and Techniques for 2024",
    },
    {
      image: "2.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "The Art of User Experience: Designing Websites That Delight",
    },
    {
      image: "3.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title:
        "Responsive Design Best Practices: Making Your Website Mobile-Friendly",
    },
    {
      image: "4.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Typography in Web Design: Choosing Fonts That Make an Impact",
    },
    {
      image: "5.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title:
        "Web Design Mistakes to Avoid: Common Pitfalls and How to Fix Them",
    },
    {
      image: "6.webp",
      tag: "Tips & Tricks",
      date: "18 Mar 2024",
      title: "Creating Accessible Websites: Why Inclusive Design Matters",
    },
  ],
  imgBaseUrl = "images/blog/",
}) => (
  <Fragment>
    {blogPosts.map((post, index) => (
      <div key={index} className="col-lg-6">
        <div className="relative">
          <div className="row g-4 align-items-center">
            <div className="col-sm-3">
              <div className="post-image">
                <img
                  alt="image"
                  src={`${imgBaseUrl}${post.image}`}
                  className="lazy"
                />
              </div>
            </div>
            <div className="col-sm-9">
              <div className="mb-2">
                <div className="d-inline fs-14 fw-bold me-3">
                  <i
                    className={`icofont-tag ${
                      dark ? "text-white" : ""
                    } ${color} me-2`}
                  />
                  {post.tag}
                </div>
                <div className="d-inline fs-14 fw-600">
                  <i
                    className={`icofont-ui-calendar ${
                      dark ? "text-white" : ""
                    } ${color} me-2`}
                  />
                  {post.date}
                </div>
              </div>
              <h4>
                <Link href={`/${singleUrl}`}>{post.title}</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Fragment>
);

export default BlogPost;
