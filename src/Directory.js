function Directory() {
    return (
        <div className="directory" style={{display: "inline-flex", width: "100%"}}>
            <span style={{width: "50%"}}>
                <select name="view" id="view">
                    <option value="gallery">&#9744; gallery</option>
                </select>
            </span>
            <span style={{width: "50%"}}>
                <button>&lt;&lt;</button>
                <button>&lt; prev</button>
                <span>1 - 120 / 3000</span>
                <button>next &gt;</button>
            </span>
        </div>
    )
}

export default Directory