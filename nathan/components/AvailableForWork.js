import Link from "next/link";
import CounterSection from "./CounterSection";

const AvailableForWork = ({ variant = "default", personalInfo, showStats = true }) => {
  const isVariant2 = variant === "variant2";

  const content = {
    default: {
      subtitle: personalInfo?.subtitle || "Available for Work",
      title: personalInfo?.title || "A Website Designer from New York",
      description: personalInfo?.bio1 ||
        "My journey into web design started with a love for both art and technology, which led me to pursue a career where I could blend these interests seamlessly.",
      aboutLink: "/about",
      imageSrc: personalInfo?.profileImage || "images/misc/1.webp",
      counterColor: "color",
      stats: personalInfo?.stats,
    },
    variant2: {
      subtitle: "Available for Work",
      title: (
        <>
          <span className="color-1">Hair</span> and{" "}
          <span className="color-1">Makeup</span> Artist from New York
        </>
      ),
      description:
        "Hi, I'm Selena, a passionate makeup artist based in the heart of New York City. With over 12 years of experience in the beauty industry, I've had the privilege of working with a diverse clientele.",
      aboutLink: "/03_about",
      imageSrc: "03_images/profile_pic_1.jpg",
      counterColor: "color-1",
    },
  };

  const selectedContent = isVariant2 ? content.variant2 : content.default;

  return (
    <div className="container">
      <div className="spacer-double d-lg-none d-sm-block" />
      <div className="row align-items-center g-4 gx-5">
        <div className="col-lg-6">
          <div className="relative">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              {selectedContent.subtitle}
            </div>
            <h1 className="lh-1 wow fadeInUp" data-wow-delay=".4s">
              {selectedContent.title}
            </h1>
          </div>
          <p className="lead wow fadeInUp" data-wow-delay=".5s">
            {selectedContent.description}
          </p>
          <div className="spacer-10" />
          <Link
            className="w-150px btn-line wow fadeIn"
            data-wow-delay=".6s"
            href={selectedContent.aboutLink}
          >
            About Me
          </Link>
        </div>
        <div className="col-lg-6">
          <img
            src={selectedContent.imageSrc}
            className="w-100 wow fadeInUp"
            data-wow-delay=".6s"
            alt="image"
          />
        </div>
      </div>
      <div className="spacer-double" />
      {showStats !== false && (
        <CounterSection color={selectedContent.counterColor} stats={selectedContent.stats} />
      )}
    </div>
  );
};

export default AvailableForWork;
