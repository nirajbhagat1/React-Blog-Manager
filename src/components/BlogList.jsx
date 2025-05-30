// src/components/BlogList.jsx
import React from 'react';
import BlogItem from './BlogItem';
import styles from './BlogList.module.css'; // Import the CSS Module

function BlogList({ blogs, onDeleteBlog }) {
  if (!blogs || blogs.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px', fontStyle: 'italic' }}>No blog posts yet. Why not add one?</p>;
  }

  return (
    // Use the grid container style
    <div className={styles.blogListContainer}> 
      {blogs.map((blog) => (
        <BlogItem
          key={blog.id}
          id={blog.id}
          title={blog.title}
          summary={blog.summary}
          date={blog.date}
          onDelete={onDeleteBlog}
        />
      ))}
    </div>
  );
}

export default BlogList;