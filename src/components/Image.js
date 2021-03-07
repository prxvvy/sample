import React from 'react';

const Image = props => {

    const { previewURL, largeImageURL, likes, tags, views, comments } = props.img;

    return (
        <div className="col-12 col-sm6  col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img
                    src={previewURL}
                    alt={tags}
                    className="card-img-top"
                />
                <div className="card-body">
                    <p className="card-text">{likes} Likes</p>
                    <p className="card-text">{views} Views</p>
                    <p className="card-text">{comments} Comments</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">View image</a>
                </div>
            </div>
        </div>
    )
}

export default Image;