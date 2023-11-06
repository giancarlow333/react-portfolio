import Project from "../components/Project";

export default function Portfolio() {
    return (
      <>
        <h1 className="section-header">PORTFOLIO</h1>
        <Project projectData={data}/>
      </>
    );
}