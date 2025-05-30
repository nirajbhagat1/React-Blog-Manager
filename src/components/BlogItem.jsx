// src/components/BlogItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogItem.module.css';

function BlogItem(props) {
  const { id, title, summary, date, onDelete } = props;

  const handleDeleteClick = () => {
    if (window.confirm(`Are you sure you want to delete the post "${title}"?`)) {
      onDelete(id);
    }
  };

  if (typeof id === 'undefined' || id === null) {
    // ... (error handling for missing id remains the same) ...
    console.error("BlogItem received undefined or null id for title:", title);
    return (
      <div className={styles.blogItem}>
        <h2 className={styles.title}>{title} (Error: Missing ID for link)</h2>
        <p className={styles.summary}>{summary}</p>
        <small className={styles.date}>Published on: {date}</small>
        {onDelete && (
          <button
            onClick={handleDeleteClick}
            className={styles.deleteButton}
            aria-label={`Delete post titled ${title}`}
          >
            Delete
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.blogItem}> {/* This will be our main flex container */}
      {/* This div can be the main content area that grows */}
      <div className={styles.cardBody}> 
        <h2 className={styles.title}>
          <Link
            to={`/blog/${id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
            aria-label={`Read more about ${title}`}
          >
            {title}
          </Link>
        </h2>
        <p className={styles.summary}>
          {summary}
        </p>
      </div>

      {/* NEW: Footer div to group date and delete button */}
      <div className={styles.cardFooter}>
        <small className={styles.date}> 
          Published on: {date}
        </small>
        {onDelete && (
          <button
            onClick={handleDeleteClick}
            className={styles.deleteButton}
            aria-label={`Delete post titled ${title}`}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default BlogItem;