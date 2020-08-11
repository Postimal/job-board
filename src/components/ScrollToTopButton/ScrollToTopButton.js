import React, { useEffect, useState } from 'react';

import './ScrollToTopButton.scss';

const ScrollToTopButton = () => {
  const [offset, setOffset] = useState(0);

  const listener = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  const scrollToTop = () => {
    const position = offset > 100 ? 0 : 5000;

    window.scrollTo({
      top: position,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={
        offset > 100 ? 'scroll-top__button rotate' : 'scroll-top__button'
      }
      name="scrollTop/Bottom"
      aria-label="Scroll To Top/Bottom"
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopButton;
