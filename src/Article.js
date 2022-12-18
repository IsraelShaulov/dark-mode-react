import React from 'react';
import dayjs from 'dayjs';

const Article = ({ title, date, length, snippet }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{dayjs(date).format('dddd, MMMM D, YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
