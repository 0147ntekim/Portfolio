import '../assets/css/portfolioPopup.css';
import { useEffect, useRef, useState } from 'react';


export default function PortfolioPopup({ item, onClose, position }) {
    const popupRef = useRef(null);
    const [style, setStyle] = useState({});

    useEffect(() => {
        if (popupRef.current && position) {
        const { top, left, height } = position;
        const popupHeight = popupRef.current.offsetHeight;

        setStyle({
            position: 'absolute',
            top: `${top + height + 10}px`,
            left: `${left}px`,
            zIndex: 1000,
        });
        }
    }, [position]);


    if (!item) return null;
  
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className="popup-content absolute-popup"
                style={style}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={onClose}>×</button>
                <img src={item.imgSrc} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.liveLink} className="btn" target="_blank" rel="noopener noreferrer">
                    View Project live
                </a>
            </div>
      </div>
    );
  }
  