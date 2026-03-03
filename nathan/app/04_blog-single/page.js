import BlogPost from "@/components/BlogPost";
import FitParentTitle from "@/components/FitParentTitle";
import Header from "@/layouts/Header";
import NathanLayout from "@/layouts/NathanLayout";
import { menus } from "@/utility/data";
const page = () => {
  return (
    <NathanLayout>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="no-top">
          <div className="text-fit-wrapper">
            <div className="text-fit-wrapper position-relative">
              <FitParentTitle
                title={"Brandon"}
                innitialFontSize={405.3}
                subtitle={"Photography"}
                subtitleClasses="abs abs-middle end-0 bg-white text-black p-3 me-4 fs-40 text-uppercase xs-hide wow fadeIn animated"
              />
            </div>
            <Header activePage="5" menus={menus.home4} />
          </div>
        </section>
        <section className="no-top">
          <div className="container">
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="mb-2">
                  <div className="d-inline fs-14 fw-bold me-3">
                    <i className="icofont-tag text-white me-2" />
                    Tips &amp; Tricks
                  </div>
                  <div className="d-inline fs-14 fw-600">
                    <i className="icofont-ui-calendar text-white me-2" />
                    18 Mar 2024
                  </div>
                </div>
                <h2>
                  Mastering Modern Web Design: Trends and Techniques for 2024
                </h2>
              </div>
              <div className="col-lg-6">
                <img
                  src="images/blog/single-1.webp"
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
                  <BlogPost />
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
