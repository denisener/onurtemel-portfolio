"use client";
import { nathanUtility } from "@/utility";
import { Fragment, useEffect } from "react";
const ScrollToTop = ({ darkMode = true }) => {
  useEffect(() => {
    nathanUtility.backToTop();
  }, []);
  return (
    <Fragment>
      <div className={`float-text show-on-scroll ${darkMode ? "dark" : ""}`}>
        <span>
          <a href="#">Scroll to top</a>
        </span>
      </div>
      <div className={`scrollbar-v show-on-scroll ${darkMode ? "dark" : ""}`} />
    </Fragment>
  );
};
export default ScrollToTop;
