'use client';
import React, { useState } from 'react';
import CodeSnippetEditor from '../componnets/CodeSnippetEditor';
const skills = [
  "CSS",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "Next.js",
  "Motion",
  "GitHub",
  "Node.js",
  "Langchain",
];
const Page = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(skills[0]);
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/addblogforbinayarajpersonalwebsite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          category,
          description,
          codeSnippet: code,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Blog submitted successfully!');
        // Clear form
        setTitle('');
        setCategory(skills[0]);
        setDescription('');
        setCode('');
      } else {
        alert(`Error: ${data.message || 'Something went wrong'}`);
      }
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container section">
      <h1>Add Blog</h1>
      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Blog Title</span>
        </label>
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Blog Category</span>
        </label>
        <select
          className="selectInput"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {skills.map((skill) => (
            <option key={skill} value={skill} className="selectOption">
              {skill}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Blog Description</span>
        </label>
        <textarea
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="input-label">
          <span className="label-text">Code Snippet</span>
        </label>
        <CodeSnippetEditor value={code} onChange={setCode} />
      </div>
      <button type="submit" className="btn" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
export default Page;
