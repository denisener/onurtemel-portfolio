"use client";
import { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import ProjectVideos from "./ProjectVideos";

const MixedTabsClient = ({ project }) => {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <div>
      {/* Tab Butonları */}
      <div className="d-flex gap-3 mb-4">
        <button
          className={`btn btn-sm ${
            activeTab === "photos"
              ? "btn-light text-dark"
              : "btn-outline-light"
          } rounded-pill px-4`}
          onClick={() => setActiveTab("photos")}
          style={{
            transition: "all 0.3s ease",
            border:
              activeTab === "photos"
                ? "none"
                : "1px solid rgba(255,255,255,0.3)",
          }}
        >
          📷 Fotoğraflar ({project.gallery?.length || 0})
        </button>
        <button
          className={`btn btn-sm ${
            activeTab === "videos"
              ? "btn-light text-dark"
              : "btn-outline-light"
          } rounded-pill px-4`}
          onClick={() => setActiveTab("videos")}
          style={{
            transition: "all 0.3s ease",
            border:
              activeTab === "videos"
                ? "none"
                : "1px solid rgba(255,255,255,0.3)",
          }}
        >
          🎬 Videolar ({project.videos?.length || 0})
        </button>
      </div>

      {/* Tab İçeriği */}
      {activeTab === "photos" && (
        <ProjectGallery gallery={project.gallery} />
      )}
      {activeTab === "videos" && (
        <ProjectVideos videos={project.videos} />
      )}
    </div>
  );
};

export default MixedTabsClient;
