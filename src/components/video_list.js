import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // for each element of videos, we'll have a function that gets called w/ a
    // single video
    const videoItems = props.videos.map((video) => {
        // with onVideoClick, we're taking the 'prop' thats coming from App and
        // passing it down into 'VideoListItem'
        return (
            <VideoListItem 
                key={video.etag}
                video={video} 
            />
        );
    });

    return (
        <ul>{videoItems}</ul>
    );
};

export default VideoList;