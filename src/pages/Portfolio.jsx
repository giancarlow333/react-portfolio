import Project from "../components/Project";

export default function Portfolio() {
    return (
      <>
        <h1 className="section-header">PORTFOLIO</h1>
        <section className="section-contents project-grid">
          <Project 
            imgurl="/img/solar_system_diagrammer.png"
            name="Solar System Diagram Generator"
            text="JavaScript/SVG"
            github="https://github.com/giancarlow333/solar-system-diagrammer"
            livelink="https://giancarlow333.github.io/solar-system-diagrammer/"
          />
          <Project 
            imgurl="/img/ravishing_reads.png"
            name="Ravishing Reads"
            text="Handlebars/MySQL"
            github="https://github.com/giancarlow333/ravishing-reader"
            livelink="http://ravishing-reads-a2209ea97ad8.herokuapp.com/"
          />
          <Project 
            imgurl="/img/property-mgmt-portal.png"
            name="Property Portal"
            text="JavaScript/jQuery/Tailwind/APIs"
            github="https://github.com/giancarlow333/property-mgmt-portal"
            livelink="https://giancarlow333.github.io/property-mgmt-portal/index.html"
          />
          <Project 
            imgurl="/img/coding-quiz_mockup.png"
            name="Coding Quiz"
            text="JavaScript/CSS"
            github="https://github.com/giancarlow333/coding-quiz"
            livelink="https://giancarlow333.github.io/coding-quiz/"
          />
          <Project 
            imgurl="/img/note_taker.png"
            name="JS Note Taker"
            text="JavaScript/CSS"
            github="https://github.com/giancarlow333/note-taker"
            livelink="https://limitless-bastion-53747-30bc20a6077a.herokuapp.com/notes"
          />
          <Project 
            imgurl="/img/sql_cms_in_use.png"
            name="SQL CMS"
            text="MySQL/Node.js Inquirer"
            github="https://github.com/giancarlow333/sql-cms"
            livelink="NULL"
          />
        </section>
      </>
    );
}