const SectionWhy = () => {
  const reasons = [
    {
      title: "Personalized Approach",
      description:
        "Customized workout plans tailored to your specific needs, goals, and preferences.",
    },
    {
      title: "Proven Results",
      description:
        "15 years of experience helping clients of all ages and fitness levels achieve their goals.",
    },
    {
      title: "Support and Motivation",
      description:
        "Building strong relationships, providing support, and pushing you to reach your full potential.",
    },
    {
      title: "Comprehensive Fitness Knowledge",
      description:
        "Guidance on workouts, nutrition, recovery, and lifestyle changes for holistic success.",
    },
    {
      title: "Flexible and Adaptable",
      description:
        "Flexible training schedules and adaptable to your changing needs, including in-person and online options.",
    },
    {
      title: "Holistic Focus",
      description:
        "Focusing on both physical fitness and mental well-being to help you feel stronger and more confident.",
    },
  ];

  return (
    <section id="section-why" className="no-bottom">
      <div className="container">
        <div className="row g-4 mb-2">
          <div className="col-lg-12">
            <h2 className="wow fadeInLeft">
              Why Choose <span className="id-color">Me</span>
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div key={index} className="col-lg-6 col-md-6 wow fadeInUp">
              <div className="relative">
                <i className="w-60px bg-color fa fa-check text-dark fs-48 rounded-1 p-2 abs start-0" />
                <div className="ms-80">
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SectionWhy;
