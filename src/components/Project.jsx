export default function Project (props) {
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