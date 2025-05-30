// src/pages/HomePage.jsx
import React from 'react';
import BlogList from '../components/BlogList';
import styles from './HomePage.module.css'; // Import the CSS Module

function HomePage({ blogs, onDeleteBlog }) {
  return (
    <div className={styles.pageContent}> {/* Optional: a general wrapper */}
      <div className={styles.heroSection}> {/* Apply hero styles */}
        <h1>Welcome to Our Blog!</h1>
        <p>Check out our latest posts below.</p>
      </div>

      <BlogList blogs={blogs} onDeleteBlog={onDeleteBlog} />
    </div>
  );
}

export default HomePage;