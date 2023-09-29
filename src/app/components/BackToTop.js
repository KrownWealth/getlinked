import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="back-to-top"
      style={{ display: showButton ? "block" : "none" }}
      onClick={scrollToTop}
    >
      Top
      {/* <i className="fa-solid fa-arrow-up"></i> */}
    </button>
  );
};

export default BackToTop;