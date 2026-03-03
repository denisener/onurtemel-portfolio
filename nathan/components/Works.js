import Link from "next/link";

const Works = ({ variant = "default", textColor = "light-text" }) => {
  const worksData = {
    default: [
      {
        title: "Adidas",
        image: "images/works/1.webp",
        tag: "E-COMMERCE WEBSITE",
        year: "2024",
      },
      {
        title: "WWF",
        image: "images/works/2.webp",
        tag: "CUSTOM WEBSITE DESIGN",
        year: "2023",
      },
      {
        title: "Honda",
        image: "images/works/3.webp",
        tag: "FRONT-END DEVELOPMENT",
        year: "2022",
      },
    ],
    variant2: [
      {
        title: "Elegance",
        image: "03_images/portfolio/1.jpg",
        tag: "Bridal Makeup",
        year: "2024",
      },
      {
        title: "Vibrant",
        image: "03_images/portfolio/2.jpg",
        tag: "Special Event Makeup",
        year: "2024",
      },
      {
        title: "Glamour",
        image: "03_images/portfolio/3.jpg",
        tag: "Hair Extension",
        year: "2024",
      },
    ],
  };

  const isVariant2 = variant === "variant2";
  const works = isVariant2 ? worksData.variant2 : worksData.default;

  const sectionContent = {
    default: {
      title:
        "Explore the projects below to see how I bring ideas to life through thoughtful design and meticulous execution.",
      className: "no-top text-light",
    },
    variant2: {
      title: (
        <>
          My portfolio <span className="color-2">showcases</span> a journey of{" "}
          <span className="color-1">creativity</span>, from timeless bridal
          elegance to bold editorial statements
        </>
      ),
      className: "no-top",
    },
  };

  const selectedContent = isVariant2
    ? sectionContent.variant2
    : sectionContent.default;

  return (
    <section className={selectedContent.className}>
      <div className="container">
        <div className="row g-4 gx-5">
          <div className="col-lg-2  ">
            <div
              className={`subtitle ms-3 wow fadeInUp ${textColor}`}
              data-wow-delay=".3s"
            >
              Works
            </div>
          </div>
          <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
            <h2 className={textColor}>{selectedContent.title}</h2>
          </div>
        </div>
        <div className="spacer-single" />
      </div>
      <div className="container">
        <div className="row g-4 wow fadeInRight" data-wow-delay=".5s">
          {works.map((work, index) => (
            <div key={index} className="col-lg-4">
              <div
                className={`hover relative overflow-hidden ${
                  isVariant2 ? "" : "text-light"
                }`}
              >
                <Link
                  href={isVariant2 ? "03_work-single" : "work-single"}
                  className="overflow-hidden d-block relative"
                >
                  <h2
                    className={`fs-40 abs-centered z-index-1 hover-op-0 ${
                      isVariant2 ? "text-white text-center" : ""
                    }`}
                  >
                    {work.title}
                  </h2>
                  <img
                    src={work.image}
                    className="img-fluid hover-scale-1-2"
                    alt="image"
                  />
                  <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
                    <div className={isVariant2 ? "" : "d-tag-s2"}>
                      {isVariant2 ? <h4>{work.tag}</h4> : work.tag}
                    </div>
                    <div className={isVariant2 ? "" : "fw-bold"}>
                      {work.year}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;

export const Works2 = () => {
  const works = [
    {
      title: "Samantha",
      image: "04_images/works/1.jpg",
      category: "Portrait Photography",
    },
    {
      title: "Surfing",
      image: "04_images/works/2.jpg",
      category: "Lifestyle Photography",
    },
    {
      title: "Emma & Jose",
      image: "04_images/works/3.jpg",
      category: "Wedding Photography",
    },
    {
      title: "Avenue 33",
      image: "04_images/works/4.jpg",
      category: "Commercial Photography",
    },
    {
      title: "The Concert",
      image: "04_images/works/5.jpg",
      category: "Event Photography",
    },
    {
      title: "Black Horse",
      image: "04_images/works/6.jpg",
      category: "Custom Photography",
    },
  ];

  return (
    <section id="section-works">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subtitle wow fadeInUp">Brandon Photography</div>
            <div className="d-flex justify-content-between mb-3">
              <h2 className="wow fadeInUp">Works</h2>
              <h2 className="op-4">04</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-0 wow fadeInRight" data-wow-delay=".5s">
          {works.map((work, index) => (
            <div key={index} className="col-lg-4">
              <div className="hover relative overflow-hidden text-light">
                <a
                  href={work.image}
                  className="overflow-hidden d-block relative image-popup-fit-width"
                >
                  <h2 className="fs-32 abs-centered z-index-1 hover-op-0">
                    {work.title}
                  </h2>
                  <img
                    src={work.image}
                    className="img-fluid hover-scale-1-2"
                    alt="image"
                  />
                  <div className="fs-14 hover-op-0 absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
                    {work.category}
                    <div className="fw-bold">2024</div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Works3 = ({ url = "06_work-single" }) => {
  const works = [
    {
      title: "Featured Works",
      description:
        "How I bring ideas to life through thoughtful design and execution.",
      isHeader: true,
    },
    {
      title: "Adidas",
      category: "E-Commerce Website",
      image: "images/works/1.webp",
      year: "2024",
    },
    {
      title: "WWF",
      category: "Custom Website Development",
      image: "images/works/2.webp",
      year: "2023",
    },
  ];

  return (
    <section className="no-top px-4">
      <div className="container-fluid">
        <div className="row g-4 wow fadeInRight" data-wow-delay=".5s">
          {works.map((work, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              {work.isHeader ? (
                <div className="p-lg-5 p-4 bg-color h-100 rounded-1">
                  <div className="subtitle">{work.title}</div>
                  <h2>{work.description}</h2>
                </div>
              ) : (
                <div className="bg-dark-2 rounded-1 overflow-hidden">
                  <div className="hover relative overflow-hidden text-light">
                    <Link
                      href={url}
                      className="overflow-hidden d-block relative"
                    >
                      <img
                        src={work.image}
                        className="img-fluid hover-scale-1-2"
                        alt="image"
                      />
                    </Link>
                    <div className="p-4 d-flex justify-content-between align-items-center">
                      <div>
                        <h3 className="mb-0 lh-1-2">{work.title}</h3>
                        <span className="fs-14">{work.category}</span>
                      </div>
                      <div className="fw-bold">{work.year}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
