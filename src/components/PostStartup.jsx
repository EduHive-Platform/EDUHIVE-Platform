import React from 'react';
import './PostStartup.css';

function PostStartup() {
  return (
    <div className="App">
      <div className="post-startup">
        <header>
          <nav>
            <ul className="nav-links">
              <li><a href="#profile">My Profile</a></li>
              <li><a href="#post">Post</a></li>
              <li><a href="#mailbox">Mailbox</a></li>
              <li><a href="#plaza">Plaza</a></li>
            </ul>
            <div className="social-links">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </nav>
          <h1>EduHive</h1>
        </header>
        <main>
          <h2>Post your startup, closer to your dream</h2>
          <form>
            <div className="form-group">
              <label>
                Title *
                <input type="text" placeholder="e.g. Eduhive is hiring" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Description
                <textarea placeholder="Eduhive is a full student run online projects matching platform, we need 5 to 10 students who are good at front-end, back-end, and UI design"></textarea>
              </label>
            </div>
            <div className="form-group">
              <label>
                Credit *
                <select required>
                  <option value="">Select a credit</option>
                  {/* Add other options here */}
                </select>
              </label>
            </div>
            <div className="form-group employees-allocation">
              <label>
                Employees Allocation *
                <div className="job-type-container">
                  <input type="text" placeholder="Job Type" required />
                  <input type="text" placeholder="Job Description (If needed)" />
                  <input type="number" placeholder="Number of Employees" required />
                </div>
              </label>
            </div>
            <div className="form-group">
              <label>
                Requirement/Skills *
                <input type="text" placeholder="Python, JavaScript" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Institution Range *
                <input type="text" required />
              </label>
            </div>
            <div className="form-group">
              <label>
                Duration
                <input type="text" placeholder="2024-2027" />
              </label>
            </div>
            <div className="form-group">
              <label>
                Other Info
                <textarea placeholder="More info will be more helpful"></textarea>
              </label>
            </div>
            <div className="form-group">
              <label>
                Signature *
                <input type="text" placeholder="FULL NAME" required />
              </label>
            </div>
            <div className="form-group">
              <button type="button" className="btn-add">+ Add a Job Type</button>
            </div>
            <div className="form-group">
              <button type="submit" className="btn-post">Post</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default PostStartup;
