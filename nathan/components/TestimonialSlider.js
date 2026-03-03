"use client";
import { sliderProps } from "@/utility/sliderprops";
import Slider from "react-slick";

const TestimonialSlider = () => {
  return (
    <Slider {...sliderProps.testimonial} className="owl-2-cols">
      <div className="item">
        <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp" />
        <h3 className="mb-4 wow fadeInUp fs-24">
          "Working with Raymond has been a game-changer for me. I’ve struggled
          with my weight for years, but their personalized approach and constant
          motivation have helped me lose 20 pounds and keep it off! I feel
          stronger, more confident, and healthier than ever before."
        </h3>
        <span className="wow fadeInUp">Reagan Farness</span>
      </div>
      <div className="item">
        <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp" />
        <h3 className="mb-4 wow fadeInUp fs-24">
          "Working with Raymond has been a game-changer for me. I’ve struggled
          with my weight for years, but their personalized approach and constant
          motivation have helped me lose 20 pounds and keep it off! I feel
          stronger, more confident, and healthier than ever before."
        </h3>
        <span className="wow fadeInUp">Amiee Mckiernan</span>
      </div>
      <div className="item">
        <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp" />
        <h3 className="mb-4 wow fadeInUp fs-24">
          "Working with Raymond has been a game-changer for me. I’ve struggled
          with my weight for years, but their personalized approach and constant
          motivation have helped me lose 20 pounds and keep it off! I feel
          stronger, more confident, and healthier than ever before."
        </h3>
        <span className="wow fadeInUp">Eric Spletzer</span>
      </div>
      <div className="item">
        <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp" />
        <h3 className="mb-4 wow fadeInUp fs-24">
          "Working with Raymond has been a game-changer for me. I’ve struggled
          with my weight for years, but their personalized approach and constant
          motivation have helped me lose 20 pounds and keep it off! I feel
          stronger, more confident, and healthier than ever before."
        </h3>
        <span className="wow fadeInUp">Classie Mottershead</span>
      </div>
    </Slider>
  );
};
export default TestimonialSlider;

export const TestimonialSlider2 = () => {
  return (
    <section id="section-testimonial">
      <div className="container">
        <div className="row g-4 mb-2">
          <div className="col-lg-4">
            <h2 className="mb-4 wow fadeInLeft" data-wow-delay=".2s">
              What
              <br />
              <span className="text-line">They</span>
              <br />
              Says
            </h2>
          </div>
          <div className="col-lg-8">
            <Slider {...sliderProps.testimonial2} className="owl-single-dots">
              <div className="item">
                <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp" />
                <p className="text-white lh-1-6 mb-4 wow fadeInUp fs-24">
                  "Chef Romano’s handmade pasta is a revelation. The texture is
                  perfect—soft but with just the right amount of bite, and the
                  fresh flavors transport you straight to the heart of Italy.
                  Every bite is a celebration of simplicity and quality. It’s
                  clear that Chef Romano puts his heart into every dish, and
                  it’s an experience you won’t forget."
                </p>
                <span className="wow fadeInUp">Reagan Farness</span>
              </div>
              <div className="item">
                <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp" />
                <p className="text-white lh-1-6 mb-4 wow fadeInUp fs-24">
                  "Chef Romano’s handmade pasta is a revelation. The texture is
                  perfect—soft but with just the right amount of bite, and the
                  fresh flavors transport you straight to the heart of Italy.
                  Every bite is a celebration of simplicity and quality. It’s
                  clear that Chef Romano puts his heart into every dish, and
                  it’s an experience you won’t forget."
                </p>
                <span className="wow fadeInUp">Amiee Mckiernan</span>
              </div>
              <div className="item">
                <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp" />
                <p className="text-white lh-1-6 mb-4 wow fadeInUp fs-24">
                  "Chef Romano’s handmade pasta is a revelation. The texture is
                  perfect—soft but with just the right amount of bite, and the
                  fresh flavors transport you straight to the heart of Italy.
                  Every bite is a celebration of simplicity and quality. It’s
                  clear that Chef Romano puts his heart into every dish, and
                  it’s an experience you won’t forget."
                </p>
                <span className="wow fadeInUp">Eric Spletzer</span>
              </div>
              <div className="item">
                <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp" />
                <p className="text-white lh-1-6 mb-4 wow fadeInUp fs-24">
                  "Chef Romano’s handmade pasta is a revelation. The texture is
                  perfect—soft but with just the right amount of bite, and the
                  fresh flavors transport you straight to the heart of Italy.
                  Every bite is a celebration of simplicity and quality. It’s
                  clear that Chef Romano puts his heart into every dish, and
                  it’s an experience you won’t forget."
                </p>
                <span className="wow fadeInUp">Classie Mottershead</span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
