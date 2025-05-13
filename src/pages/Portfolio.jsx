import React from 'react'
import PortfolioItem from '../components/PortfolioItem';
import PortfolioPopup from '../components/PortfolioPopup';
import { useState } from 'react';
import { projects } from '../data/projects';


const Portfolio = () => {
    const [popupItem, setPopupItem] = useState(null);
    const [popupPosition, setPopupPosition] = useState(null);


    const handleClick = (e, project) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPopupPosition({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
          height: rect.height,
        });
        setPopupItem(project);
    };

    const closePopup = () => {
        setPopupItem(null);
        setPopupPosition(null);
    };
  return (
    <section className="portfolio-section sec-padding" id="portfolio">
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h2>Recent Work</h2>
                </div>
             </div>
            <div className="row">
                {projects.map((project, index) => (
                    <PortfolioItem
                        key={index}
                        title={project.title}
                        imgSrc={project.imgSrc}
                        onViewProject={(e) => handleClick(e, project)}
                       

                    />
                ))}
            </div>  
            
            
        </div>

        {popupItem && (<PortfolioPopup item={popupItem} onClose={closePopup} position={popupPosition} />)}
    </section>

  )
}

export default Portfolio
