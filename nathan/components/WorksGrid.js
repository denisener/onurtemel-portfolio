"use client";
import { useState } from "react";
import WorkCard from "./WorkCard";
import WorksFilter from "./WorksFilter";

const WorksGrid = ({ projects = [] }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "photo")
      return project.projectType === "photo" || project.projectType === "mixed";
    if (activeFilter === "video")
      return project.projectType === "video" || project.projectType === "mixed";
    return true;
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <WorksFilter
              onFilterChange={setActiveFilter}
              activeFilter={activeFilter}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 wow fadeInUp" data-wow-delay=".3s">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <WorkCard key={project._id} project={project} />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted">
                {activeFilter === "photo"
                  ? "Henüz fotoğraf projesi eklenmemiş."
                  : activeFilter === "video"
                  ? "Henüz video projesi eklenmemiş."
                  : "Henüz proje eklenmemiş."}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorksGrid;
