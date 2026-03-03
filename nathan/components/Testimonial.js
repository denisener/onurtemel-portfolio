const Testimonial = () => {
  return (
    <section className="no-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              What They Says
            </div>
          </div>
          <div className="col-lg-10">
            <div
              className="owl-3-cols-dots owl-carousel owl-theme wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item">
                <div className="de_testi s2">
                  <blockquote>
                    <div className="de_testi_by">
                      <img
                        className="circle"
                        alt="image"
                        src="images/testimonial/1.webp"
                      />{" "}
                      <div>
                        John Reynolds<span>CEO of Boutique Bliss</span>
                      </div>
                    </div>
                    <p>
                      "Our e-commerce website needed a complete overhaul, and
                      Nathan delivered beyond our expectations. The new design
                      is visually stunning and incredibly user-friendly."
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="item">
                <div className="de_testi s2">
                  <blockquote>
                    <div className="de_testi_by">
                      <img
                        className="circle"
                        alt="image"
                        src="images/testimonial/2.webp"
                      />{" "}
                      <div>
                        David Kim<span>Freelance Photographer</span>
                      </div>
                    </div>
                    <p>
                      "Nathan helped me design a personal portfolio website that
                      truly highlights my work as a photographer. The site is
                      clean, modern, and visually appealing – exactly what I
                      wanted."
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="item">
                <div className="de_testi s2">
                  <blockquote>
                    <div className="de_testi_by">
                      <img
                        className="circle"
                        alt="image"
                        src="images/testimonial/3.webp"
                      />{" "}
                      <div>
                        Dr. Robert Harris
                        <span>Founder of Harris Clinic</span>
                      </div>
                    </div>
                    <p>
                      "The new site is not only visually appealing but also
                      highly functional, with easy navigation for our patients.
                      The online appointment booking system has been a
                      game-changer."
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="item">
                <div className="de_testi s2">
                  <blockquote>
                    <div className="de_testi_by">
                      <img
                        className="circle"
                        alt="image"
                        src="images/testimonial/4.webp"
                      />{" "}
                      <div>
                        Marius Lopez<span>Owner of Lezzato Cafe</span>
                      </div>
                    </div>
                    <p>
                      "Nathan was very responsive to our needs. We’ve received
                      numerous compliments on the new design. Thank you for
                      helping us take our online presence to the next level!"
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="item">
                <div className="de_testi s2">
                  <blockquote>
                    <div className="de_testi_by">
                      <img
                        className="circle"
                        alt="image"
                        src="images/testimonial/5.webp"
                      />{" "}
                      <div>
                        Martin Smith<span>Dream Homes Realty</span>
                      </div>
                    </div>
                    <p>
                      "The new site is intuitive and visually appealing, making
                      it easy for clients to find and explore properties. The
                      virtual tour features have significantly enhanced our user
                      experience."
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="item">
                <div className="de_testi s2">
                  <blockquote>
                    <div className="de_testi_by">
                      <img
                        className="circle"
                        alt="image"
                        src="images/testimonial/6.webp"
                      />{" "}
                      <div>
                        Jake Peterson<span>Personal Trainer</span>
                      </div>
                    </div>
                    <p>
                      "Nathan created an amazing site that highlights my
                      services, client testimonials, and success stories. The
                      booking system is user-friendly, and the design is clean
                      and professional."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
