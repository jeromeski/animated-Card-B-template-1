import React from 'react'
import {Link} from 'react-router-dom'

const CardComponent = ({imgURI}) => 
  <div className="blog-one__single">
    <div className="blog-one__single-inner">
      <div className="blog-one__image">
        <Link href="/news-details">
          <a>+</a>
        </Link>
        <img alt='' src={imgURI}/>
      </div>
    </div>
  </div>

export default CardComponent