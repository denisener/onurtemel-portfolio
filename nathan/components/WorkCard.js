import Link from "next/link";
import { getImageUrl } from "@/lib/helpers";

const WorkCard = ({ project }) => {
  const typeIcon = {
    photo: "📷",
    video: "🎬",
    mixed: "📷🎬",
  };

  const isVideo = project.projectType === "video" || project.projectType === "mixed";

  return (
    <div className="col-lg-4">
      <div className="hover relative overflow-hidden text-light">
        <Link
          href={`/works/${project.slug?.current || project.slug || "#"}`}
          className="overflow-hidden d-block relative"
        >
          {/* Proje tipi badge */}
          <span
            className="absolute top-0 end-0 p-3 z-index-1"
            style={{ fontSize: "20px", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            {typeIcon[project.projectType] || "📷"}
          </span>

          {/* Video ise play ikonu overlay */}
          {isVideo && (
            <div
              className="abs-centered z-index-1"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}

          <img
            src={getImageUrl(project.coverImage)}
            className="img-fluid hover-scale-1-2"
            alt={project.title}
          />
          <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
            <div className="d-tag-s2">{project.category}</div>
            <div className="fw-bold">{project.year}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
