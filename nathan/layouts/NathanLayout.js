"use client";
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import ScrollToTop from "@/components/ScrollToTop";
import { nathanUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
const NathanLayout = ({
  children,
  bodyClass = "dark-scheme",
  rootElements = {
    "--primary-color": "#ffffff",
    "--primary-color-rgb": "255, 255, 255",
    "--secondary-color": "#ffffff",
    "--secondary-color-rgb": "255, 255, 255",
  },
  darkMode = true,
  footerShape = false,
  noFooter = false,
  noScroll = false,
}) => {
  useEffect(() => {
    nathanUtility.scrollAnimation();
    nathanUtility.shuffleText();
    nathanUtility.jarallax();
    nathanUtility.fitText();
    nathanUtility.progressBar();
  }, []);
  useEffect(() => {
    document.querySelector("body").className = bodyClass;
  }, []);

  return (
    <Fragment>
      <EmbedPopup />
      <ImageView />
      <div id="wrapper" style={rootElements}>
        {!noScroll && <ScrollToTop darkMode={darkMode} />}
        {children}
        {!noFooter && <Footer footerShape={footerShape} />}
      </div>
    </Fragment>
  );
};
export default NathanLayout;
