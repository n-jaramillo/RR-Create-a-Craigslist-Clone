import React from 'react'
import Posting from './Posting'


function Gallery() {
    const craigPost = require('./postings')

    let postList = craigPost.postings.map((data, i) => {
        return <Posting data={data} key={i} />
    })

    return (
        <div className='gallery'>
            <div>{postList}</div>
        </div>
    )
}

export default Gallery