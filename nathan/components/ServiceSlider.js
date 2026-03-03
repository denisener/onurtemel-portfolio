import { sliderProps } from "@/utility/sliderprops";
import { Component } from "react";
import Slider from "react-slick";

export default class ServiceSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section id="section-services" className="relative">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <h2 className="wow fadeInLeft">
                <span className="id-color">My</span> Training Programs
              </h2>
            </div>
            <div
              className="owl-custom-nav menu-float"
              data-target="#training-carousel"
            >
              <a className="btn-next" onClick={this.next} />
              <a className="btn-prev" onClick={this.previous} />
              <Slider
                ref={(c) => (this.slider = c)}
                {...sliderProps.training}
                id="training-carousel"
                className="owl-3-cols  wow fadeInRight"
              >
                <div className="relative">
                  <div className="hover relative overflow-hidden mb-4 text-light">
                    <div className="abs bg-dark w-60px h-60px z-2 fs-24 fw-bold text-center pt10 id-color">
                      01
                    </div>
                    <a href="#" className="overflow-hidden d-block relative">
                      <img
                        src="05_images/training/1.jpg"
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                      <div className="hover-op-0 abs bottom-0 mb-2 w-100 p-4 text-white text-center">
                        <h4 className="mb-0">Strong Start</h4>
                      </div>
                    </a>
                  </div>
                  <p>
                    This program is designed to introduce beginners to the
                    fundamentals of strength training and cardiovascular
                    conditioning.
                  </p>
                </div>
                <div className="relative">
                  <div className="hover relative overflow-hidden mb-4 text-light">
                    <div className="abs bg-dark w-60px h-60px z-2 fs-24 fw-bold text-center pt10 id-color">
                      02
                    </div>
                    <a href="#" className="overflow-hidden d-block relative">
                      <img
                        src="05_images/training/2.jpg"
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                      <div className="hover-op-0 abs bottom-0 mb-2 w-100 p-4 text-white text-center">
                        <h4 className="mb-0">Fit &amp; Fierce</h4>
                      </div>
                    </a>
                  </div>
                  <p>
                    {" "}
                    A dynamic, results-driven program aimed at transforming your
                    body in just six weeks. This plan combines high-intensity
                    interval training.
                  </p>
                </div>
                <div className="relative">
                  <div className="hover relative overflow-hidden mb-4 text-light">
                    <div className="abs bg-dark w-60px h-60px z-2 fs-24 fw-bold text-center pt10 id-color">
                      03
                    </div>
                    <a href="#" className="overflow-hidden d-block relative">
                      <img
                        src="05_images/training/3.jpg"
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                      <div className="hover-op-0 abs bottom-0 mb-2 w-100 p-4 text-white text-center">
                        <h4 className="mb-0">Core &amp; More</h4>
                      </div>
                    </a>
                  </div>
                  <p>
                    Specially designed to target core strength and stability,
                    emphasizes exercises that improve posture, balance, and
                    overall strength.
                  </p>
                </div>
                <div className="relative">
                  <div className="hover relative overflow-hidden mb-4 text-light">
                    <div className="abs bg-dark w-60px h-60px z-2 fs-24 fw-bold text-center pt10 id-color">
                      04
                    </div>
                    <a href="#" className="overflow-hidden d-block relative">
                      <img
                        src="05_images/training/4.jpg"
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                      <div className="hover-op-0 abs bottom-0 mb-2 w-100 p-4 text-white text-center">
                        <h4 className="mb-0">Peak Performance</h4>
                      </div>
                    </a>
                  </div>
                  <p>
                    Inspired by athletic training regimens, this program focuses
                    on improving functional strength, agility, and endurance.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
