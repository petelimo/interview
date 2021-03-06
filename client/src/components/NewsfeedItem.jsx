import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsfeedItem = ({
  match: {
    params: { id },
  },
}) => {
  const [currentItem, setCurrentItem] = useState({});
  useEffect(() => {
    axios.get(`/api/newsfeeds/${id}`).then(({ data }) => setCurrentItem(data));
  }, [id]);
  return (
    <div>
      <Link to='/'>
        <button>Back to Newsfeed &larr;</button>
      </Link>
      <h1> {currentItem.title} </h1>
      <p> {currentItem.content} </p>
    </div>
  );
};

export default NewsfeedItem;
