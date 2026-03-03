"use client";
import { Fragment, useEffect, useRef, useState } from "react";

/**
 * Başlık metnini parent container'a sığdırır.
 * baseFontSize: Admin panelden gelen manuel değer (null ise otomatik)
 * "NATHAN" (6 harf) için referans değer: 480.8px @ 1920px ekran
 */
const FitParentTitle = ({
  title,
  baseFontSize = null,
  innitialFontSize = 480.8,
  subtitle,
  subtitleClasses = "abs abs-middle end-0 bg-color-1 text-white p-3 fs-40 text-uppercase xs-hide wow fadeIn",
}) => {
  const titleRef = useRef(null);
  const [fontSize, setFontSize] = useState(0);

  useEffect(() => {
    const fitText = () => {
      if (!titleRef.current) return;

      const screenRatio = window.innerWidth / 1920;
      let base;

      if (baseFontSize) {
        // Admin panelden manuel değer girilmişse onu kullan
        base = baseFontSize;
      } else {
        // Otomatik: harf sayısına göre ölçekle
        // NATHAN = 6 harf = 480.8px referans
        const referenceChars = 6;
        const charCount = (title || "NATHAN").length;
        base = innitialFontSize * (referenceChars / charCount);
      }

      setFontSize(base * screenRatio);
    };
    fitText();
    window.addEventListener("resize", fitText);
    return () => window.removeEventListener("resize", fitText);
  }, [title, baseFontSize, innitialFontSize]);

  return (
    <Fragment>
      <h1
        ref={titleRef}
        className="text-fit wow fadeInDown fit_to_parent animated"
        style={{
          margin: 0,
          padding: 0,
          fontSize: fontSize > 0 ? `${fontSize}px` : undefined,
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <div className={subtitleClasses} data-wow-delay=".5s">
          {subtitle}
        </div>
      )}
    </Fragment>
  );
};

export default FitParentTitle;
