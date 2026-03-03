import Marquee from "react-fast-marquee";

const MarqueeNathan = ({
  textColor = "light",
  variant = "default",
  texts,
  marqueeData = [
    { id: 1, text: "CUSTOM WEBSITE DESIGN", stroke: false },
    { id: 2, text: "E-COMMERCE WEBSITE", stroke: true },
    { id: 3, text: "LANDING PAGE DESIGN", stroke: false },
    { id: 4, text: "FRONT-END DEVELOPMENT", stroke: true },
    { id: 5, text: "BACK-END DEVELOPMENT", stroke: false },
    { id: 6, text: "CONTENT MANAGEMENT SYSTEM", stroke: true },
  ],
}) => {
  const isVariant2 = variant === "variant2";
  const items = isVariant2 ? marqueeData.variant2 : marqueeData.default;

  // CMS'den gelen texts varsa, marqueeData'yı oluştur
  const finalMarqueeData = texts && texts.length > 0
    ? texts.map((text, i) => ({ id: i + 1, text, stroke: i % 2 === 1 }))
    : marqueeData;

  return (
    <section className={`text-${isVariant2 ? "dark" : textColor} no-top`}>
      <div className="wow fadeInRight d-flex">
        <div className="de-marquee-list wow">
          <Marquee
            className=""
            speed={200}
            loop={0}
            play={true}
            autoFill={true}
          >
            {finalMarqueeData.map((item) => (
              <span
                key={item.id}
                className={`d-item-txt ${item.stroke ? "stroke-text" : ""}`}
              >
                {item.text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MarqueeNathan;

export const MarqueeNathan2 = () => {
  return (
    <section className="bg-color text-dark no-top no-bottom">
      <div className="wow fadeInRight d-flex">
        <div className="de-marquee-list wow">
          <Marquee
            className=""
            speed={200}
            loop={0}
            play={true}
            autoFill={true}
          >
            {[
              "Strength",
              "Confidence",
              "Transformation",
              "Empower",
              "Motivate",
              "Achieve",
              "Fit",
              "Focused",
              "Unstoppable",
            ].map((text, index) => (
              <span key={index} className="d-item-txt">
                {text}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export const MarqueeNathan3 = () => {
  return (
    <div className="wow fadeInRight d-flex mt-20">
      <div className="de-marquee-list wow bg-color pt-2 pb-10 lh-1 text-dark text-uppercase fs-60 fw-600 xs-hide">
        <Marquee
          speed={200}
          loop={0}
          play={true}
          autoFill={true}
          className="d-item"
        >
          {[
            "Masterpiece",
            "Savor",
            "Artisan",
            "Crafted",
            "Delicious",
            "Gourmet",
            "Essence",
            "Exquisite",
            "Fusion",
            "Temptation",
          ].map((word, index) => (
            <span key={index} className="mx-3">
              {word}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
