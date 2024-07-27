import React from 'react';
import './PostStartup.css';

function PostStartup() {
  return (
    <div className="App">
      <div className="post-startup">
        <header>
          <nav>
            <ul>
              <li><a href="#profile">My Profile</a></li>
              <li><a href="#post">Post</a></li>
              <li><a href="#mailbox">Mailbox</a></li>
              <li><a href="#plaza">Plaza</a></li>
            </ul>
            <div className="social-links">
              <a href="https://www.linkedin.com">LinkedIn</a>
              <a href="https://www.instagram.com">Instagram</a>
            </div>
          </nav>
          <h1>EduHive</h1>
          <div className="subtitle">Made with WIX STUDIO</div>
        </header>
        <main>
          <h2>Post your startup, closer to your dream</h2>
          <form>
            <label>
              Title *
              <input type="text" placeholder="e.g. Eduhive is hiring" />
            </label>
            <label>
              Description
              <textarea placeholder="Eduhive is a full student run online projects matchingup platform, we are need 5 to 10 students who are good at front-end and back-end and UI design"></textarea>
            </label>
            <label>
              Credit *
              <select>
                <option>Select a size</option>
                {/* Add other options here */}
              </select>
            </label>
            <div className="employees-allocation">
              <label>
                Employees Allocation *
                <div className="job-type-container">
                  <input type="text" placeholder="Job Type" />
                  <input type="text" placeholder="Job Description (If need)" />
                  <input type="number" placeholder="Number of Employees" />
                </div>
              </label>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default PostStartup;
