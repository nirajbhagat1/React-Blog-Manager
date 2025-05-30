// src/pages/AddBlogPage.jsx
import React from 'react';
import AddBlogForm from '../components/AddBlogForm';
// Optional: Create and import AddBlogPage.module.css if you have more page-specific styles
// import styles from './AddBlogPage.module.css';

function AddBlogPage({ onAddBlog }) {
  return (
    <div className="add-blog-page" style={{ padding: '20px' }}>
      {/* Center the introductory text */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}> {/* Added marginBottom */}
        <h1>Create a New Blog Post</h1>
        <p style={{ fontSize: '1.1em', color: '#555' }}> {/* Slightly styled paragraph */}
          Fill out the form below to add your latest thoughts to the blog.
        </p>
      </div>

      <AddBlogForm onAddBlog={onAddBlog} />
    </div>
  );
}

export default AddBlogPage;