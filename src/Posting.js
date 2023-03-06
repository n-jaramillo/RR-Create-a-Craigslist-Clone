const craigPost = require('./postings')

let postList = craigPost.postings.map((data, i) => {
    return <Posting data={data} key={i} />
})
function Posting(props) {
    return (
        <div className="posting" style={{ "border-radius": "5px" }}>
            <div style={{ position: "absolute", "background-color": "white", "border-right": "1px solid lightgray", "border-bottom": "1px solid lightgray", "border-radius": "2px", padding: "2px" }}>{props.data.price}</div>
            <img src={props.data.imageURL} style={{ width: "90%", height: "auto", margin: "0 auto", display: "block", "z-index": "-1" }} />
            <div style={{ padding: "5px" }}>
                <p>
                    <a href='/' style={{margin: "0 5px"}}>{props.data.title}</a>
                    <span style={{ width: "auto", "background-color": "white", border: "1px solid lightgray", "border-radius": "2px", padding: "2px" }}>{props.data.price}</span>
                </p>
            </div>
        </div>
    )
}

export default Posting