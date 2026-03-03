"use client";
import { useState } from "react";

const WorksFilter = ({ onFilterChange, activeFilter = "all" }) => {
  const filters = [
    { key: "all", label: "Tümü" },
    { key: "photo", label: "📷 Fotoğraf" },
    { key: "video", label: "🎬 Video" },
  ];

  return (
    <div className="d-flex gap-3 mb-4 wow fadeInUp" data-wow-delay=".3s">
      {filters.map((filter) => (
        <button
          key={filter.key}
          className={`btn btn-sm ${
            activeFilter === filter.key
              ? "btn-light text-dark"
              : "btn-outline-light"
          } rounded-pill px-4`}
          onClick={() => onFilterChange(filter.key)}
          style={{
            transition: "all 0.3s ease",
            border: activeFilter === filter.key ? "none" : "1px solid rgba(255,255,255,0.3)",
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default WorksFilter;
