// components/PortfolioItem.js (Updated)
import React, { useState } from 'react';

const PortfolioItem = ({ title, imgSrc, onViewProject }) => {

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-thumbnail">
        <img src={imgSrc} loading='lazy' alt="portfolio thumbnail" />
      </div>
      <h3 className="portfolio-item-title">{title}</h3>
      <button
        type="button"
        className="btn view-project-btn"
        onClick={onViewProject}
      >
        view project
      </button>
    </div>
  );
};

export default PortfolioItem;
