import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../assets/img/about-img.png'

const About = () => {
    const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="about" className="about-section sec-padding">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>about me</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-img">
                    <div className="img-box">
                        <img src={aboutImg} alt="about img"/>
                    </div>
                </div>
                <div className="about-text">
                    <p>Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a
                        passion of mine and I am confident I would be an excellent addition to your organization. In
                        addition to my knowledge base, I actively seek out new technologies and stay up-to-date on
                        industry trends and advancements. This has allowed me to stay ahead of the curve and deliver
                        exceptional work to all of my employers, including those I've worked for on a project basis.
                    </p>
                    <h3>skills</h3>
                    <div className="skills">
                        <div className="skill-item">html</div>
                        <div className="skill-item">css</div>
                        <div className="skill-item">javascript</div>
                        <div className="skill-item">bootstrap</div>
                        <div className="skill-item">python</div>
                        <div className="skill-item">react</div>
                        <div className="skill-item">django</div>
                        <div className="skill-item">wordpress</div>
                        <div className="skill-item">scss/sass</div>
                        <div className="skill-item">tailwind css</div>
                    </div>

                    <div className="about-tabs">
                        <button type="button" className={`tab-item ${activeTab === "education" ? "active" : ""}`} data-target="#education" onClick={() => setActiveTab("education")}>education</button>
                        <button type="button" className={`tab-item ${activeTab === "experience" ? "active" : ""}`} data-target="#experience" onClick={() => setActiveTab("experience")}>experience</button>
                    </div>

                    {activeTab === "education" &&
                        <div className="tab-content active" id="education">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className="date">2016 - 2020</span>
                                    <h4>bachelor of science - <span>University of Abuja</span></h4>
                                    <p>Computer Science</p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">2022 - 2023</span>
                                    <h4>Codar institute of technology - <span>Codar School</span></h4>
                                    <p>Python Full-Stack web development</p>
                                </div>
                            </div>
                        </div>
                    }
                    
                    {activeTab === "experience" && 
                        <div className="tab-content active" id="experience">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className="date">February 2021 to August 2021</span>
                                    <h4>front end web developer | freelance- <span>Ict Fingers community</span></h4>
                                    <p>
                                        Planned website development, converting mockups into usable web presence with
                                        HTML, JavaScript, and JSON coding. Oversaw web platform testing, troubleshooting
                                        and user sampling prior to live deployment
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">February 2023 to April 2023</span>
                                    <h4>Web Development Intern  <span>Zidio</span></h4>
                                    <p>
                                        Collaborated with a team of developers to design and implement responsive web
                                        applications using HTML, CSS, and JavaScript. Assisted in debugging and
                                        troubleshooting issues, ensuring optimal performance and user experience.
                                        Participated in code reviews and contributed to the development of best
                                        practices for web development.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">May 2023 to aug 2023</span>
                                    <h4>backend(python) web developer - <span>freelance</span></h4>
                                    <p>Integrating python(django) templates, models and views framework and also
                                        database into built web pages as the backend server-side.</p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">dec 2023 to jan 2025</span>
                                    <h4>web development instructor - <span>Codar Tech Africa</span></h4>
                                    <p>Led beginner to intermediate-level training sessions on modern web development, focusing on HTML, CSS, JavaScript, and foundational frontend/backend concepts. Mentored students through hands-on projects, code reviews, and debugging exercises. Designed structured lesson plans, facilitated live coding sessions, and supported learners in building real-world web applications while promoting best practices and problem-solving skills.</p>
                                </div>

                                <div className="timeline-item">
                                    <span className="date">mar 2025 to present</span>
                                    <h4>Private Web Development Tutor <span>freelance</span></h4>
                                    <p>Provide one-on-one and small group tutoring sessions focused on web development fundamentals and practical application. Design personalized learning plans tailored to each student’s pace and goals, covering topics like HTML, CSS, JavaScript, and Git. Offer mentorship, project guidance, and continuous support to help learners build confidence, complete real-world projects, and transition into tech careers or academic excellence.</p>
                                </div>
                            </div>
                        </div>                    
                    }

                    

                    <Link to="https://mi-resume.vercel.app/" target="_blank" className="btn">View Resume</Link>
                    <Link to="/contact" className="btn link-item">contact me</Link>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About
