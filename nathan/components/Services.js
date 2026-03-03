const Services = ({ variant = "default", services: cmsServices }) => {
  const servicesData = {
    default: [
      {
        title: "Custom Website Design",
        desc: "Tailored websites to match your brand's unique identity and goals.",
      },
      {
        title: "E-commerce Website",
        desc: "Creating user-friendly online stores with secure payment gateways.",
      },
      {
        title: "Landing Page Design",
        desc: "High-conversion landing pages for specific marketing campaigns.",
      },
      {
        title: "Front-end Development",
        desc: "Implementing designs with clean and efficient code using HTML, CSS, JS.",
      },
      {
        title: "Back-end Development",
        desc: "Building robust back-end systems using technologies like PHP and databases.",
      },
      {
        title: "Content Management System",
        desc: "Integrating and customizing CMS platforms for easy content management.",
      },
    ],
    variant2: [
      {
        title: "Bridal Makeup",
        desc: "Tailored to make you look stunning on your big day, with long-lasting products and a flawless finish.",
      },
      {
        title: "Special Event Makeup",
        desc: "Perfect for proms, galas, or any special occasion where you want to shine.",
      },
      {
        title: "Photoshoot Makeup",
        desc: "High-definition makeup designed to look impeccable under camera lights, suitable for editorial, fashion, and personal photoshoots.",
      },
      {
        title: "Hair Extensions",
        desc: "Temporary extensions for added length or volume, perfect for special events or photo shoots.",
      },
      {
        title: "Creative Hair Styling",
        desc: "Unique and artistic styles for fashion shows, editorial shoots, and themed events.",
      },
      {
        title: "On-Location Services",
        desc: "Available for weddings, events, and photoshoots, bringing professional hair and makeup to your doorstep.",
      },
    ],
  };

  const isVariant2 = variant === "variant2";

  // CMS'den gelen servisler varsa onları kullan, yoksa statik veri
  let services;
  if (cmsServices && cmsServices.length > 0 && !isVariant2) {
    services = cmsServices.map((s) => ({ title: s.title, desc: s.description }));
  } else {
    services = isVariant2 ? servicesData.variant2 : servicesData.default;
  }

  return (
    <section className="no-top">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 wow fadeInRight" data-wow-delay=".3s">
            <div className="p-3 h-100 d-lg-block d-sm-none text-light jarallax">
              <img
                src={
                  isVariant2
                    ? "03_images/what_i_do_1.jpg"
                    : "images/misc/2.webp"
                }
                className="jarallax-img"
                alt="image"
              />
              <h3 className="abs-centered m-0">What I Do</h3>
            </div>
            <div className="subtitle d-lg-none d-sm-block">What I Do</div>
          </div>
          <div className="col-lg-8">
            <div className="row g-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-sm-6 wow fadeInRight"
                  data-wow-delay={`.${index + 4}s`}
                >
                  <div className="relative">
                    <h4 className={isVariant2 ? "color-1" : ""}>
                      {service.title}
                    </h4>
                    <p>{service.desc}</p>
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

export default Services;

export const Services2 = () => {
  const services = [
    {
      title: "Wedding Photography",
      desc: "Capture every moment of your special day, from quiet anticipation to joyful celebration.",
    },
    {
      title: "Portrait Photography",
      desc: "Tailored sessions to showcase your personality and style, for professional or personal use.",
    },
    {
      title: "Event Photography",
      desc: "Document important life achievements and celebrations with vibrant, candid photos.",
    },
    {
      title: "Commercial Photography",
      desc: "High-quality product images for e-commerce, catalogs, and marketing materials.",
    },
    {
      title: "Lifestyle Photography",
      desc: "Natural, unposed sessions capturing authentic moments of your everyday life.",
    },
    {
      title: "Custom Photography",
      desc: "Specialized photography services tailored to your unique vision and needs.",
    },
  ];

  return (
    <section id="section-what-i-do">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subtitle wow fadeInUp">Brandon Photography</div>
            <div className="d-flex justify-content-between">
              <h2 className="wow fadeInUp">What I Do</h2>
              <h2 className="op-4">03</h2>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row g-4 gx-5">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 wow fadeInUp">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
