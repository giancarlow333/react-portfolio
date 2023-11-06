import Project from "../components/Project";

export default function Portfolio() {
    return (
      <>
        <h1 className="section-header">PORTFOLIO</h1>
        <section className="section-contents project-grid">
          <Project 
            imgurl="https://giancarlow333.github.io/portfolio/assets/img/solar_system_diagrammer.png"
            name="Solar System Diagram Generator"
            text="JavaScript/SVG"
            github="https://github.com/giancarlow333/solar-system-diagrammer"
            livelink="https://giancarlow333.github.io/solar-system-diagrammer/"
          />
        </section>
      </>
    );
}