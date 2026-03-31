import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=30&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const res = await fetch(relatedVideo_url);
      const data = await res.json();
      setApiData(data.items || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item, index) => (
        <Link
          to={`/video/${item.id}`}  
          key={index}
          className="side-video-list"
        >
          <img
            src={item.snippet?.thumbnails?.medium?.url}
            alt={item.snippet?.title}
          />
          <div className="vid-info">
            <h4>{item.snippet?.title?.slice(0, 50)}...</h4>
            <p>{item.snippet?.channelTitle}</p>
            <p>{value_converter(item.statistics?.viewCount)} Views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;



