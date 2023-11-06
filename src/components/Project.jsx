export default function Project (props) {
    /*return (
        <div className="card">
            <img src=""/>
            <div className="card-text">
                <h3>Project Title</h3>
                <p>Project text</p>
            </div>
        </div>
    );*/
    return (
        <ul className="section-contents project-grid">
            {props.data.map( (item) => (
                <li className="card">
                    <img src={item.imgurl}/>
                    <div className="card-text">
                        <h3>{item.name}</h3>
                        <p>Project text</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}