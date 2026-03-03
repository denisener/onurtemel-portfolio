const CodingSkills = ({
  title = "Coding Skills",
  skills = [
    { name: "HTML", value: "80%" },
    { name: "CSS", value: "70%" },
    { name: "BOOTSTRAP", value: "82%" },
    { name: "JAVASCRIPT", value: "62%" },
    { name: "PHP", value: "90%" },
    { name: "REACT", value: "85%" },
  ],
}) => {
  return (
    <section className="no-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-2">
            <div className="subtitle wow fadeInUp" data-wow-delay=".3s">
              {title}
            </div>
          </div>
          <div className="col-lg-10">
            <div className="row g-4 gx-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="col-md-6 wow fadeInRight"
                  data-wow-delay={`.${index + 4}s`}
                >
                  <div className="d-skills-bar">
                    <div className="d-bar">
                      <div className="d-skill" data-value={skill.value}>
                        <div className="d-info">
                          <span>{skill.name}</span>
                        </div>
                        <div className="d-progress-line">
                          <span className="d-fill-line" />
                        </div>
                      </div>
                    </div>
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

export default CodingSkills;
