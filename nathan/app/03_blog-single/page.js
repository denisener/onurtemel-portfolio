import BlogPost from "@/components/BlogPost";
import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus, rootElements } from "@/utility/data";
const page = () => {
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
                title={"My Blog"}
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
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="mb-2">
                  <div className="d-inline fs-14 fw-bold me-3">
                    <i className="icofont-tag id-color me-2" />
                    Tips &amp; Tricks
                  </div>
                  <div className="d-inline fs-14 fw-600">
                    <i className="icofont-ui-calendar id-color me-2" />
                    18 Mar 2024
                  </div>
                </div>
                <h2>Behind the Scenes with a Hair and Makeup Artist</h2>
              </div>
              <div className="col-lg-6">
                <img
                  src="03_images/blog/single-1.webp"
                  className="img-fluid"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-4 gx-5">
              <div className="col-lg-10 offset-lg-1">
                <div className="blog-read">
                  <div className="post-text">
                    <p>
                      <span className="dropcap">L</span>uis sunt quis do laboris
                      eiusmod in sint dolore sit pariatur consequat commodo
                      aliqua nulla ad dolor aliquip incididunt voluptate est
                      aliquip adipisicing ea cupidatat nostrud incididunt
                      aliquip dolore. Sed minim nisi duis laborum est labore
                      nisi amet elit adipisicing proident do consectetur dolor
                      labore sit nisi ad proident esse ad velit nisi irure
                      reprehenderit ut et dolor labore veniam quis.
                    </p>
                    <p>
                      Sunt duis laboris ex et quis laborum laborum cillum mollit
                      voluptate culpa consequat ex cupidatat dolor eiusmod
                      proident proident cillum pariatur sint adipisicing in
                      nostrud do dolore consectetur quis incididunt minim
                      consectetur. Exercitation elit proident dolor est id
                      eiusmod dolor dolor incididunt ad voluptate laboris
                      cupidatat est est sint veniam sint officia sint incididunt
                      est sit ut tempor commodo pariatur ut proident et do.
                    </p>
                    <p>
                      Sed eu in ut sint dolor irure fugiat minim veniam sed ea
                      proident ullamco occaecat irure ut velit eu ullamco fugiat
                      cupidatat dolore fugiat. Lorem ipsum id non deserunt id
                      consequat duis voluptate amet aliqua pariatur laboris
                      officia pariatur veniam velit reprehenderit sint nostrud
                      cupidatat magna eiusmod mollit exercitation pariatur nulla
                      minim laboris dolore aliqua consectetur cillum duis aute
                      consectetur.
                    </p>
                  </div>
                </div>
                <div className="spacer-single" />
                <div id="blog-comment">
                  <h4>Comments (5)</h4>
                  <div className="spacer-half" />
                  <ol>
                    <li>
                      <div className="avatar">
                        <img src="images/testimonial/1.webp" alt="image" />
                      </div>
                      <div className="comment-info">
                        <span className="c_name">Merrill Rayos</span>
                        <span className="c_date id-color">2 days ago</span>
                        <span className="c_reply">
                          <a href="#">Reply</a>
                        </span>
                        <div className="clearfix" />
                      </div>
                      <div className="comment">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </div>
                      <ol>
                        <li>
                          <div className="avatar">
                            <img src="images/testimonial/2.webp" alt="image" />
                          </div>
                          <div className="comment-info">
                            <span className="c_name">Jackqueline Sprang</span>
                            <span className="c_date id-color">2 days ago</span>
                            <span className="c_reply">
                              <a href="#">Reply</a>
                            </span>
                            <div className="clearfix" />
                          </div>
                          <div className="comment">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="avatar">
                        <img src="images/testimonial/3.webp" alt="image" />
                      </div>
                      <div className="comment-info">
                        <span className="c_name">Sanford Crowley</span>
                        <span className="c_date id-color">2 days ago</span>
                        <span className="c_reply">
                          <a href="#">Reply</a>
                        </span>
                        <div className="clearfix" />
                      </div>
                      <div className="comment">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </div>
                      <ol>
                        <li>
                          <div className="avatar">
                            <img src="images/testimonial/4.webp" alt="image" />
                          </div>
                          <div className="comment-info">
                            <span className="c_name">Lyndon Pocekay</span>
                            <span className="c_date id-color">2 days ago</span>
                            <span className="c_reply">
                              <a href="#">Reply</a>
                            </span>
                            <div className="clearfix" />
                          </div>
                          <div className="comment">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li>
                      <div className="avatar">
                        <img src="images/testimonial/5.webp" alt="image" />
                      </div>
                      <div className="comment-info">
                        <span className="c_name">Aleen Crigger</span>
                        <span className="c_date id-color">2 days ago</span>
                        <span className="c_reply">
                          <a href="#">Reply</a>
                        </span>
                        <div className="clearfix" />
                      </div>
                      <div className="comment">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </div>
                    </li>
                  </ol>
                  <div className="spacer-single" />
                  <div id="comment-form-wrapper">
                    <h4>Leave a Comment</h4>
                    <div className="comment_form_holder">
                      <form
                        id="contact_form"
                        className="form-border"
                        name="form1"
                        method="post"
                        action="#"
                      >
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control no-border"
                        />
                        <label>
                          Email <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control no-border"
                        />
                        <div id="error_email" className="error">
                          Please check your email
                        </div>
                        <label>
                          Message <span className="req">*</span>
                        </label>
                        <textarea
                          cols={10}
                          rows={10}
                          name="message"
                          id="message"
                          className="form-control no-border"
                          defaultValue={""}
                        />
                        <div id="error_message" className="error">
                          Please check your message
                        </div>
                        <div id="mail_success" className="success">
                          Thank you. Your message has been sent.
                        </div>
                        <div id="mail_failed" className="error">
                          Error, email not sent
                        </div>
                        <p id="btnsubmit">
                          <input
                            type="submit"
                            id="send"
                            defaultValue="Send"
                            className="btn-line w-100px"
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
                  Related Post
                </div>
              </div>
              <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
                <div className="row g-4">
                  <BlogPost
                    color="color-1"
                    dark={false}
                    blogPosts={blogPosts}
                    imgBaseUrl="03_images/blog/"
                    singleUrl="03_blog-single"
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
export default page;
