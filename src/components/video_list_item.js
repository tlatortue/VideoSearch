import React from 'react';

const VideoListItem = ({video}) => {

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className= "media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoListItem;