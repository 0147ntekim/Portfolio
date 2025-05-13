import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/img/profile-img.png'


const Home = () => {
  return (
    <>
        <section className="home-section align-items-center" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="home-text">
                        <p>Hello, I'm</p>
                        <h1>Ntekim Joe-Joe</h1>
                        <h2>Full-stack Web Developer</h2>
                        <Link to="/about" className="btn link-item">more about me</Link>
                        <Link to="/portfolio" className="btn link-item">portfolio</Link>
                    </div>
                    <div className="home-img">
                        <div className="img-box">
                            <img src={profileImg} alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Home;
