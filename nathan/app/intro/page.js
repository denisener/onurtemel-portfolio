"use client";
import NathanLayout from "@/layouts/NathanLayout";
import Link from "next/link";
import { useEffect } from "react";

const demoData = [
  {
    id: "1",
    href: "/",
    title: "Main Demo Dark",
    images: ["index", "works", "about"],
  },
  {
    id: "2",
    href: "/02_index",
    title: "Main Demo Light",
    images: ["02_index", "02_works", "02_about"],
  },
  {
    id: "6",
    href: "/06_index",
    title: "Freelancer",
    images: ["06_index", "06_works", "06_blog"],
  },
  {
    id: "7",
    href: "/07_index",
    title: "Freelancer Light",
    images: ["07_index", "07_works", "07_blog"],
  },
  {
    id: "3",
    href: "/03_index",
    title: "Makeup Artist",
    images: ["03_index", "03_works", "03_about"],
  },
  {
    id: "4",
    href: "/05_index",
    title: "Fitness Trainer",
    images: ["05_index", "05_about", "05_works"],
  },
  {
    id: "5",
    href: "/04_index",
    title: "Photographer",
    images: ["04_index", "04_works", "04_about"],
  },
  {
    id: "8",
    href: "/08_index",
    title: "Chef",
    images: ["08_index", "08_services", "08_testimonials"],
  },
];

const page = () => {
  useEffect(() => {
    const handleMouseEnter = (id, bgColor, textColor) => {
      const element = document.getElementById(`demo_${id}`);
      if (element) {
        element.addEventListener("mouseenter", function () {
          const section = document.querySelector("section");
          if (section) {
            section.style.background = bgColor;
          }
          document
            .querySelectorAll("span,h4")
            .forEach((el) => (el.style.color = textColor));
        });
      }
    };

    const demoColors = [
      { id: "1", bg: "#000000", text: "#ffffff" },
      { id: "2", bg: "#ffffff", text: "#000000" },
      { id: "3", bg: "#C37D87", text: "#ffffff" },
      { id: "4", bg: "#C8F418", text: "#000000" },
      { id: "5", bg: "#000000", text: "#ffffff" },
      { id: "6", bg: "#E04B18", text: "#ffffff" },
      { id: "7", bg: "#b8fe65", text: "#000000" },
      { id: "8", bg: "#000000", text: "#ffffff" },
      { id: "9", bg: "#df4a34", text: "#ffffff" },
      { id: "10", bg: "#390099", text: "#ffffff" },
    ];

    demoColors.forEach(({ id, bg, text }) => handleMouseEnter(id, bg, text));

    const darkSchemeElement = document.querySelector(".demo-dark-scheme");
    if (darkSchemeElement) {
      darkSchemeElement.addEventListener("mouseenter", function () {
        const section = document.querySelector("section");
        if (section) {
          section.style.background = "#000000";
        }
        document
          .querySelectorAll("span,h4")
          .forEach((el) => (el.style.color = "#ffffff"));
      });
    }
  }, []);

  return (
    <NathanLayout noFooter={true} noScroll={true}>
      <div className="section-dark no-bottom no-top" id="content">
        <div id="top" />
        <section className="v-center section-anim">
          <div className="container">
            <div className="row g-5">
              {demoData.map((demo) => (
                <div key={demo.id} className="col-md-6 text-center">
                  <div className="demo-hover hover relative">
                    <Link
                      id={`demo_${demo.id}`}
                      href={demo.href}
                      className="d-block relative"
                    >
                      <img
                        src={`demo/${demo.images[0]}.webp`}
                        className="img-1 w-60 relative z-index-3 shadow-soft"
                        alt=""
                      />
                      <img
                        src={`demo/${demo.images[1]}.webp`}
                        className="img-2 absolute"
                        alt=""
                      />
                      <img
                        src={`demo/${demo.images[2]}.webp`}
                        className="img-3 absolute"
                        alt=""
                      />
                    </Link>
                    <Link href={demo.href}>
                      <h4 className="mt-3 shuffle">{demo.title}</h4>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div id="buy-now" classname="show-on-scroll">
        <a
          classname="btn-buy"
          href="https://themeforest.net/cart/configure_before_adding/52509276"
          target="_blank"
        >
          Buy on <img src="demo/envato.png" alt="image" />
        </a>
      </div>
    </NathanLayout>
  );
};

export default page;
