import React from 'react';
import PropTypes from 'prop-types';

export default function NewsItem(props) {
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={props.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href={props.url} className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
    );
}

NewsItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
}

NewsItem.defaultProps = {
    title: 'Krishna',
    desc: 'This ia description'
}
