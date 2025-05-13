import React, { useState, useEffect } from 'react'


const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;
  return (
    <div className="page-loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Loader
