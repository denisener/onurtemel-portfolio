export const nathanUtility = {
  scrollAnimation() {
    /* This code snippet is checking if the `window` object is defined in the current environment. If
    it is defined, it assigns the `require("wowjs")` module to `window.WOW`. Then it initializes the
    `WOW` object by calling `new WOW.WOW().init()`. This code is likely setting up a scroll
    animation using the `wowjs` library when the window is available. */
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  preloader() {
    if (typeof window !== "undefined") {
      if (window.preloader === "off") {
        const loader = document.getElementById("de-loader");
        if (loader) {
          loader.style.display = "none";
        }
      }
      function copyText(element) {
        const copyText = element.textContent;
        const button = document.getElementById("btn_copy");
        navigator.clipboard
          .writeText(copyText)
          .then(() => {
            const originalText = button.textContent;
            button.textContent = "Copied!";
            button.classList.add("clicked");
            setTimeout(() => {
              button.textContent = originalText;
              button.classList.remove("clicked");
            }, 750);
          })
          .catch(() => {
            button.textContent = "Error";
          });
      }
      document
        .getElementById("btn_copy")
        .addEventListener("click", function () {
          const walletElement = document.getElementById("wallet");
          if (walletElement) {
            copyText(walletElement);
          }
        });
    }
  },
  shuffleText() {
    const velocity = 40;
    const shuffleElement = document.querySelectorAll(
      ".shuffle, .d-menu-1 li a, .btn-main, .btn-line"
    );
    shuffleElement.forEach((item) => {
      item.dataset.text = item.textContent;
    });

    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffleText = (element, originalText) => {
      const elementTextArray = originalText.split("");
      let randomText = [];

      const repeatShuffle = (times, index) => {
        if (index === times) {
          element.textContent = originalText;
          return;
        }
        setTimeout(() => {
          randomText = shuffle([...elementTextArray]);
          for (let i = 0; i < index; i++) {
            randomText[i] = originalText[i];
          }
          element.textContent = randomText.join("");
          repeatShuffle(times, index + 1);
        }, velocity);
      };

      repeatShuffle(originalText.length, 0);
    };

    shuffleElement.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        shuffleText(element, element.dataset.text);
      });
    });
  },
  fitText() {
    const textFitElement = document.querySelector(".text-fit");
    const maxWidthPerc = 100;
    const maxHeightPerc = 100;
    const group = null;
    const tAlign = "left";
    const fontFamily = "";
    const autoResize = true;
    if (textFitElement && typeof FitToParent === "function") {
      new FitToParent(
        textFitElement,
        maxWidthPerc,
        maxHeightPerc,
        group,
        tAlign,
        fontFamily,
        autoResize
      );
    }

    // -- shuffle text -----
    const velocity = 40;
    const shuffleElements = document.querySelectorAll(
      ".shuffle, .d-menu-1 li a, .btn-main, .btn-line"
    );

    shuffleElements.forEach((item) => {
      item.dataset.text = item.textContent;
    });

    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffleText = (element, originalText) => {
      const elementTextArray = originalText.split("");
      let randomText = [];

      const repeatShuffle = (times, index) => {
        if (index === times) {
          element.textContent = originalText;
          return;
        }
        setTimeout(() => {
          randomText = shuffle([...elementTextArray]);
          for (let i = 0; i < index; i++) {
            randomText[i] = originalText[i];
          }
          element.textContent = randomText.join("");
          repeatShuffle(times, index + 1);
        }, velocity);
      };

      repeatShuffle(originalText.length, 0);
    };

    shuffleElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        shuffleText(element, element.dataset.text);
      });
    });
  },
  jarallax() {
    if (typeof window !== "undefined") {
      const { jarallax } = require("jarallax");
      const elements = document.querySelectorAll(".jarallax");
      jarallax(elements);
    }
  },
  backToTop() {
    const scrollTrigger = 300; // You might want to adjust this value
    let t = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const floatText = document.querySelector(".float-text");
      const scrollbarV = document.querySelector(".scrollbar-v");

      if (scrollTop > scrollTrigger) {
        if (floatText) {
          floatText.classList.add("show");
          floatText.classList.remove("hide");
        }
        if (scrollbarV) {
          scrollbarV.classList.add("show");
          scrollbarV.classList.remove("hide");
        }
        t = 1;
      }

      if (scrollTop < scrollTrigger && t === 1) {
        if (floatText) {
          floatText.classList.add("hide");
          floatText.classList.remove("show");
        }
        if (scrollbarV) {
          scrollbarV.classList.add("hide");
          scrollbarV.classList.remove("show");
        }
        t = 0;
      }

      // scroll indicator
      const pixels = window.pageYOffset || document.documentElement.scrollTop;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (100 * pixels) / pageHeight;

      const scrollbar = document.querySelector("div.scrollbar");
      if (scrollbar) {
        scrollbar.style.width = `${progress}%`;
      }

      if (scrollbarV) {
        scrollbarV.style.height = `${progress}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const floatText = document.querySelector(".float-text");
    if (floatText) {
      floatText.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  },
  progressBar() {
    document.querySelectorAll(".d-skill").forEach(function (element) {
      const pos_y = element.getBoundingClientRect().top + window.scrollY;
      const value = element.getAttribute("data-value");
      const topOfWindow = window.scrollY;
    });
    de_progress();
    de_countdown();
    function de_progress() {
      document.querySelectorAll(".d-skill").forEach(function (element) {
        const pos_y = element.getBoundingClientRect().top + window.scrollY;
        const value = element.getAttribute("data-value");
        const topOfWindow = window.scrollY;
        const fillLine = element.querySelector(".d-fill-line");
        fillLine.setAttribute("data-value", value);
        fillLine.style.width = value;
        fillLine.style.transition = "width 0.5s ease-in-out";
      });
    }

    function de_countdown() {
      document.querySelectorAll(".de_countdown").forEach(function (element) {
        const y = element.dataset.year;
        const m = element.dataset.month;
        const d = element.dataset.day;
        const h = element.dataset.hour;
        const targetDate = new Date(y, m - 1, d, h);

        function updateCountdown() {
          const now = new Date();
          const difference = targetDate - now;

          if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
          } else {
            element.textContent = "Countdown finished!";
          }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
      });
    }
  },
};

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
