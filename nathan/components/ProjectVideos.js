"use client";
import { useState } from "react";
import ReactPlayer from "react-player";
import { getYouTubeThumbnail } from "@/lib/helpers";

const ProjectVideos = ({ videos = [] }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  if (!videos || videos.length === 0) return null;

  return (
    <>
      {/* Aktif video oynatıcı */}
      {activeVideo && (
        <div className="row g-4 mb-4 wow fadeInUp" data-wow-delay=".6s">
          <div className="col-12">
            <div
              style={{
                position: "relative",
                paddingTop: "56.25%",
                background: "#000",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <ReactPlayer
                url={activeVideo}
                playing={true}
                controls={true}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Video listesi (thumbnail grid) */}
      <div className="row g-4 wow fadeInUp" data-wow-delay=".7s">
        {videos.map((video, index) => {
          const thumbnail =
            video.thumbnailPath ||
            getYouTubeThumbnail(video.youtubeUrl);

          return (
            <div key={index} className="col-lg-6">
              <div
                className="hover relative overflow-hidden text-light"
                style={{ cursor: "pointer" }}
                onClick={() => setActiveVideo(video.youtubeUrl)}
              >
                <div className="overflow-hidden d-block relative">
                  {/* Play Butonu Overlay */}
                  <div
                    className="abs-centered z-index-1"
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "rgba(255, 0, 0, 0.85)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Thumbnail */}
                  <img
                    src={thumbnail}
                    className="img-fluid hover-scale-1-2"
                    alt={video.title || "video thumbnail"}
                    style={{
                      width: "100%",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />

                  {/* Alt bilgi */}
                  <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-0">{video.title || "Video"}</h5>
                    </div>
                    {video.duration && (
                      <div
                        className="fw-bold"
                        style={{
                          background: "rgba(0,0,0,0.6)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontSize: "13px",
                        }}
                      >
                        {video.duration}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectVideos;
