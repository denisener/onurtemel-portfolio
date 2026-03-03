import Link from "next/link";
import WorkCard from "./WorkCard";

const HomeWorks = ({ projects = [] }) => {
  return (
    <section className="no-top text-light">
      <div className="container">
        <div className="row g-4 gx-5">
          <div className="col-lg-2">
            <div
              className="subtitle ms-3 wow fadeInUp light-text"
              data-wow-delay=".3s"
            >
              Works
            </div>
          </div>
          <div className="col-lg-10 wow fadeInUp" data-wow-delay=".4s">
            <h2 className="light-text">
              Explore the projects below to see how I bring ideas to life
              through thoughtful design and meticulous execution.
            </h2>
          </div>
        </div>
        <div className="spacer-single" />
      </div>
      <div className="container">
        <div className="row g-4 wow fadeInRight" data-wow-delay=".5s">
          {projects.map((project) => (
            <WorkCard key={project._id} project={project} />
          ))}
        </div>
        <div className="spacer-single" />
        <div className="text-center">
          <Link href="/works" className="btn-line">
            View All Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWorks;
