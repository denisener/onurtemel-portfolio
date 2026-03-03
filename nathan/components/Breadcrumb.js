import { Fragment } from "react";

const Breadcrumb = ({
  title = "Nathan<br>Alexander",
  subtitle = "Available for Work",
  style = 1,
}) => {
  return (
    <section id="subheader">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h1
              className="fs-120 fs-xs-60 text-resize-h1 lh-0-75 mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <h4
              className={`id-color ${
                style === 2 ? "bg-dark d-inline rounded-20 p-1 px-3 fs-16" : ""
              }`}
            >
              {subtitle}
            </h4>
            <div className="spacer-single" />
          </div>
        </div>
      </div>
      {style === 2 && (
        <Fragment>
          <div className="sc-icons dark abs abs-middle end-0 me-4">
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fa-brands fa-x-twitter" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
          <img
            src="images/misc/scratches-1.webp"
            className="w-20 ms-4 abs abs-middle"
            alt="image"
          />
          <img
            src="images/misc/scratches-2.webp"
            className="w-20 me-5 abs top-0 end-0"
            alt="image"
          />
        </Fragment>
      )}
    </section>
  );
};
export default Breadcrumb;
