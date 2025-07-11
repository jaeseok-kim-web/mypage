import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <div style={{ padding: "20px" }}>
            <h1>Skills</h1>
            <p>프론트엔드 개발 기술 스택을 보여주는 섹션입니다.</p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                React
              </div>
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                TypeScript
              </div>
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                JavaScript
              </div>
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                HTML/CSS
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section">
          <div style={{ padding: "20px" }}>
            <h1>Projects</h1>
            <p>개발한 프로젝트들을 보여주는 섹션입니다.</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                <h3>프로젝트 1</h3>
                <p>프로젝트 설명이 들어갑니다.</p>
              </div>
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                <h3>프로젝트 2</h3>
                <p>프로젝트 설명이 들어갑니다.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
