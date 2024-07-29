import React from 'react';
import './PostShortResearch.css';
import HeaderMain from '../components/HeaderMain';

function PostShortResearch() {

  const leftLinks = [
    { label: 'Profile', href: '/solutions' },
    { label: 'Post', href: '/about' },
    { label: 'Plaza', href: '/insights' },
    { label: 'Dashboard', href: '/contact' },
  ];

  const rightLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
  ];
  
  return (
    <div className="App">
      <div className="post-startup">
      <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
        <main>
          <h2>Post Short Research Opportunity</h2>
          <form>
            <label>
              Title *
              <input type="text" placeholder="e.g. Eduhive is hiring" />
            </label>
            <label>
              Description *
              <textarea placeholder="Eduhive is a full student run online projects matchingup platform, we are need 5 to 10 students who are good at front-end and back-end and UI design"></textarea>
            </label>
            <label>
              Area *
              <select>
                <option>Select an Area</option>
                {/* Add other options here */}
              </select>
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
            <label>
              Requirement/Skills *
              <input type="text" placeholder="e.g. Python, JavaScript" />
            </label>
            <label>
              Institution Range *
              <input type="text" placeholder="e.g. University/College" />
            </label>
            <label>
              Expectation *
              <input type="text" placeholder="e.g. One Week" />
            </label>
            <label>
              Other Info
              <textarea placeholder="More info will be more helpful"></textarea>
            </label>
            <label>
              Signature *
              <input type="text" placeholder="Full Name" />
            </label>
            <button type="submit">Post</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default PostShortResearch;
