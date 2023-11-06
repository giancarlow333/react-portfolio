export default function Project (props) {
    return (
        <div className="card">
            <img src={props.imgurl} />
            <div className="card-text">
                <h3>{props.name}</h3>
                <p>{props.text}</p>
                <p><a href={props.github}>GitHub</a> / <a href={props.livelink}>Live</a></p>
            </div>
        </div>
    );
}