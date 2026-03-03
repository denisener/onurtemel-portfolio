const Skills = () => {
  const skillsData = [
    { name: "Figma", image: "figma.webp", delay: ".4s" },
    { name: "Photoshop", image: "photoshop.webp", delay: ".5s" },
    { name: "Sketch", image: "sketch.webp", delay: ".6s" },
    { name: "Adobe XD", image: "xd.webp", delay: ".7s" },
  ];

  return (
    <section className="no-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              My Skills
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row g-4 gx-5">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="col-sm-3 col-6 wow fadeInRight"
                  data-wow-delay={skill.delay}
                >
                  <div className="text-center">
                    <img
                      src={`images/logo/${skill.image}`}
                      className="w-80px mb-3"
                      alt={skill.name}
                    />
                    <h4>{skill.name}</h4>
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

export default Skills;
