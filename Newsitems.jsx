import React from 'react';
import image from '../assets/OIP.jpeg'
function Newsitems({ title, description, src, url }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
      <div className="card bg-dark text-light h-100">
        <img src={src?src:image} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '200px' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description?description:"DATA IS NOT AVAILABLE SORRY CLICK ON READ MORE"}</p>
          <a href={url} className="btn btn-primary mt-auto">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default Newsitems;
