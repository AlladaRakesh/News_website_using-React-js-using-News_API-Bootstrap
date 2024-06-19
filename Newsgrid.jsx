import React from 'react';
import Newsitems from './Newsitems';

function Newsgrid({ newsData }) {
    return (
        <div className="container">
            <div className="row">
                {newsData.map((newsItem, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                        <Newsitems 
                            title={newsItem.title}
                            description={newsItem.description}
                            src={newsItem.src}
                            url={newsItem.url}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Newsgrid;
