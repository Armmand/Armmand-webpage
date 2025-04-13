import React from "react";
import "./Resume.css";
import photo from "../images/photo2.jpg"; // Update to your actual image path

function Resume() {
  return (
    <section className="resume-container" id="resume">
      <div className="resume-left">
        <img src={photo} alt="Profile" className="profile-photo" />

        <div className="resume-block">
          <h3>Contact</h3>
          <p>📞 919 260-1910</p>
          <p>📞 919 903-5339</p>
          <p>✉️ alston.armmand@gmail.com</p>
          <p>📍 North Carolina, USA</p>
        </div>

        <div className="resume-block">
          <h3>Key Skills</h3>
          <ul>
            <li>HTML, CSS, JS, React, Node, PHP, MySQL, MongoDB</li>
            <li>WordPress, Salesforce Admin</li>
            <li>Python, Java, Ruby</li>
            <li>SQL, Git, GitHub</li>
            <li>Project Mgmt, ITIL, Jira</li>
            <li>Customer Support, SysAdmin</li>
          </ul>
        </div>

        <div className="resume-block">
          <h3>Certifications</h3>
          <ul>
            <li>ITIL Foundation</li>
            <li>Project Management (PeopleCert)</li>
            <li>Full-Stack Web Dev</li>
            <li>Salesforce Admin</li>
          </ul>
        </div>

        <div className="resume-block">
          <h3>Education</h3>
          <ul>
            <li>UNC Chapel Hill – CS & SE (2017–2019)</li>
            <li>Durham Tech – Emergency Mgmt (2017–2018)</li>
            <li>NCCU – Business Admin (2014–2015)</li>
            <li>Sandhills CC – Criminal Justice (2008–2010)</li>
          </ul>
        </div>
      </div>

      <div className="resume-right">
        <h2>Professional Experience</h2>

        <div className="job">
          <h4>Gallery Systems Inc. <span>Web Developer | Dec 2022 – Present</span></h4>
          <p>Designed/maintained web apps, delivered client services, managed tech projects.</p>
        </div>

        <div className="job">
          <h4>MEMA <span>Business Systems Applications Specialist | Oct 2022 – Apr 2023</span></h4>
          <p>Built custom apps, maintained databases, and supported software systems.</p>
        </div>

        <div className="job">
          <h4>Prometheus Group <span>Support Engineer | Nov 2021 – Oct 2022</span></h4>
          <p>Resolved software issues, CI/CD maintenance, user training.</p>
        </div>

        <div className="job">
          <h4>Code The Dream <span>Full-Stack Engineer Intern | Apr 2019 – Nov 2021</span></h4>
          <p>Built React/Node apps, mentored junior devs, contributed to team projects.</p>
        </div>

        <div className="job">
          <h4>CHCCS <span>Support Specialist (T1-T3) | 2017 – 2021</span></h4>
          <p>Supported all district IT needs, resolved hardware/software issues.</p>
        </div>

        <div className="job">
          <h4>Law Enforcement <span>Various Roles | 2009 – 2017</span></h4>
          <p>Investigated cases, led school safety, community liaison.</p>
        </div>

        <h2>Projects</h2>
        <div className="job">
          <h4>Inventory Management System</h4>
          <p>Full-stack app with React, Node, MongoDB, external APIs.</p>
        </div>

        <div className="job">
          <h4>Custom Business Website</h4>
          <p>WordPress site with custom themes, responsive design, UX focus.</p>
        </div>
      </div>
    </section>
  );
}

export default Resume;

