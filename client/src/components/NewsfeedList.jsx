import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsfeedList = () => {
  const [newsfeeds, setNewsfeeds] = useState([]);

  const newfeedItems = useEffect(() => {
    axios.get('/api/newsfeeds').then(({ data }) => {
      setNewsfeeds(data);
    });
  }, []);

  return (
    <div>
      {newsfeeds.map(({ title, id }) => {
        return (
          <div key={id}>
            <Link to={`/${id}`}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default NewsfeedList;
