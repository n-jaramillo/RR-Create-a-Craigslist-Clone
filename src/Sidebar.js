import Help from './Help'

function Sidebar() {
    return (
        <div className='sideBar' style={{padding: "10px"}}>
            <h2>furniture</h2>
            <div>
                <button>all</button>
                <button>owner</button>
                <button>dealer</button>
            </div>
            <br />
            <form>
                <input type="checkbox" id="title" name="title" />
                <label for="title">search titles only</label>
                <br />
                <input type="checkbox" id="image" name="image" />
                <label for="image">has image</label>
                <br />
                <input type="checkbox" id="today" name="today" />
                <label for="today">posted today</label>
                <br />
                <input type="checkbox" id="duplicates" name="duplicates" />
                <label for="duplicates">bundle duplicates</label>
                <br />
                <input type="checkbox" id="areas" name="areas" />
                <label for="areas">include nearby areas</label>
                <br />
                <h6 style={{ "margin-bottom": "-2px" }}>MILES FROM ZIP</h6>
                <input type="text" id="miles" name="miles" placeholder="miles" style={{ width: "45%", float: "left" }} />
                <input type="text" id="zip" name="zip" placeholder="from zip" style={{ width: "45%", float: "right" }} />
                <br />

                <h6 style={{ "margin-bottom": "-2px" }}>PRICE</h6>
                <input type="text" id="min" name="min" placeholder="min" style={{ width: "45%", float: "left" }} />
                <input type="text" id="max" name="max" placeholder="max" style={{ width: "45%", float: "right" }} />
                <br />

                <h6 style={{ "margin-bottom": "-2px" }}>MAKE AND MODEL</h6>
                <input type="text" id="make" name="make" placeholder="make / model" />
                <br />
                <br />
                <input type="checkbox" id="title" name="crypto" />
                <label for="crypto">cryptocurrency ok</label>
                <br />
                <input type="checkbox" id="delivery" name="delivery" />
                <label for="delivery">delivery available</label>
                <br />
                <ul>
                    <li><a href='/'>language of posting</a></li>
                    <li><a href='/'>condition</a></li>
                </ul>
                <button type='reset'>reset</button>
                <button type='submit'>update search</button>
                <br />
            </form>
            <br />
            <Help />
        </div>
    )
}

export default Sidebar