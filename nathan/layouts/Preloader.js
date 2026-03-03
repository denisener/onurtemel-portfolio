"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      id="de-loader"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: loading ? "flex" : "none",
      }}
    >
      <div
        className="lds-roller"
        style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
      >
        <div
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <div
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <div
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <div
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <div
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <div
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <div
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
        <div
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        />
      </div>
    </div>
  );
};
export default Preloader;
