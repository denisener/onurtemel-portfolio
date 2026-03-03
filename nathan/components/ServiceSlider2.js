"use client";
import { sliderProps } from "@/utility/sliderprops";
import { Component } from "react";
import Slider from "react-slick";

export default class ServiceSlider2 extends Component {
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
      <section id="section-services" className="relative p-4">
        <div className="container-fluid">
          <div className="row g-0">
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
                className="owl-3-cols wow fadeInRight"
              >
                <div className="relative">
                  <div className="hover relative overflow-hidden mb-2 text-light rounded-1">
                    <a href="#" className="overflow-hidden d-block relative">
                      <img
                        src="08_images/services/1.jpg"
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                      <div className="hover-op-0 abs bottom-0 mb-2 w-100 p-4 text-white text-center z-2">
                        <h4 className="mb-0">Personal Chef Services</h4>
                      </div>
                      <div className="de-gradient-edge-bottom dark" />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="hover relative overflow-hidden mb-2 text-light rounded-1">
                    <a href="#" className="overflow-hidden d-block relative">
                      <img
                        src="08_images/services/2.jpg"
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                      <div className="hover-op-0 abs bottom-0 mb-2 w-100 p-4 text-white text-center z-2">
                        <h4 className="mb-0">Private Dinner Parties</h4>
                      </div>
                      <div className="de-gradient-edge-bottom dark" />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="hover relative overflow-hidden mb-2 text-light rounded-1">
                    <a href="#" className="overflow-hidden d-block relative">
                      <img
                        src="08_images/services/3.jpg"
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                      <div className="hover-op-0 abs bottom-0 mb-2 w-100 p-4 text-white text-center z-2">
                        <h4 className="mb-0">Catering for Events</h4>
                      </div>
                      <div className="de-gradient-edge-bottom dark" />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="hover relative overflow-hidden mb-2 text-light rounded-1">
                    <a href="#" className="overflow-hidden d-block relative">
                      <img
                        src="08_images/services/4.jpg"
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                      <div className="hover-op-0 abs bottom-0 mb-2 w-100 p-4 text-white text-center z-2">
                        <h4 className="mb-0">Cooking Classes</h4>
                      </div>
                      <div className="de-gradient-edge-bottom dark" />
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
