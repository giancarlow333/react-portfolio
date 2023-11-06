import Project from "../components/Project";

export default function Portfolio() {
    return (
      <>
        <h1 className="section-header">PORTFOLIO</h1>
        <section className="section-contents project-grid">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </section>
      </>
    );
  }
  