// src/components/AddBlogForm.jsx
import React, { useState } from 'react';
import styles from './AddBlogForm.module.css'; // Import styles

function AddBlogForm({ onAddBlog }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !content || !date) {
      alert('Please fill in all fields!');
      return;
    }
    onAddBlog({ title, content, date });
    setTitle(''); setContent(''); setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}> {/* Apply form class */}
      <h2>Add New Blog Post</h2>
      <div className={styles.formGroup}> {/* Apply formGroup class */}
        <label htmlFor="title">Title:</label>
        <input
          type="text" id="title" value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content" value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="date">Date:</label>
        <input
          type="date" id="date" value={date} // Changed to type="date" for better UX
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.submitButton}>Add Blog</button> {/* Apply button class */}
    </form>
  );
}
export default AddBlogForm;