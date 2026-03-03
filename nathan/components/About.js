import Counter from "./Counter";

const About = ({ variant = "default", aboutTitle = "About Me", personalInfo }) => {
  const isVariant2 = variant === "variant2";

  const content = {
    default: {
      title: personalInfo?.aboutTitle ||
        "Transforming your vision into a dynamic web experience through meticulously crafted designs, intuitive user interfaces, and robust functionality.",
      paragraph1: personalInfo?.bio1 ||
        "Hi there! I'm Nathan, a web designer with a passion for creating exceptional digital experiences. With over 15 years in the industry, I have skills in designing websites that are not only visually appealing but also functional and user-friendly.",
      paragraph2: personalInfo?.bio2 ||
        "I specialize in crafting bespoke websites using the latest technologies and design trends, including HTML5, CSS3, JavaScript, and popular content management systems like WordPress, Joomla, and Shopify.",
    },
    variant2: {
      title: (
        <>
          <span className="color-2">Transforming faces</span>, one brushstroke
          at a time—where artistry meets{" "}
          <span className="color-1">passion</span>, and every look is a
          masterpiece crafted to reveal the beauty within.
        </>
      ),
      paragraph1:
        "I believe that makeup is more than just a tool—it's a form of self-expression, confidence, and empowerment. Whether you're looking for a subtle, natural look or something bold and dramatic, my mission is to bring your beauty aspirations to life.",
      paragraph2:
        "Over the years, I've had the honor of working with a diverse range of clients, from brides on their big day to models on set, and everyday individuals who just want to feel their best. My work is influenced by the dynamic energy of New York",
    },
  };

  const selectedContent = isVariant2 ? content.variant2 : content.default;

  return (
    <section className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              {aboutTitle}
            </div>
          </div>
          <div className="col-lg-10">
            <h2 className="lh-1  wow fadeInUp" data-wow-delay=".4s">
              {selectedContent.title}
            </h2>
            <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="col-sm-6">
                <p>{selectedContent.paragraph1}</p>
              </div>
              <div className="col-sm-6">
                <p>{selectedContent.paragraph2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

export const About2 = () => {
  return (
    <section id="section-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="subtitle wow fadeInUp">Brandon Photography</div>
            <div className="d-flex justify-content-between">
              <h2 className="wow fadeInUp">About Me</h2>
              <h2 className="op-4">02</h2>
            </div>
          </div>
          <div className="col-md-10">
            <p className="wow fadeInUp">
              Hi, I’m Brandon, a passionate photographer dedicated to capturing
              the essence of life’s most meaningful moments. With a keen eye for
              detail and a deep appreciation for the art of storytelling, I
              specialize in creating Whether it’s a wedding, a family portrait,
              or a candid moment, my goal is to transform your memories into
              timeless works of art. Let’s work together to preserve your
              stories in a way that you’ll cherish for years to come.
            </p>
            <img
              src="04_images/signature.png"
              className="w-30 wow fadeInUp"
              alt="image"
            />
            <div className="fs-14 mt-3 wow fadeInUp">Brandon Smith</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About3 = () => {
  return (
    <section id="section-about" className="jarallax">
      <div className="de-gradient-edge-top dark" />
      <div className="de-gradient-edge-bottom dark" />
      <img src="05_images/bg-2.jpg" className="jarallax-img" alt="image" />
      <div className="container relative z-2">
        <div className="row g-4 justify-content-end">
          <div className="col-lg-6">
            <h2 className="wow fadeInLeft">
              About <span className="id-color">Me</span>
            </h2>
            <p className="wow fadeInRight">
              Hi, I’m Raymond, a certified personal trainer with a passion for
              helping people achieve their fitness goals and transform their
              lives. With 15 of experience in the fitness industry, I specialize
              in creating customized workout programs that are tailored to your
              unique needs, whether you’re just starting your fitness journey or
              looking to take your training to the next level.
            </p>
            <p className="wow fadeInRight">
              My approach to fitness goes beyond just workouts—it's about
              building a sustainable lifestyle that promotes overall health and
              well-being. I believe in the power of consistency, motivation, and
              proper guidance, which is why I’m committed to supporting you
              every step of the way. Together, we’ll set realistic goals, push
              past your limits, and celebrate every achievement, big or small.
            </p>
            <div className="spacer-10" />
            <div className="row g-4">
              {[
                { count: 250, label: "Happy Clients" },
                { count: 15, label: "Years Experience" },
                { count: 8, label: "Certifications" },
              ].map((item, index) => (
                <div key={index} className="col-sm-4">
                  <div className="de_count wow fadeInRight">
                    <h3 className="fs-36 mb-1">
                      <span className="timer">
                        <Counter end={item.count} />
                      </span>
                    </h3>
                    <div className="fs-15 id-color">{item.label}</div>
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

export const About4 = ({ bgColor = "bg-dark-2" }) => {
  return (
    <section className="no-top px-4">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-xl-6">
            <div
              className="relative jarallax auto-height rounded-1 overflow-hidden wow fadeInUp"
              data-wow-delay=".6s"
            >
              <img
                src="images/misc/3.webp"
                className="jarallax-img"
                alt="image"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="relative rounded-1 overflow-hidden p-lg-5 p-4 wow bg-color h-100 fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="align-middle">
                <div className="subtitle">About Me</div>
                <h2>
                  Transforming your vision into a dynamic web experience through
                  meticulously crafted designs, intuitive user interfaces, and
                  robust functionality.
                </h2>
              </div>
            </div>
          </div>
          {[
            { count: 8240, label: "Hours of Works", delay: ".0s" },
            { count: 315, label: "Projects Done", delay: ".2s" },
            { count: 250, label: "Satisfied Customers", delay: ".4s" },
            { count: 32, label: "Awards Winning", delay: ".6s" },
          ].map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className={`de_count ${bgColor} py-4 rounded-1 text-center fs-15 wow fadeInRight`}
                data-wow-delay={item.delay}
              >
                <h3 className="fs-48 mb-1">
                  <span
                    className="timer"
                    data-to={item.count}
                    data-speed={3000}
                  >
                    <Counter end={item.count} />
                  </span>
                </h3>
                <div className="fs-15">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About5 = () => {
  return (
    <section id="section-about">
      <div className="container relative z-2">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4">
            <h2 className="wow fadeInLeft">
              About
              <br />
              <span className="text-line">Romano</span>
            </h2>
          </div>
          <div className="col-lg-8">
            <p>
              Chef Romano is a passionate culinary artist with a flair for
              creating unforgettable dining experiences. With years of expertise
              in both classic and modern cuisine, he brings bold flavors and
              innovative techniques to every dish. Inspired by the freshest
              ingredients and a love for food, Chef Romano combines tradition
              with creativity to craft meals that tantalize the senses. Whether
              it's a private dinner, event catering, or an intimate culinary
              journey, Chef Romano's dedication to excellence ensures that every
              bite is a masterpiece.
            </p>
            <div className="spacer-single" />
            <div className="row g-4">
              {[
                { count: 250, label: "Happy Clients", delay: "0s" },
                { count: 15, label: "Years Experience", delay: "0.2s" },
                { count: 8, label: "Certificate Chef", delay: "0.4s" },
              ].map((item, index) => (
                <div key={index} className="col-sm-4">
                  <div
                    className="de_count wow fadeInRight"
                    data-wow-delay={item.delay}
                  >
                    <h3 className="fs-36 mb-1">
                      <span
                        className="timer"
                        data-to={item.count}
                        data-speed={3000}
                      >
                        <Counter end={item.count} />
                      </span>
                    </h3>
                    <div className="fs-15 id-color">{item.label}</div>
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
