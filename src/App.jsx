// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AddBlogPage from './pages/AddBlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import './App.css';

function App() {
  const initialBlogs = [
    // ... (your existing initialBlogs array)
    {
      id: 1,
      title: 'Welcome to My React Blog!',
      summary: 'This is the first post on my new blog built with React. Exciting times!',
      content: 'Full content of the first post...',
      date: '2025-05-28',
    },
    {
      id: 2,
      title: 'Understanding React State',
      summary: 'A quick dive into how state works...',
      content: 'React state allows components to create and manage their own data...',
      date: '2025-05-29',
    },
    {
      id: 3,
      title: 'Exploring React Router',
      summary: 'Navigating between different "pages"...',
      content: 'React Router is the standard library for routing...',
      date: '2025-05-30',
    },
  ];

  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem('reactBlogAppBlogs');
    return savedBlogs ? JSON.parse(savedBlogs) : initialBlogs;
  });

  useEffect(() => {
    localStorage.setItem('reactBlogAppBlogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleAddBlog = (newBlogData) => {
    setBlogs((prevBlogs) => [
      ...prevBlogs,
      {
        ...newBlogData,
        id: Date.now(),
        summary: newBlogData.content.substring(0, 100) + '...'
      },
    ]);
  };

  // ***** NEW FUNCTION *****
  const handleDeleteBlog = (blogIdToDelete) => {
    setBlogs((prevBlogs) => prevBlogs.filter(blog => blog.id !== blogIdToDelete));
    // Optional: Navigate away if deleting from detail page, or show a confirmation
    // For now, this simply updates the list.
  };

  return (
    <Router>
      <div className="App">
        <nav style={{ backgroundColor: '#f0f0f0', padding: '10px 20px', marginBottom: '20px' }}>
          {/* ... (your existing nav links) ... */}
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link>
            </li>
            <li>
              <Link to="/add" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Add New Blog</Link>
            </li>
          </ul>
        </nav>

        <main style={{ padding: '0 20px' }}>
          <Routes>
            {/* ***** MODIFIED HomePage ROUTE ***** */}
            <Route 
              path="/" 
              element={<HomePage blogs={blogs} onDeleteBlog={handleDeleteBlog} />} 
            />
            <Route 
              path="/add" 
              element={<AddBlogPage onAddBlog={handleAddBlog} />} 
            />
            {/* ***** MODIFIED BlogDetailPage ROUTE (if you want delete from detail page too) ***** */}
            {/* For now, we'll focus on deleting from the list. If you also want to delete from the detail page,
                you'd pass onDeleteBlog to BlogDetailPage as well.
            */}
            <Route 
              path="/blog/:blogId" 
              element={<BlogDetailPage blogs={blogs} /* onDeleteBlog={handleDeleteBlog} */ />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px', borderTop: '1px solid #eee', fontSize: '0.9em', color: '#777' }}>
          <p>&copy; {new Date().getFullYear()} My React Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;