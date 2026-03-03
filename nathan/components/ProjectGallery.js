"use client";
import { useState } from "react";
import { getImageUrl } from "@/lib/helpers";

const ProjectGallery = ({ gallery = [] }) => {
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <>
      <div className="row g-4 wow fadeInUp" data-wow-delay=".7s">
        {gallery.map((item, index) => (
          <div key={index} className="col-lg-6">
            <div className="hover relative overflow-hidden text-light">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setLightboxImg(getImageUrl(item.imagePath));
                }}
                className="overflow-hidden d-block relative"
              >
                <img
                  src={getImageUrl(item.imagePath)}
                  className="img-fluid hover-scale-1-2"
                  alt={item.alt || "project image"}
                />
                {item.caption && (
                  <div className="absolute bottom-0 w-100 p-4 d-flex text-white justify-content-between">
                    <div className="d-tag-s2">{item.caption}</div>
                  </div>
                )}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <>
          <div
            className="mfp-bg mfp-ready"
            onClick={() => setLightboxImg(null)}
            style={{ position: "fixed", inset: 0, zIndex: 10000 }}
          />
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
            tabIndex={-1}
            style={{
              overflow: "hidden auto",
              position: "fixed",
              inset: 0,
              zIndex: 10001,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setLightboxImg(null)}
          >
            <div
              className="mfp-container mfp-s-ready mfp-img-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mfp-content">
                <div className="mfp-iframe-scaler" style={{ position: "relative" }}>
                  <button
                    type="button"
                    className="mfp-close"
                    onClick={() => setLightboxImg(null)}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      zIndex: 10,
                      fontSize: "28px",
                      color: "white",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "10px",
                    }}
                  >
                    ×
                  </button>
                  <img
                    src={lightboxImg}
                    className="mfp-img"
                    alt="gallery preview"
                    style={{ maxWidth: "90vw", maxHeight: "90vh" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectGallery;
