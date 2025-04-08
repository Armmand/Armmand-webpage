import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-content">
        <h2>Résumé</h2>

        <div className="resume-section">
          <h3>Key Skills</h3>
          <ul>
            <li>Web Development: HTML, CSS, JavaScript, React, Node.js, PHP, MySQL, MongoDB, WordPress, Salesforce Administrator</li>
            <li>Programming: Python, Ruby, Java</li>
            <li>Database Management: SQL, relational databases, database queries</li>
            <li>Version Control: Git, GitHub</li>
            <li>Technical Support: Troubleshooting, customer support, system administration</li>
            <li>Project Management: Agile, ITIL, Jira, cross-functional collaboration</li>
            <li>Soft Skills: Communication, problem-solving, team collaboration, multitasking, customer service</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Certifications & Professional Development</h3>
          <ul>
            <li>ITIL Foundation Certificate in IT Service Management</li>
            <li>Project Management Training (PeopleCert)</li>
            <li>Full-Stack Web Development Certification</li>
            <li>Courses: React.js, Node.js, Database Management, Salesforce Administrator</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Relevant Experience</h3>
          <ul>
            <li>
              <strong>Gallery Systems Inc. (Web Developer)</strong> — Dec 2022 – Present
              <p>Designed and maintained web apps using modern technologies. Delivered professional services, managed projects, and provided customer support.</p>
            </li>
            <li>
              <strong>MEMA (Business Systems Applications Specialist)</strong> — Oct 2022 – Apr 2023
              <p>Developed custom apps, maintained software, supported systems, and built web solutions.</p>
            </li>
            <li>
              <strong>Prometheus Group (Support Engineer)</strong> — Nov 2021 – Oct 2022
              <p>Resolved technical software issues and helped manage CI/CD workflows.</p>
            </li>
            <li>
              <strong>Code The Dream (Full-Stack Engineer Intern)</strong> — Apr 2019 – Nov 2021
              <p>Built full-stack React/Node apps and mentored new developers.</p>
            </li>
            <li>
              <strong>Chapel Hill-Carrboro City Schools (Support Specialist T3, T2, T1)</strong> — 2017 – 2021
              <p>Provided district-wide technical support, handled hardware/software issues, and supported IT systems.</p>
            </li>
            <li>
              <strong>Law Enforcement Roles (Various Depts)</strong> — 2009 – 2017
              <p>Deputy Investigator, Homicide Investigator, SRO – managed investigations and school safety.</p>
            </li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Projects</h3>
          <ul>
            <li>
              <strong>Inventory Management System:</strong> Full-stack app using React, Node.js, MongoDB, and external APIs.
            </li>
            <li>
              <strong>Custom Business Website:</strong> WordPress-based site with custom themes, responsive design, and UX improvements.
            </li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Education</h3>
          <ul>
            <li><strong>UNC Chapel Hill:</strong> Computer Science, Software Engineering (2017–2019)</li>
            <li><strong>Durham Tech:</strong> Emergency Management (2017–2018)</li>
            <li><strong>NCCU:</strong> Business Administration & Management (2014–2015)</li>
            <li><strong>Sandhills Community College:</strong> Criminal Justice (2008–2010)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
