// src/pages/BlogDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // To get URL parameters and link back

function BlogDetailPage({ blogs }) {
  const { blogId } = useParams(); // Get the 'blogId' from the URL, e.g., /blog/123

  // Find the blog post by its ID
  // Ensure blogId from params (string) is compared correctly with blog.id (number or string)
  const blog = blogs.find(b => String(b.id) === String(blogId));

  if (!blog) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Blog Post Not Found</h2>
        <p>Sorry, we couldn't find the blog post you were looking for.</p>
        <Link to="/">Go back to Homepage</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-page" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ display: 'block', marginBottom: '20px' }}>&larr; Back to All Posts</Link>
      <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>{blog.title}</h1>
      <p style={{ fontSize: '0.9em', color: '#777', marginBottom: '20px' }}>Published on: {blog.date}</p>
      <div className="blog-content" style={{ lineHeight: '1.7' }}>
        {/* Assuming blog.content contains the full HTML or plain text content.
            If it's plain text with newlines, you might want to render it differently,
            e.g., by splitting by newline or using <pre> tags, or using a markdown renderer.
            For simple text with newlines to be respected in HTML, you can use white-space: pre-line.
        */}
        <p style={{ whiteSpace: 'pre-line' }}>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetailPage;