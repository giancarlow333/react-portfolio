import Project from "../components/Project";

export default function Portfolio() {
  const projdata = [
    {
      imgurl: "../assets/pexels-instawalli-169789.jpg",
      name: "Project1"
    },
    {
      imgurl: "../assets/pexels-instawalli-169789.jpg",
      name: "Project2"
    },
  ];

    return (
      <>
        <h1 className="section-header">PORTFOLIO</h1>
        <p className="section-contents">Some select projects:</p>
        <section className="project-grid">

        </section>
      </>
    );
    );
}