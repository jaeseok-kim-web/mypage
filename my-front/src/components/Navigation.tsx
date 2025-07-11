import React from "react";

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "1rem",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
          margin: 0,
          padding: 0,
          justifyContent: "center",
        }}
      >
        <li>
          <button
            onClick={() => scrollToSection("home")}
            style={{
              color: "white",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            홈
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            style={{
              color: "white",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            About me
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("skills")}
            style={{
              color: "white",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              color: "white",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              color: "white",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
